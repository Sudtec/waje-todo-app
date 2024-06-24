import React, { createContext, useState, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [username, setUsername] = useState(localStorage.getItem('username'));;

  const login = (newToken, username) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('username', username);
    setToken(newToken);
    setUsername(username);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  let user = null;
  try {
    user = token ? jwtDecode(token) : null;
  } catch (error) {
    console.error('Invalid token:', error);
    logout(); // Optionally logout the user if the token is invalid
  }



  return (
    <AuthContext.Provider value={{ token, username, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
