import axios from "@/app/interceptors/axios";
import { type Company } from "@/app/(routes)/dashboard/(routes)/companies/context/company";

export const getCompaniesRequest = async () => axios.get(`/company`);

export const createCompanyRequest = async (data: Company) =>
  axios.post("/company", data);

export const updateCompanyRequest = async (data: Company) =>
  axios.put(`/company/${data._id}`, data);

export const deleteCompanyRequest = async (data: Company) =>
  axios.delete(`/company/${data._id}`);
