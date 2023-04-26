import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./theme";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: Props) {
  const [themeName, setThemeName] = React.useState(
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "light"
  );

  const setTheme = React.useCallback((t: string) => {
    setThemeName(t);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", t);
    }
  }, []);

  const theme = themeName === "dark" ? darkTheme : lightTheme;

  const contextValue = React.useMemo(() => {
    return {
      theme: themeName,
      setTheme,
    };
  }, [themeName, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
