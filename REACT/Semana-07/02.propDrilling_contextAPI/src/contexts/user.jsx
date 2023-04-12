import { createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    id: 1,
    name: "Fulano de Tal",
    age: 36,
  }

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);
