import axios from "axios";
const API_BASE = "http://localhost:5005/api/v1";

export const login = (data) => axios.post(`${API_BASE}/auth/login`, data);
export const register = (data) => axios.post(`${API_BASE}/auth/register`, data);
