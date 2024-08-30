"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type RegisterRequest } from "../models/registerRequest";
import { type LoginRequest } from "../models/loginRequest";
import { type User } from "../models/user";
import {
  loginRequest,
  registerRequest,
  verifyRequest,
} from "../interceptors/auth";
import Cookies from "js-cookie";

type UserContextType = {
  signUp: (value: RegisterRequest) => void;
  signIn: (value: LoginRequest) => void;
  logOut: () => void;
  user: User | null;
  error: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError([]);
    }, 5000);
  }, [error]);

  const signUp = async (value: RegisterRequest) => {
    try {
      const res = await registerRequest(value);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const signIn = async (value: LoginRequest) => {
    try {
      const res = await loginRequest(value);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const logOut = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    async function checkToken() {
      setIsLoading(true);

      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const res = await verifyRequest(cookies.token);

        if (!res.data) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setUser(res.data);
        }
      } catch (err: any) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    }

    checkToken();
  }, []);

  return (
    <UserContext.Provider
      value={{
        signUp,
        signIn,
        user,
        error,
        isAuthenticated,
        isLoading,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
