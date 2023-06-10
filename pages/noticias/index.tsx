import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "../../components/template/layout";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "@utility/contexts/theme-context";
import { lightTheme, darkTheme } from "@utility/contexts/theme";
import CategoryPage from "@organisms/categories";

import LastedPosts from "@organisms/lasteds-posts";
import SidebarSocials from "@organisms/sidebar/socials";
import SidebarNewsletter from "@organisms/sidebar/newsletter";
import SidebarVehicles from "@organisms/sidebar/vehicles";
import SidebarTags from "@organisms/sidebar/tags";
import SidebarBrands from "@organisms/sidebar/brands";
import SidebarArchive from "@organisms/sidebar/archive";

import TitleSection from "@components/molecules/title-section";
import PaginationLink from "@/components/molecules/pagination";

import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const PageNews: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout id="news" theme={theme}>
        <main>
          <CategoryPage />
          <Container className={`lasteds-posts`}>
            <Grid container>
              <Grid item xs={9}>
                <TitleSection title={"Recentes Posts"} />
                <LastedPosts />
                <Stack spacing={2} className="pagination">
                  <PaginationLink />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <SidebarSocials />
                <SidebarNewsletter />
                <SidebarTags />
                <SidebarBrands />
                <SidebarArchive />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default PageNews;
