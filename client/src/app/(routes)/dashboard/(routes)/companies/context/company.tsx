"use client";

import {
  createCompanyRequest,
  deleteCompanyRequest,
  getCompaniesRequest,
} from "@/app/interceptors/company";
import { createContext, useContext, useEffect, useState } from "react";

type CompanyContextType = {
  companies: Company[];
  error: string[];
  createCompany: (data: Company) => void;
  updateCompany: (data: Company) => void;
  deleteCompany: (company: Company) => void;
};

export type Company = {
  _id?: string;
  name: string;
  logo: any;
  revenue: string;
  size: string;
  type: string;
  country: string;
  createdAt?: string;
  updatedAt?: string;
};

export const CompanyContext = createContext<CompanyContextType | undefined>(
  undefined
);

export function useCompany() {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }

  return context;
}

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      try {
        const res = await getCompaniesRequest();
        setCompanies(res.data);
      } catch (err: any) {
        console.log(err);
        setError(err.response.data);
      }
    }
    getCompanies();
  }, []);

  const createCompany = async (data: Company) => {
    try {
      const res = await createCompanyRequest(data);
      console.log(res);
      setCompanies((prevState) => [...prevState, res.data]);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  const deleteCompany = async (data: Company) => {
    try {
      const res = await deleteCompanyRequest(data);
      if (res.status === 200) {
        setCompanies((prevState) =>
          prevState.filter((c) => c._id !== data._id)
        );
      }
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const updateCompany = async (data: Company) => {};

  return (
    <CompanyContext.Provider
      value={{
        companies,
        error,
        createCompany,
        updateCompany,
        deleteCompany,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
