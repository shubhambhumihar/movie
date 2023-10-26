/* eslint-disable no-unused-vars */
//! here all our network request lies
import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async (userData) => {
  const res = await axios.post(`${base_url}user/register`, userData);
  if (res) {
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  }
};
const login = async (userData) => {
  const res = await axios.post(`${base_url}user/login`, userData);
  if (res) {
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  }
};
const logout = async () => {
  const res = await axios.get(`${base_url}user/logout`);
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
