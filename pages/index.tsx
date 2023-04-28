import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "../components/template/layout";
import { Container } from "@mui/material";
import CarouselBlog from "../components/organisms/carousel";
import RecentsPosts from "../components/organisms/recents-posts";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../utility/contexts/theme-context";
import { lightTheme, darkTheme } from "../utility/contexts/theme";

const Home: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout id="home" theme={theme}>
        <main>
          <Container>
            <CarouselBlog />
            <RecentsPosts />
          </Container>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
