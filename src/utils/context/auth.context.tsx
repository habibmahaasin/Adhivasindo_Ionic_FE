import UserApiService from "../../services/userApi";
import { User } from "../../types/user";
import React, { useState, createContext, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (credentials: User) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const LOCAL_STORAGE_KEY = "authToken";

export const getLocalData = (): string | null => {
  return localStorage.getItem(LOCAL_STORAGE_KEY);
};

const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(getLocalData());
  const isAuthenticated = !!user;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user && isTokenExpired(user)) {
      logout();
    }
  }, [user]);

  const login = async (credentials: User) => {
    setLoading(true);
    setError(null);

    try {
      const response = await UserApiService.login(credentials);

      if (response.status === 200 && response.data.token) {
        localStorage.setItem(LOCAL_STORAGE_KEY, response.data.token);
        setUser(response.data.token);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
