import React from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";

import DefaultTemplate from "@components/templates";
import settings from "@utility/settings";
import { SEO } from "@organisms/meta/seo";
import { CmsData, PostCardDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/bodyClass";

import CategoryPage from "@organisms/categories";

import LastedPosts from "@organisms/lasteds-posts";

import PaginationLink from "@molecules/pagination";
import Stack from "@mui/material/Stack";

import { getAllPosts } from "../api";

function removePartialRecords(jsonArray: any[], init: number, end: number): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  const posts = sortedArray.slice(init, sortedArray.length - end);
  return posts;
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
  const featuredPosts = removePartialRecords(posts, 12, 3);

  const cmsData = {
    bodyClass: BodyClass({ isHome: false })
  };

  return {
    revalidate: 10,
    props: { cmsData, lastedPosts, featuredPosts }
  };
};

const PageNews: React.FC<{
  cmsData: CmsData;
  lastedPosts: PostCardDataI[];
  featuredPosts: PostCardDataI[];
}> = (props) => {
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;
  const bodyClass = BodyClass({ isHome: false });
  const { seo } = settings;
  const { lastedPosts, featuredPosts } = props;

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "page", header: true, footer: true }}>
        <Container>
          <CategoryPage posts={featuredPosts} />
          <Box className={`lasteds-posts`}>
            <LastedPosts posts={lastedPosts} />
          </Box>
          <Stack spacing={2} className="pagination">
            <PaginationLink />
          </Stack>
        </Container>
      </DefaultTemplate>
    </>
  );
};

export default PageNews;
