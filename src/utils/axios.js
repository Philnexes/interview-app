import axios from "axios";

// create an instance using the config defaults by axios library with the base URL of TMDB
// this URL will be extended by appending specific API URLs from requests.js
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;