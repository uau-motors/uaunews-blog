import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";
import { SEO } from "@organisms/Seo";
import { CmsData, PostCardDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/BodyClass";
import { getAllPosts } from "../api";
import useWindowSize from "@utility/UseWindowSize";
import getScreenSize from "@utility/GetScreenSize";
import { limitCharacters, postsByTagSlug, removeLastRecords } from "@utility/helpers/FormatedJson";
import settings from "@utility/Settings";

import CategoryPage from "@organisms/CategoryPage";
import ListPosts from "@organisms/ListPosts";
import DefaultTemplate from "@components/templates";

const PageNews: React.FC<{
  cmsData: CmsData;
  lastedPosts: PostCardDataI[];
  categoriesPosts: PostCardDataI[];
}> = (props) => {
  const router = useRouter();
  const bodyClass = BodyClass({ isHome: false });
  const { seo } = settings;
  const { lastedPosts, categoriesPosts } = props;
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
      <DefaultTemplate {...{ bodyClass, id: "news", header: true, footer: true }}>
        <Container>
          <CategoryPage posts={categoriesPosts} screen={screen} width={width} />
          <Box className={`lasteds-posts`}>
            <ListPosts posts={lastedPosts} screen={screen} width={width} />
          </Box>
        </Container>
      </DefaultTemplate>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  const posts = limitCharacters(limitCharacters(allPosts, "title", 80), "excerpt", 240);
  const lastedPosts = postsByTagSlug(posts, "noticias");
  const categoriesPosts = removeLastRecords(posts, 12);

  const cmsData = {
    bodyClass: BodyClass({ isHome: false })
  };

  return {
    revalidate: 10,
    props: { cmsData, categoriesPosts, lastedPosts }
  };
};

export default PageNews;
