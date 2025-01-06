import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [jwtData, setJwtData] = useState(null);

  return (
    <AuthContext.Provider value={{ jwtData, setJwtData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);