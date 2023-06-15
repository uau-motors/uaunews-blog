import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import DefaultTemplate from "@components/templates";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "@utility/contexts/theme-context";
import { lightTheme, darkTheme } from "@utility/contexts/theme";
import { Container } from "@mui/material";
import Institutional from "@/components/organisms/page";

const Pageinstitutional: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <DefaultTemplate id="page" theme={theme}>
        <main>
          <Institutional title="Termos de Uso" />
        </main>
      </DefaultTemplate>
    </ThemeProvider>
  );
};

export default Pageinstitutional;
