'use strict';

class SearchBar {
  constructor(parentElement, renderUser, parentThis) {
    this.parentElement = parentElement;
    this.elements = null;
    this.parentThis = parentThis;
    this.renderUser = renderUser;
  }
}

SearchBar.prototype.generate = function() {
  this.elements = `
      <form id="searchForm">
          <input type="text" placeholder="Search username..." name="search">
          <button type="submit" id="searchButton" >Search</button>
      </form>
  `
  this.render();
  this.handleSearchSubmit();

}

SearchBar.prototype.handleSearchSubmit = function() {
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = event.path[0][0].value;
    this.renderUser(userName, this.parentThis);
  })
}

SearchBar.prototype.connectToApi = function(userName) {
  gitHubServiceInstance
}

SearchBar.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}
