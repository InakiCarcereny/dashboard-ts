export type UserContextType = {
  signUp: (value: RegisterRequest) => void;
  signIn: (value: LoginRequest) => void;
  logOut: () => void;
  user: User | null;
  error: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
};
