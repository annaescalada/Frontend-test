'use strict';

class Router {
  constructor() {
    this.page = null;
  }

  buildDOM(url, parentElement) {
    switch (url) {
      case '/':
        this.generateHome(parentElement);
        break;
      default:
        this.generateHome(parentElement);
        break;
    }
  }

  generateHome(parentElement) {
    this.page = new Home(parentElement);
    this.page.generate();
  }
}
var routerInstance = new Router();