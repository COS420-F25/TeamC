import { createContext } from "react";

export const themeSet = createContext({
    darkMode: false,
    setDarkMode: () => {},
});