import axios from "axios";
const API_BASE = "http://localhost:5005/api/v1";

export const login = (data) => axios.post(`${API_BASE}/auth/login`, data);
export const register = (data) => axios.post(`${API_BASE}/auth/register`, data);
export const getUsers = (data) => axios.get(`${API_BASE}/users`);

export const getWerewolfProfiles = () =>
  axios.get(`${API_BASE}/werewolf/profiles`);
export const getWerewolfGames = () => axios.get(`${API_BASE}/werewolf/games`);
export const createWerewolfGame = (data, token) =>
  axios.post(`${API_BASE}/werewolf/games`, data, {
    headers: {
      Authorization: token,
    },
  });
