import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}` },
});

export default axiosInstance;
