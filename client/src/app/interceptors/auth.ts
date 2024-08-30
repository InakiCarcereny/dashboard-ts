import axios from "@/app/interceptors/axios";
import { type RegisterRequest } from "@/app/models/registerRequest";
import { type LoginRequest } from "@/app/models/loginRequest";

export const registerRequest = async (data: RegisterRequest) => axios.post(`/register`, data);

export const loginRequest = async (data: LoginRequest) => axios.post(`/login`, data);

export const verifyRequest = async (token?: string) => {
  return axios.get(`/verify`, { headers: { Authorization: `Bearer ${token}` } });
}