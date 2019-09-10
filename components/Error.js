'use strict';

function Error(parentElement, errorMessage) {
  this.parentElement = parentElement;
  this.elements = null;
  this.errorMessage = errorMessage;
}

Error.prototype.generate = function(){
  this.elements = `<p class="error">${this.errorMessage}</p>`
  this.render();
}

Error.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}