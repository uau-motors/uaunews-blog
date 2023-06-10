import { AppProps } from "next/app";
import { useContext } from "react";
import "../styles/globals.css";
import "../styles/sass/main.scss";

import { OverlayProvider } from "@utility/contexts/provider-context";
import { ThemeContextProvider } from "../utility/contexts/theme-context";
import { ThemeContext } from "../utility/contexts/theme-context";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@utility/theme";
import { CssBaseline } from "@mui/material";

function App({ Component, pageProps }: AppProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <OverlayProvider>
          <Component {...pageProps} />
        </OverlayProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
