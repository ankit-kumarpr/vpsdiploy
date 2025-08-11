import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from sessionStorage on page load
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userData = sessionStorage.getItem('userData');

    if (token && userData) {
      setCurrentUser({ ...JSON.parse(userData), token });
    }

    setLoading(false);
  }, []);

  // ✅ Real login using your API
  const login = async (email, password) => {
    try {
      const response = await fetch('https://lawyerbackend-qrqa.onrender.com/lawapi/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success && data.token && data.user) {
        const user = {
          id: data.user._id,
          name: data.user.name,
          email: data.user.email,
        };

        // Save to sessionStorage
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userData', JSON.stringify(user));
        setCurrentUser({ ...user, token: data.token });
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      throw error;
    }
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userData');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
