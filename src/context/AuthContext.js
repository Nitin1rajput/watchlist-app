import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: JSON.parse(localStorage.getItem('auth'))?.user,
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const signIn = (email) => {
    const username = email.split('@')[0];
    const user = { email, username };
    setAuth({ user });
    localStorage.setItem('auth', JSON.stringify({ user }));
  };

  const signOut = () => {
    setAuth({ user: null });
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
