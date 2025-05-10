import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  setUser,
  setToken,
  clearToken,
  clearUser,
  getToken,
  getUser,
} from "src/services/authStorage";
import type User from "src/types/auth/User";


// 1. Define proper types
type AuthData = {
  user: User | null;
  token: string | null;
};

type AuthContextType = {
  authData: AuthData;
  login: (user: User, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  authData: { user: null, token: null },
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData>({
    user: null,
    token: null,
  });

  const login = (user: User, token: string) => {
    setAuthData({ user, token });
    setToken(token);
    setUser(user);
  };
  const logout = () => {
    setAuthData({ user: null, token: null });
    clearToken();
    clearUser();
  };

  const isAuthenticated = !!authData.token;

  useEffect(() => {
    const initializeAuth = async () => {
      const token = getToken();
      const user = getUser();

      if (token && user) {
        setAuthData({ user, token });
      }
    };

    initializeAuth();
  }, []);

  const contextValue = {
    authData,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
