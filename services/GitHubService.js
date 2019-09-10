'use strict';

class GitHubService {
    constructor() {
        this.baseUrl = `https://api.github.com`;
    }

    async getUser(userName) {
        let data = null;
        const result = await fetch(`${this.baseUrl}/users/${userName}`)
            .then(response => response.json())
            .then(json => {
                data = json;
            })
            .catch(error => {
                console.log(error.message);
            });
        return data;
    }

    async getRepos(userName) {
        let data = null;
        const result = await fetch(`${this.baseUrl}/users/${userName}/repos`)
            .then(response => response.json())
            .then(json => {
                data = json;
            })
            .catch(error => {
                console.log(error.message);
            });
        return data;
    }
}

const gitHubServiceInstance = new GitHubService();