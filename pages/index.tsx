import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { ThemeContext } from "@utility/contexts/theme-context";
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

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import DefaultTemplate from "@components/templates";
import settings from "@utility/settings";
import { SEO } from "@organisms/meta/seo";
import { CmsData, CarouselDataI, PostCardDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/bodyClass";
import { getAllPosts } from "./api";
import TitleSection from "@components/molecules/title-section";

function removeLast12Records(jsonArray: any[]): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  const posts = sortedArray.slice(-12);
  return posts;
}

function removePartialRecords(jsonArray: any[], init: number, end: number): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  const posts = sortedArray.slice(init, sortedArray.length - end);
  return posts;
}

function removeLast6Records(jsonArray: any[], category: string): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  const trimmedArray = sortedArray.filter((record, index) => {
    if (index < sortedArray.length - 6) {
      return true;
    }

    const tag = category;
    return record.tags && record.tags.slug === tag;
  });

  return trimmedArray;
}

function limitExcerptCharacters(jsonArray: any[], maxLength: number): any[] {
  const modifiedArray = jsonArray.map((record) => {
    if (record.excerpt && record.excerpt.length > maxLength) {
      record.excerpt = record.excerpt.substring(0, maxLength) + "...";
    }
    return record;
  });

  return modifiedArray;
}

function limitTitleCharacters(jsonArray: any[], maxLength: number): any[] {
  const modifiedArray = jsonArray.map((record) => {
    if (record.title && record.title.length > maxLength) {
      record.title = record.title.substring(0, maxLength) + "...";
    }
    return record;
  });

  return modifiedArray;
}

export const getStaticProps = async ({ params }) => {
  const allPosts = await getAllPosts();
  const posts = limitExcerptCharacters(limitTitleCharacters(allPosts, 80), 240);
  const carouselPosts = removeLast12Records(posts);
  const recentsPosts = removePartialRecords(posts, 12, 6);
  const evaluationPosts = removePartialRecords(posts, 0, 5);
  const lastedPosts = removePartialRecords(posts, 12, 6);

  const cmsData = {
    bodyClass: BodyClass({ isHome: true })
  };

  return {
    revalidate: 10,
    props: { cmsData, carouselPosts, recentsPosts, evaluationPosts, lastedPosts }
  };
};

const Home: React.FC<{
  cmsData: CmsData;
  carouselPosts: CarouselDataI[];
  recentsPosts: PostCardDataI[];
  evaluationPosts: PostCardDataI[];
  lastedPosts: PostCardDataI[];
}> = (props) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;
  const bodyClass = BodyClass({ isHome: true });
  const { seo } = settings;
  const { cmsData, carouselPosts, recentsPosts, evaluationPosts, lastedPosts } = props;

  console.log("HOME PROPS ==> ", cmsData);

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "home", header: true, footer: true }}>
        <Container>
          <CarouselBlog posts={carouselPosts || []} />

          <Box className={"recents-news"}>
            <RecentsPosts posts={recentsPosts} />
          </Box>
        </Container>

        <Box className={`vehicle-evaluation bg-${theme}`}>
          <Container>
            <VehicleEvaluation posts={evaluationPosts} />
          </Container>
        </Box>

        <Box className={`recents-vehicles`}>
          <Container>
            <RecentsVehicles posts={evaluationPosts} />
          </Container>
        </Box>

        <Box className={`posts-videos bg-${theme}`}>
          <Container>
            <PostsVideos posts={evaluationPosts} />
          </Container>
        </Box>

        <Box className={`lasteds-posts`}>
          <Container>
            <LastedPosts posts={lastedPosts} />
          </Container>
        </Box>
      </DefaultTemplate>
    </>
  );
};

export default Home;
