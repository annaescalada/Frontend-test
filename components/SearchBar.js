'use strict';

class SearchBar {
  constructor (parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    }
    generate() {
      this.elements = `
        <div class="search-bar-container">
            <p>This is a serach bar...</p>
        </div>
        `
      this.render();
    }
    render() {
      this.parentElement.innerHTML = this.elements;
    }
  }