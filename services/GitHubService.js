'use strict';

class GitHubService {
  constructor (){
    this.baseUrl = `https://api.github.com`;
  }

  async getUser(userName){
      const result = await fetch(`${this.baseUrl}/search/users?q=${userName}`)
      const data = await result.json();
      return data;
  }
}

const gitHubServiceInstance = new GitHubService();