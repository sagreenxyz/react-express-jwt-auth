import { useState, createContext } from 'react';

export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [authorized, setAuthorized] = useState();
  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
}
