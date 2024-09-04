import axios from "@/app/interceptors/axios";
import { type RegisterRequest } from "@/app/models/registerRequest";
import { type LoginRequest } from "@/app/models/loginRequest";

export const registerRequest = async (data: RegisterRequest) =>
  axios.post(`/auth/register`, data);

export const loginRequest = async (data: LoginRequest) =>
  axios.post(`/auth/login`, data);

export const verifyRequest = async (token?: string) => {
  return axios.get(`/auth/verify`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
