import React from "react";
import { useRouter } from "next/router";
import { Container, Grid } from "@mui/material";

import DefaultTemplate from "@components/templates";
import settings from "@utility/settings";
import { SEO } from "@organisms/meta/seo";
import { CmsData, PostCardDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/bodyClass";

import CategoryPage from "@organisms/categories";

import LastedPosts from "@organisms/lasteds-posts";
import SidebarSocials from "@organisms/sidebar/socials";
import SidebarNewsletter from "@organisms/sidebar/newsletter";
import SidebarTags from "@organisms/sidebar/tags";
import SidebarBrands from "@organisms/sidebar/brands";
import SidebarArchive from "@organisms/sidebar/archive";

import TitleSection from "@molecules/title-section";
import PaginationLink from "@molecules/pagination";
import Stack from "@mui/material/Stack";

import { getAllPosts } from "../api";

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

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  const posts = limitExcerptCharacters(limitTitleCharacters(allPosts, 80), 240);
  const lastedPosts = removePartialRecords(posts, 0, 12);

  const cmsData = {
    bodyClass: BodyClass({ isHome: false })
  };

  return {
    revalidate: 10,
    props: { cmsData, lastedPosts }
  };
};

const PageNews: React.FC<{
  cmsData: CmsData;
  lastedPosts: PostCardDataI[];
}> = (props) => {
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;
  const bodyClass = BodyClass({ isHome: false });
  const { seo } = settings;
  const { cmsData, lastedPosts } = props;

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "contact", header: true, footer: true }}>
        <CategoryPage />
        <Container className={`lasteds-posts`}>
          <Grid container>
            <Grid item xs={9}>
              <TitleSection title={"Recentes Posts"} />
              <LastedPosts posts={lastedPosts} />
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
      </DefaultTemplate>
    </>
  );
};

export default PageNews;
