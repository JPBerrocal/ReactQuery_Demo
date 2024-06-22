import axios from "axios";

export const getGithubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {},
});
