import { createContext, useContext, useState } from "react";
import { type RegisterRequest } from "../models/registerRequest";
import { registerRequest } from "../interceptors/auth";

interface User {
  id: string;
  username: string;
  email: string;
  lastname: string;
}

type UserContextType = {
  signUp: (data: RegisterRequest) => void;
  user: User | null;
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

  const signUp = async (data: RegisterRequest) => {
    try {
      const res = await registerRequest(data);
      console.log(res);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        signUp,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
