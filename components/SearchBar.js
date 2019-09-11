'use strict';

class SearchBar {
  constructor(parentElement, placeHolder, handleClick) {
    this.parentElement = parentElement;
    this.elements = null;
    this.placeHolder = placeHolder;
    this.handleClick = handleClick;
  }
}

SearchBar.prototype.generate = function() {
  this.elements = `
      <form id="searchForm">
          <input type="text" placeholder="${this.placeHolder}" name="search">
          <button type="submit" id="searchButton" >Search</button>
      </form>
  `
  this.render();
  this.handleSearchSubmit();
}

SearchBar.prototype.handleSearchSubmit = function() {
  const searchForm = document.getElementById('searchForm');
  self = this;
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = event.path[0][0].value;
    this.handleClick(value);
  })
}

SearchBar.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}
