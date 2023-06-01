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

import TitleSection from "@atoms/title-section";
import PaginationLink from "@/components/molecules/pagination";

import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SinglePost from "@/components/organisms/single-post";
import SinglePostHeader from "@/components/organisms/post-header";

const PageSinglePost: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout id="home" theme={theme}>
        <main>
          <Container className={`single-post`}>
            <SinglePostHeader />
            <Grid container>
              <Grid item xs={9}>
                <SinglePost format="video" />
              </Grid>
              <Grid item xs={3}>
                <SidebarSocials />
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

export default PageSinglePost;
