'use strict';

function Home(parentElement) {
  this.parentElement = parentElement;
  this.searchContainer = null;
  this.resultsContainer = null;
  this.elements = null;
  this.loading = null;
  this.error = null;
  this.userFromApi = null;
  this.userRepos = null;
  this.user = null;
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

  const placeHolder = 'Search username...';
  const searchBarInstance = new SearchBar(this.searchContainer, placeHolder, this.fetchUser.bind(this));
  searchBarInstance.generate();

}

Home.prototype.render = function () {
  this.parentElement.innerHTML = this.elements;
}

Home.prototype.getContainers = function () {
  this.searchContainer = document.getElementById('searchContainer');
  this.resultsContainer = document.getElementById('resultsContainer');
}

Home.prototype.fetchUser = async function(userName) {
  this.loading = new Loading(this.resultsContainer);
  this.loading.generate();
  if (!userName) {
    this.generateError('Please enter a username and try again.');
  } else {
    const userFromApi = await this.getUserFromApi(userName);
    if (userFromApi.message) {
      this.generateError('Does not exist');
    } else {
      this.userFromApi = userFromApi;
      const reposFromApi = await this.getRepos(userName);
      this.reposFromApi = reposFromApi;
      this.renderUser();
    }
  }
}

Home.prototype.generateError = function (errorMessage) {
  this.error = new Error(this.resultsContainer, errorMessage);
  this.error.generate();
}

Home.prototype.getUserFromApi = async function (userName) {
  return await gitHubServiceInstance.getUser(userName);
}

Home.prototype.getRepos = async function (userName) {
  return await gitHubServiceInstance.getRepos(userName);
}

Home.prototype.renderUser = function () {
  this.user = new User(this.resultsContainer, this.userFromApi, this.reposFromApi);
  this.user.generate();
}