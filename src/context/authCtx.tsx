import { createContext, useContext, useState, ReactNode } from "react";
import {
  // setUser,
  setToken,
  clearToken,
  // clearUser,
  getToken,
} from "src/services/authStorage";
import type { User } from "src/types/auth/User";
type AuthData = {
  user: User | null;
  token: string | null;
};

type AuthContextType = {
  authData: AuthData;
  login: (user: User, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  updateUser: (user: User) => void;
  isVerified: boolean;
  updateBalance: (newBalance: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  authData: { user: null, token: null },
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  updateUser: () => {},
  isVerified: false,
  updateBalance: (
    // newBalance:string
  ) => {},
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [authData, setAuthData] = useState<AuthData>(() => {
    // const user = getUser();
    const token = getToken();
    return {
      user: null,
      token,
    };
  });
  const updateUser = (user: User) => {
    setAuthData((prev) => ({ ...prev, user }));
    // setUser(user);
  };

  const updateBalance = (newBalance: string) => {
    setAuthData((prev) => {
      if (!prev.user) return prev;
      return {
        ...prev,
        user: { ...prev.user, balance: newBalance },
      };
    });
  };

  const login = (user: User, token: string) => {
    setAuthData({ user, token });
    setToken(token);
    // setUser(user);
  };
  const logout = () => {
    setAuthData({ user: null, token: null });
    clearToken();
    // clearUser();
  };
  const isVerified = authData.user?.verified ? true : false;
  const isAuthenticated = !!authData.token;

  const contextValue = {
    authData,
    login,
    logout,
    isAuthenticated,
    updateUser,
    isVerified,
    updateBalance,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };
