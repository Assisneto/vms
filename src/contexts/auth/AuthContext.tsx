import React, { createContext, useState } from "react";
import { api } from "@services/api";

interface UserType {
  id: string;
  name: string;
  token: string;
}

export interface AuthContextType {
  user: UserType | null;
  signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<UserType | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/api/user/login", { email, password });

      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

      setUser(data);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
