'use strict';

class Loading {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }

  generate() {
    this.elements = `<p>Loading user details...</p>`
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}
