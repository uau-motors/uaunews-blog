import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "../../components/template/layout";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "@utility/contexts/theme-context";
import { lightTheme, darkTheme } from "@utility/contexts/theme";

import ContactPage from "@/components/organisms/contact";

const About: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout id="contact" theme={theme}>
        <main>
          <ContactPage />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default About;
