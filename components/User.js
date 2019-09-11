'use strict';

function User(parentElement, user, repos) {
  this.parentElement = parentElement;
  this.elements = null;
  this.userDataContainer = null;
  this.reposListContainer = null;
  this.user = user;
  this.repos = repos;
}

User.prototype.generate = function(){
  this.elements = `
  <article class="user-card">
    <header>
        <div>
            <img src="./public/images/gitHubLogo.png">
        </div>
        <div id="userDataContainer">
            <p class="username">@${this.user.login? this.user.login : 'No username available'}</p>
            <h2>${this.user.name? this.user.name : 'No name available'}</h2>
            <p>${this.user.bio? this.user.bio : 'No bio available'}</p>
        </div>
    </header>
    <main id="reposListContainer">
        <h3>Repositories</h3>
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
    this.userDataContainer = document.getElementById('userDataContainer');
    this.reposListContainer = document.getElementById('reposListContainer');
  }