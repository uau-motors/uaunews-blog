import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { processEnv } from "@libs/processEnv";
import { SEO } from "@organisms/meta/seo";
import { GhostSettings, getAllSettings } from "@libs/ghost";
import { getLocalData } from "@libs/localData";

import { BodyClass } from "@helpers/bodyClass";

import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "@components/template/layout";
import { Container } from "@mui/material";
import CarouselBlog from "@organisms/carousel";
import RecentsPosts from "@organisms/recents-posts";
import VehicleEvaluation from "@organisms/vehicle-evaluation";
import RecentsVehicles from "@organisms/recents-vehicles";
import PostsVideos from "@organisms/posts-videos";
import LastedPosts from "@organisms/lasteds-posts";
import SidebarSocials from "@organisms/sidebar/socials";
import SidebarNewsletter from "@organisms/sidebar/newsletter";
import SidebarVehicles from "@organisms/sidebar/vehicles";
import SidebarTags from "@organisms/sidebar/tags";
import SidebarBrands from "@organisms/sidebar/brands";
import SidebarArchive from "@organisms/sidebar/archive";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "@utility/contexts/theme-context";
import { lightTheme, darkTheme } from "../utility/contexts/theme";
import TitleSection from "@components/molecules/title-section";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import settings from "@utility/settings";

interface CmsData {
  bodyClass: string;
}

interface HomeProps {
  cmsData: CmsData;
}

const Home = ({ cmsData }: HomeProps) => {
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;

  const { bodyClass } = cmsData;

  return (
    <>
      <SEO {...{ settings }} />
      <Layout {...{ bodyClass, settings, isHome: true, id: "home", header: true, footer: true }}>
        <main>
          <Container>SITE</Container>
        </main>
      </Layout>
    </>
    // <ThemeProvider {...processEnv.themeMode}>
    //   <Layout id="home" theme={theme}>
    //     <main>
    //       <Container>
    //         <CarouselBlog />

    //         <Grid container spacing={2} className={"recents-news"}>
    //           <Grid item xs={9}>
    //             <Box sx={{ width: "100%" }}>
    //               <TitleSection title={"Não perca"} />
    //             </Box>
    //             <RecentsPosts />
    //           </Grid>
    //           <Grid item xs={3} style={{ paddingTop: 110 }}>
    //             <SidebarSocials />
    //           </Grid>
    //         </Grid>
    //       </Container>

    //       <Box className={`vehicle-evaluation bg-${theme}`}>
    //         <Container>
    //           <TitleSection title={"Avaliações UauMotors"} />
    //           <VehicleEvaluation />
    //         </Container>
    //       </Box>

    //       <Container className={`recents-vehicles`}>
    //         <Grid container>
    //           <Grid item xs={9}>
    //             <TitleSection title={"Últimos Lançamentos"} />
    //             <RecentsVehicles />
    //           </Grid>
    //           <Grid item xs={3}>
    //             <SidebarNewsletter theme={theme} />
    //           </Grid>
    //         </Grid>
    //       </Container>

    //       <Box className={`posts-videos bg-${theme}`}>
    //         <Container>
    //           <TitleSection title={"Vídeos"} />
    //           <PostsVideos />
    //         </Container>
    //       </Box>

    //       <Container className={`lasteds-posts`}>
    //         <Grid container>
    //           <Grid item xs={9}>
    //             <TitleSection title={"Recentes Posts"} />
    //             <LastedPosts />
    //           </Grid>
    //           <Grid item xs={3}>
    //             <SidebarVehicles />
    //             <SidebarTags />
    //             <SidebarBrands />
    //             <SidebarArchive />
    //           </Grid>
    //         </Grid>
    //       </Container>
    //     </main>
    //   </Layout>
    // </ThemeProvider>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // try {
  //   settings = await getLocalData("settings");
  // } catch (error) {
  //   throw new Error("Home creation failed.");
  // }

  const cmsData = {
    bodyClass: BodyClass({ isHome: true })
  };

  return {
    props: {
      cmsData
    }
  };
};

export default Home;
