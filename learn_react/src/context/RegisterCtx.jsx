import { createContext, useState } from "react";

// create context
export const RegisterCtx = createContext();

// create the context provider
export const RegisterCtxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <RegisterCtx.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </RegisterCtx.Provider>
  );
};

// consume the context
