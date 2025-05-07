import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

function ContextProvider({ children }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const login = (user) => {
    setUser(user);
  };
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }
  async function verifyUser() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      const responce = await axios.get(`${API_URL}/auth/verify`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (responce.data.success) {
        setUser(responce.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    verifyUser();
  }, []);

  if (loading) return <div>Loading secure session...</div>;

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);

export default ContextProvider;
