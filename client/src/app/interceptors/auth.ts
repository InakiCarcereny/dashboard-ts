import axios from "axios";
import { type RegisterRequest } from "@/app/models/registerRequest";

const API_URL = "http://localhost:5000/auth";

export const registerRequest = async (data: RegisterRequest) => {
  axios.post(`${API_URL}/register`, data);
}