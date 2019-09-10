'use strict';

function Home(parentElement) {
  this.parentElement = parentElement;
  this.searchContainer = null;
  this.resultsContainer = null;
  this.loading = null;
  this.elements = null;
  this.userFromApi = null;
  this.error = null;
}

Home.prototype.generate = function() {
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
  
Home.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

Home.prototype.getContainers = function() {
  this.searchContainer = document.getElementById('searchContainer');
  this.resultsContainer = document.getElementById('resultsContainer');
}

Home.prototype.renderUser = async function(userName, self) {
  self.loading = new Loading(self.resultsContainer);
  self.loading.generate();
  if (!userName) {
    self.generateError('Please enter a username and try again.');
  } else {
    const dataFromApi = await self.connectToApi(userName);
    if (dataFromApi.total_count === 0) {
      self.generateError('Does not exist');
    }
    console.log(dataFromApi);
  }

}

Home.prototype.generateError = function(errorMessage) {
  self.error = new Error(self.resultsContainer, errorMessage);
  self.error.generate();
}

Home.prototype.connectToApi = async function (userName) {
  return await gitHubServiceInstance.getUser(userName);
}
