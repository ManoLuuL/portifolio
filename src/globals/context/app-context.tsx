import { AppContextProps, AppContextProvider, Theme } from "./types";
import { FC, createContext, useEffect, useState } from "react";

const AppContext = createContext<AppContextProps>({});

export const AppProvider: FC<AppContextProvider> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    const newTema = theme === "light" ? "dark" : "light";
    localStorage.setItem("tema", newTema);
  };

  useEffect(() => {
    const themeSave = localStorage.getItem("tema");
    setTheme(themeSave ?? "light");
  }, []);

  return (
    <AppContext.Provider
      value={{
        Theme: theme,
        changeTheme: handleChangeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
