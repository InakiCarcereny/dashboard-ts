import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/auth",
  withCredentials: true,
});

export default instance;
