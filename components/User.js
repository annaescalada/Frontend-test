'use strict';

function User(parentElement, user, repos) {
  this.parentElement = parentElement;
  this.elements = null;
  this.user = user;
  this.repos = repos;
  this.userData = null;
  this.reposList = null;
}

User.prototype.generate = function(){
  this.elements = `
  <article class="user-card">
    <header>
        <div>
            <img src="./public/images/gitHubLogo.png">
        </div>
        <div id="userData">
            <p class="username">@${this.user.login}</p>
            <h2>${this.user.name? this.user.name : 'No name available'}</h2>
            <p>${this.user.bio? this.user.bio : 'No bio available'}</p>
        </div>
    </header>
    <main id="reposList">
    </main>
  </article>
  `
  this.render();
  this.getContainers();
}

User.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}

User.prototype.getContainers = function(){
    this.userData = document.getElementById('userData');
    this.reposList = document.getElementById('reposList');
  }