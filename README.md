# 💻 Frontend Test

**Frontend Test** is a client-side application connected to the **GitHub API** that allows users to search for a username and retrieve details such as name, bio, and a list of repositories.

---

## 📜 Description
The user can input a GitHub username, and the app fetches and displays profile details along with their public repositories.

---

## 🛠 Data Structure
### 🧩 Components
- **User** → `parentElement`, `elements`, `userDataContainer`, `reposListContainer`, `user`, `repos`, `generate()`, `render()`, `getContainers()`
- **RepoCard** → `repo`, `elements`, `generate()`
- **Loading** → `parentElement`, `elements`, `generate()`, `render()`
- **SearchBar** → `parentElement`, `elements`, `placeHolder`, `handleClick`, `generate()`, `render()`, `handleSearchSubmit()`
- **Error** → `parentElement`, `elements`, `errorMessage`, `generate()`, `render()`

### 📄 Pages
- **Home** → `parentElement`, `searchContainer`, `resultsContainer`, `elements`, `loading`, `error`, `userFromApi`, `userRepos`, `user`, `generate()`, `render()`, `getContainers()`, `fetchUser()`, `generateError()`, `getUserFromApi()`, `getRepos()`, `renderUser()`

### 🔌 Services
- **GitHubService** → `baseUrl`, `getUser()`, `getRepos()`
- **Layout** → `root`, `elements`, `header`, `main`, `footer`, `render()`, `generate()`, `getContainers()`
- **Router** → `page`, `buildDOM()`, `generateHome()`
- **App**

---

## 🔄 States & Transitions
- **Home Page** → 🏠 Contains a search bar and a button to fetch GitHub user details.
