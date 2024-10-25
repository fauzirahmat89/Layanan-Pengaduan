// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password, role = 'user') => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, role })
      });

      const data = await response.json();
      if (response.ok) {
        setUser({ ...data.user, role: data.user.role });
      } else {
        throw new Error(data.message || "Unable to login");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const register = async (username, email, password) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password })
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful", data);
      } else {
        throw new Error(data.message || "Unable to register");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register  }}>
      {children}
    </AuthContext.Provider>
  );
};
