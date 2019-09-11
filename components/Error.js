'use strict';

class Error {
  constructor(parentElement, errorMessage) {
    this.parentElement = parentElement;
    this.elements = null;
    this.errorMessage = errorMessage;
  }

  generate() {
    this.elements = `<p class="error">${this.errorMessage}</p>`
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}