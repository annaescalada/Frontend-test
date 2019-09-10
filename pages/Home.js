'use strict';

function Home(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Home.prototype.generate = function() {
  const searchBarInstance = new SearchBar(this.parentElement);
  searchBarInstance.generate();
  searchBarInstance.render();
}

Home.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}