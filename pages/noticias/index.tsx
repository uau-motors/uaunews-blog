import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Stack } from "@mui/material";
import LastedPosts from "@organisms/lasteds-posts";

import DefaultTemplate from "@components/templates";
import settings from "@utility/Settings";
import { SEO } from "@organisms/meta/seo";
import { CmsData, CarouselDataI, PostCardDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/BodyClass";
import { getAllPosts } from "../api";
import useWindowSize from "@utility/UseWindowSize";
import getScreenSize from "@utility/GetScreenSize";
import { limitCharacters, removePartialRecords } from "@utility/helpers/FormatedJson";
import CategoryPage from "@components/organisms/categories";
import PaginationLink from "@components/molecules/pagination";

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  const posts = limitCharacters(limitCharacters(allPosts, "title", 80), "excerpt", 240);
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
  carouselPosts: CarouselDataI[];
  lastedPosts: PostCardDataI[];
}> = (props) => {
  const router = useRouter();
  const bodyClass = BodyClass({ isHome: false });
  const { seo } = settings;
  const { lastedPosts, carouselPosts } = props;
  const [screen, setScreen] = useState<string>("");
  const { width } = useWindowSize();

  useEffect(() => {
    setScreen(getScreenSize(width));
  }, [width]);

  if (router.isFallback) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "page", header: true, footer: true }}>
        <Container>
          <CategoryPage posts={carouselPosts} />
          <Box className={`lasteds-posts`}>
            <LastedPosts posts={lastedPosts} screen={screen} width={width} />
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
