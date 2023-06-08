import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";
import "../styles/sass/main.scss";
import { ThemeContextProvider } from "../utility/contexts/theme-context";
import { DrawerProvider } from "../utility/contexts/drawer-context";
import { ModalProvider } from "../utility/contexts/modal-context";
interface HeaderMfeProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const HeaderMfe: React.FunctionComponent<HeaderMfeProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeContextProvider>
        <ModalProvider>
          <DrawerProvider>
            <Component {...pageProps} />
          </DrawerProvider>
        </ModalProvider>
      </ThemeContextProvider>
    </CacheProvider>
  );
};

export default HeaderMfe;
