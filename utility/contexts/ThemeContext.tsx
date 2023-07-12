import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "@utility/Theme";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {}
});

interface Props {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: Props) {
  const [themeName, setThemeName] = useState(
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "light"
  );

  const setTheme = useCallback((t: string) => {
    setThemeName(t);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", t);
    }
  }, []);

  const theme = themeName === "dark" ? darkTheme : lightTheme;

  const contextValue = useMemo(() => {
    return {
      theme: themeName,
      setTheme
    };
  }, [themeName, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
