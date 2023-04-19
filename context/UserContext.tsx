import { createContext, useState, useEffect } from "react";

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
  useEffect(() => {
    const localData = localStorage.getItem("userName");
    const localTtl = localStorage.getItem("ttl");
    if (localData && localTtl && parseInt(localTtl) > Date.now()) {
      setUserName(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("ttl", (Date.now() + 30 * 60 * 1000).toString());
  }, [userName]);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

