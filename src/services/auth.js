import axios from "axios";

const API = axios.create({
  baseURL: "https://your-railway-backend-url/api/auth",
  withCredentials: true,
});

// LOGIN
export const loginUser = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};

// REGISTER
export const registerUser = async (data) => {
  try {
    const res = await API.post("/register", data);
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};

// LOGOUT
export const logoutUser = async () => {
  const res = await API.post("/logout");
  return res.data;
};
export const registerRecruiter = async (data) => {
  try {
    const res = await API.post("/recruiter/register", data);
    return res.data;
  } catch (e) {
    return e.response?.data;
  }
};
export const loginRecruiter = async (data) => {
  try {
    const res = await API.post("/recruiter/login", data);
    return res.data;
  } catch (e) {
    return e.response?.data;
  }
};
