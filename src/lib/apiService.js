import axios from "axios";
// const API_BASE = "http://localhost:5005/api/v1";
const getApiBase = () => localStorage.getItem("apiBase");

export const login = (data, API_BASE = getApiBase()) =>
  axios.post(`${API_BASE}/auth/login`, data);
export const register = (data, API_BASE = getApiBase()) =>
  axios.post(`${API_BASE}/auth/register`, data);
export const getUsers = (data, API_BASE = getApiBase()) =>
  axios.get(`${API_BASE}/users`);

export const getWerewolfProfiles = (API_BASE = getApiBase()) =>
  axios.get(`${API_BASE}/werewolf/profiles`);
export const getWerewolfGames = (API_BASE = getApiBase()) =>
  axios.get(`${API_BASE}/werewolf/games`);
export const createWerewolfGame = (data, token, API_BASE = getApiBase()) =>
  axios.post(`${API_BASE}/werewolf/games`, data, {
    headers: {
      Authorization: token,
    },
  });

export const getSHProfiles = (API_BASE = getApiBase()) =>
  axios.get(`${API_BASE}/sh/profiles`);
export const getSHGames = (API_BASE = getApiBase()) =>
  axios.get(`${API_BASE}/sh/games`);
export const createSHGame = (data, token, API_BASE = getApiBase()) =>
  axios.post(`${API_BASE}/sh/games`, data, {
    headers: {
      Authorization: token,
    },
  });
