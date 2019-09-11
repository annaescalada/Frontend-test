'use strict';

class Home {
  constructor(parentElement) {
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

  generate() {
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

  render() {
    this.parentElement.innerHTML = this.elements;
  }

  getContainers() {
    this.searchContainer = document.getElementById('searchContainer');
    this.resultsContainer = document.getElementById('resultsContainer');
  }

  async fetchUser(userName) {
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

  generateError(errorMessage) {
    this.error = new Error(this.resultsContainer, errorMessage);
    this.error.generate();
  }

  getUserFromApi = async function (userName) {
    return await gitHubServiceInstance.getUser(userName);
  }

  async getRepos(userName) {
    return await gitHubServiceInstance.getRepos(userName);
  }

  renderUser() {
    this.user = new User(this.resultsContainer, this.userFromApi, this.reposFromApi);
    this.user.generate();
  }
}