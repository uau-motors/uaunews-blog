import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "../components/template/layout";
import { Container } from "@mui/material";
import CarouselBlog from "../components/organisms/carousel";
import RecentsPosts from "../components/organisms/recents-posts";
import VehicleEvaluation from "../components/organisms/vehicle-evaluation";
import RecentsVehicles from "../components/organisms/recents-vehicles";
import PostsVideos from "../components/organisms/posts-videos";
import SidebarSocials from "../components/organisms/sidebar/socials";
import SidebarNewsletter from "../components/organisms/sidebar/newsletter";
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

            <Grid container spacing={2} className={"recents-news"}>
              <Grid item xs={9}>
                <Box sx={{ width: "100%" }}>
                  <TitleSection title={"Não perca"} />
                </Box>
                <RecentsPosts />
              </Grid>
              <Grid item xs={3} style={{ paddingTop: 110 }}>
                <SidebarSocials />
              </Grid>
            </Grid>
          </Container>

          <Box className={`vehicle-evaluation bg-${theme}`}>
            <Container>
              <TitleSection title={"Avaliações UauMotors"} />
              <VehicleEvaluation />
            </Container>
          </Box>

          <Container className={`recents-vehicles`}>
            <Grid container>
              <Grid item xs={9}>
                <TitleSection title={"Últimos Lançamentos"} />
                <RecentsVehicles />
              </Grid>
              <Grid item xs={3}>
                <SidebarNewsletter theme={theme} />
              </Grid>
            </Grid>
          </Container>

          <Box className={`posts-videos bg-${theme}`}>
            <Container>
              <TitleSection title={"Vídeos"} />
              <PostsVideos />
            </Container>
          </Box>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
