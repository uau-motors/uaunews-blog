import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";

import DefaultTemplate from "@components/templates";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "@utility/contexts/theme-context";
import { lightTheme, darkTheme } from "@utility/contexts/theme";

import ContactPage from "@/components/organisms/contact";

const About: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <DefaultTemplate id="contact" theme={theme}>
        <main>
          <ContactPage />
        </main>
      </DefaultTemplate>
    </ThemeProvider>
  );
};

export default About;