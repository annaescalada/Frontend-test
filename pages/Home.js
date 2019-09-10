'use strict';

function Home(parentElement) {
  this.parentElement = parentElement;
  this.searchContainer = null;
  this.resultsContainer = null;
  this.loading = null;
  this.elements = null;
  this.userFromApi = null;
  this.userRepos = null;
  this.error = null;
}

Home.prototype.generate = function () {
  this.elements = `
  <section id="homeContainer" class="home-container">
    <div id="searchContainer"></div>
    <div id="resultsContainer"></div>
    </section>  
    `;
  this.render();
  this.getContainers();

  const searchBarInstance = new SearchBar(this.searchContainer, this.renderUser, this);
  searchBarInstance.generate();

}

Home.prototype.render = function () {
  this.parentElement.innerHTML = this.elements;
}

Home.prototype.getContainers = function () {
  this.searchContainer = document.getElementById('searchContainer');
  this.resultsContainer = document.getElementById('resultsContainer');
}

Home.prototype.renderUser = async function (userName, self) {
  self.loading = new Loading(self.resultsContainer);
  self.loading.generate();
  if (!userName) {
    self.generateError('Please enter a username and try again.');
  } else {
    const userFromApi = await self.getUserFromApi(userName);
    if (userFromApi.message) {
      self.generateError('Does not exist');
    } else {
      self.userFromApi = userFromApi;
      const reposFromApi = await self.getRepos(userName);
      self.reposFromApi = reposFromApi;
      self.renderUser();
    }
  }
}

Home.prototype.generateError = function (errorMessage) {
  self.error = new Error(self.resultsContainer, errorMessage);
  self.error.generate();
}

Home.prototype.getUserFromApi = async function (userName) {
  return await gitHubServiceInstance.getUser(userName);
}

Home.prototype.getRepos = async function (userName) {
  return await gitHubServiceInstance.getRepos(userName);
}

Home.prototype.renderUser = function () {
  this.userFromApi = new User(this.resultsContainer, this.userFromApi, this.reposFromApi);
  this.userFromApi.generate();
}