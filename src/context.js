import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSidemenuOpen, setSidemenuOpen] = useState(false);
  const [pageName, setPageName] = useState("/admission");
  const [page, setPage] = useState("");

  const removeOver = () => {
    setIsSubmenuOpen(false);
    setSidemenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        page,
        setPage,
        setIsSubmenuOpen,
        isSidemenuOpen,
        setSidemenuOpen,
        removeOver,
        pageName,
        setPageName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
