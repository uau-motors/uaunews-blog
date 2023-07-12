import { AppProps } from "next/app";
import { useContext, useEffect } from "react";
import "../styles/globals.css";
import "../styles/sass/main.scss";

import { OverlayProvider } from "@utility/contexts/ProviderContext";
import { ThemeContextProvider } from "@utility/contexts/ThemeContext";
import { ThemeContext } from "@utility/contexts/ThemeContext";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@utility/Theme";
import { CssBaseline } from "@mui/material";

function useServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);
}

function App({ Component, pageProps }: AppProps) {
  const { theme } = useContext(ThemeContext);

  useServiceWorker();

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
