# Frontend Test

## Description
Client-side application connected to Github API that allow user to search for a username and get details such as name, bio and repositories list.

## Data structure

Components:

  User
    this.parentElement
    this.elements
    this.userDataContainer
    this.reposListContainer
    this.user
    this.repos
    this.generate()
    this.render()
    this.getContainers()


  RepoCard
    this.repo
    this.elements
    this.generate()
    
  Loading
    this.parentElement
    this.elements
    this.generate()
    this.render()

  SearchBar
    this.parentElement
    this.elements
    this.placeHolder
    this.handleClick
    this.generate()
    this.render()
    this.handleSearchSubmit()

  Error
    this.parentElement
    this.elements
    this.errorMessage
    this.generate()
    this.render()

Pages:

  Home
    this.parentElement
    this.searchContainer
    this.resultsContainer
    this.elements
    this.loading
    this.error
    this.userFromApi
    this.userRepos
    this.user
    this.generate()
    this.render()
    this.getContainers()
    this.fetchUser()
    this.generateError()
    this.getUserFromApi()
    this.getRepos()
    this.renderUser()

Services:

  GitHubService
    this.baseUrl
    this.getUser()
    this.getRepos()

Layout
	this.root
  this.elements
  this.header
  this.main
  this.footer
	this.render()
	this.generate()
	this.getContainers()

Router
	this.page
	this.buildDOM()
  this.generateHome()

App


## States y States Transitions
Definition of the different states and their transition:

- Home Page: consists on a search bar and a button to generate username details.

## Task

Create folder and files locally.

Setup git and remote repository.

Create components.

Create pages.

Create layout, router and services.

Create app.

Apply styles.


## Links


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/annaescalada/trivial-web)
[Link Deploy](https://annaescalada.github.io/trivial-web/#0)