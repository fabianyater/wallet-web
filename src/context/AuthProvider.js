import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});

  const logout = useCallback(() => {
    setAuth({});
    localStorage.removeItem("auth");
  }, []);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    if (storedAuth) {
      setAuth(storedAuth);
    }
  }, []);

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (auth && auth.expirationDate) {
        const now = new Date().getTime();

        if (auth.expirationDate <= now) {
          logout();
        }
      }
    };

    const interval = setInterval(checkTokenExpiration, 1000);
    return () => clearInterval(interval);
  }, [auth]);

  const value = { auth, setAuth, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
