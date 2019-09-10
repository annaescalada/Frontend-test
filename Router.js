'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDOM = function (url, parentElement) {
  switch (url) {
    case '/':
      this.generateHome(parentElement);
      break;
    default:
      this.generateHome(parentElement);
      break;
  }
}

Router.prototype.generateHome = function(parentElement) {
  this.page = new Home(parentElement);
  this.page.generate();
}

var routerInstance = new Router();