import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "../../components/template/layout";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "@utility/contexts/theme-context";
import { lightTheme, darkTheme } from "@utility/contexts/theme";
import { Container } from "@mui/material";
import Institutional from "@/components/organisms/page";

const Pageinstitutional: NextPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout id="page" theme={theme}>
        <main>
          <Institutional title="Termos de Uso" />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default Pageinstitutional;
