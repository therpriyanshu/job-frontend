import axios from "axios";

console.log("Backend URL:", process.env.REACT_APP_BACKEND);

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  withCredentials: true,
});

// Helper: get token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

// USER PROFILE
export const getProfile = async () => {
  const res = await API.get("/user/profile", { headers: getAuthHeader() });
  return res.data;
};

// JOBS
export const getAllJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

export const getJobById = async (id) => {
  const res = await API.get(`/jobs/${id}`);
  return res.data;
};

export const applyJob = async (id) => {
  const res = await API.post(`/jobs/${id}/apply`, null, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// USER APPLICATIONS
export const getAppliedJobs = async () => {
  const res = await API.get("/applications/my", { headers: getAuthHeader() });
  return res.data;
};

// RECRUITER JOBS
// RECRUITER JOBS
export const getRecruiterJobs = async () => {
  const res = await API.get("/recruiter/jobs", { headers: getAuthHeader() });
  return res.data;
};

export const createJob = async (data) => {
  const res = await API.post("/jobs/create", data, {
    headers: getAuthHeader(),
  });
  return res.data;
};

export const updateJob = async (id, data) => {
  const res = await API.put(`/recruiter/jobs/${id}`, data, {
    headers: getAuthHeader(),
  });
  return res.data;
};

// ADMIN
export const getAllUsers = async () => {
  const res = await API.get("/admin/users", { headers: getAuthHeader() });
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await API.delete(`/admin/users/${id}`, {
    headers: getAuthHeader(),
  });
  return res.data;
};
