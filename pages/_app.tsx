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

import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }: AppProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <NextNProgress color="#cc6101" height={3} options={{ showSpinner: false }} />
        <Toaster />
        <OverlayProvider>
          <Component {...pageProps} />
        </OverlayProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}

export default App;
