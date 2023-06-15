import * as React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useContext } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/template/layout";
import { Container } from "@mui/material";
import CarouselBlog from "../components/organisms/carousel";
import RecentsPosts from "../components/organisms/recents-posts";
import VehicleEvaluation from "../components/organisms/vehicle-evaluation";
import RecentsVehicles from "../components/organisms/recents-vehicles";
import PostsVideos from "../components/organisms/posts-videos";
import LastedPosts from "../components/organisms/lasteds-posts";
import SidebarSocials from "../components/organisms/sidebar/socials";
import SidebarNewsletter from "../components/organisms/sidebar/newsletter";
import SidebarVehicles from "../components/organisms/sidebar/vehicles";
import SidebarTags from "../components/organisms/sidebar/tags";
import SidebarBrands from "../components/organisms/sidebar/brands";
import SidebarArchive from "../components/organisms/sidebar/archive";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../utility/contexts/theme-context";
import { lightTheme, darkTheme } from "../utility/contexts/theme";
import TitleSection from "../components/atoms/title-section";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import DefaultTemplate from "@components/templates";
import settings from "@utility/settings";
import { SEO } from "@organisms/meta/seo";
import { CmsData, CarouselDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/bodyClass";
import { getAllPosts } from "./api";

function removeLast12Records(jsonArray: any[]): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  const last12Records = sortedArray.slice(-12);
  return last12Records;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getAllPosts();
  const carouselPosts = removeLast12Records(posts);

  const cmsData = {
    bodyClass: BodyClass({ isHome: true })
  };

  return {
    revalidate: 10,
    props: { cmsData, carouselPosts }
  };
};

const Home: React.FC<{ cmsData: CmsData; carouselPosts: CarouselDataI[] }> = (props) => {
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;
  const bodyClass = BodyClass({ isHome: true });
  const { seo } = settings;
  const { cmsData, carouselPosts } = props;

  // console.log("HOME PROPS ==> ", [cmsData, carouselPosts]);

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "home", header: true, footer: true }}>
        <Container>
          <CarouselBlog posts={carouselPosts || []} />
          <div>SITE</div>
        </Container>
      </DefaultTemplate>
    </>
  );
};

export default Home;
