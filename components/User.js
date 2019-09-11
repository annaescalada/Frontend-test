'use strict';

class User {
  constructor(parentElement, placeHolder, handleClick) {
    this.parentElement = parentElement;
    this.elements = null;
    this.userDataContainer = null;
    this.reposListContainer = null;
    this.user = user;
    this.repos = repos;
  }

  generate() {
    console.log(this.repos);
    this.elements = `
    <article class="user-card">
      <header>
          <div>
              <img src="./public/images/gitHubLogo.png">
          </div>
          <div id="userDataContainer">
              <p class="username">@${this.user.login ? this.user.login : 'No username available'}</p>
              <h2>${this.user.name ? this.user.name : 'No name available'}</h2>
              <p>${this.user.bio ? this.user.bio : 'No bio available'}</p>
          </div>
      </header>
      <main id="reposListContainer">
          <h2>Repositories</h2>
          <hr></hr>
            ${this.repos.length ? this.repos.map((repo) => (new RepoCard(repo).generate())).join('') : `<p>No repositories available</p>`}
      </main>
    </article>
    `
    this.render();
    this.getContainers();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }

  getContainers() {
    this.userDataContainer = document.getElementById('userDataContainer');
    this.reposListContainer = document.getElementById('reposListContainer');
  }
}
