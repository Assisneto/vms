import { useContext } from "react";

import { AuthContext } from "@contexts/auth/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
