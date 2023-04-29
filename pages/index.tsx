import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "../components/template/layout";
import { Container } from "@mui/material";
import CarouselBlog from "../components/organisms/carousel";
import RecentsPosts from "../components/organisms/recents-posts";
import Sidebar from "../components/organisms/sidebar";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../utility/contexts/theme-context";
import { lightTheme, darkTheme } from "../utility/contexts/theme";
import TitleSection from "../components/atoms/title-section";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout id="home" theme={theme}>
        <main>
          <Container>
            <CarouselBlog />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} className={"recents-news"}>
                <Grid item xs={9}>
                  <Box sx={{ width: "100%" }}>
                    <TitleSection title={"Não perca"} />
                  </Box>
                  <RecentsPosts />
                </Grid>
                <Grid item xs={3}>
                  <Sidebar />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
