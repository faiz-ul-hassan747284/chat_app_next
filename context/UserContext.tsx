import { createContext, useState } from "react";

type UserContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({
  userName: "",
  setUserName: (name:string) => {},
});

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
