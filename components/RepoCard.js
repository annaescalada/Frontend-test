'use strict';

class RepoCard {
  constructor(repo) {
    this.repo = repo;
    this.elements = null;
  }

  generate() {
    this.elements = `
        <div class="repo-card">
            <h3>${this.repo.name}</h3>
            <div>
              <img src="./public/images/star.png" alt="icon for watchers">
              <p>${this.repo.watchers}</p>
              <img src="./public/images/fork.png" alt="icon for forks">
              <p>${this.repo.forks_count}</p>
            </div>
        </div>
    `
    return this.elements;
  }
}
