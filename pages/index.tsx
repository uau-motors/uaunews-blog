import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";
import { ThemeContext } from "@utility/contexts/ThemeContext";
import { SEO } from "@organisms/meta/seo";
import { CmsData, CarouselDataI, PostCardDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/BodyClass";
import { getAllPosts } from "./api";
import useWindowSize from "@utility/UseWindowSize";
import getScreenSize from "@utility/GetScreenSize";
import { limitCharacters, removeLastRecords, removePartialRecords } from "@utility/helpers/FormatedJson";
import settings from "@utility/Settings";

const CarouselBlog = lazy(() => import("@organisms/carousel"));
const RecentsPosts = lazy(() => import("@organisms/recents-posts"));
const VehicleEvaluation = lazy(() => import("@organisms/vehicle-evaluation"));
const RecentsVehicles = lazy(() => import("@organisms/recents-vehicles"));
const PostsVideos = lazy(() => import("@organisms/posts-videos"));
const LastedPosts = lazy(() => import("@organisms/lasteds-posts"));

const DefaultTemplate = lazy(() => import("@components/templates"));

const Home: React.FC<{
  cmsData: CmsData;
  carouselPosts: CarouselDataI[];
  recentsPosts: PostCardDataI[];
  evaluationPosts: PostCardDataI[];
  lastedPosts: PostCardDataI[];
}> = (props) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const bodyClass = BodyClass({ isHome: true });
  const { seo } = settings;
  const { cmsData, carouselPosts, recentsPosts, evaluationPosts, lastedPosts } = props;
  const [screen, setScreen] = useState<string>("");
  const { width, height } = useWindowSize();

  useEffect(() => {
    setScreen(getScreenSize(width));
  }, [width]);

  if (router.isFallback) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "home", header: true, footer: true }}>
        <Container>
          <Suspense fallback={<div className="loading">Carregando...</div>}>
            <CarouselBlog posts={carouselPosts || []} />
          </Suspense>

          <Box className={"recent-posts"}>
            <Suspense fallback={<div className="loading">Carregando...</div>}>
              <RecentsPosts posts={recentsPosts} screen={screen} width={width} />
            </Suspense>
          </Box>
        </Container>

        <Box className={`vehicle-evaluation bg-${theme}`}>
          <Container>
            <Suspense fallback={<div className="loading">Carregando...</div>}>
              <VehicleEvaluation posts={evaluationPosts} screen={screen} width={width} />
            </Suspense>
          </Container>
        </Box>

        <Box className={`recents-vehicles`}>
          <Container>
            <Suspense fallback={<div className="loading">Carregando...</div>}>
              <RecentsVehicles posts={evaluationPosts} screen={screen} width={width} />
            </Suspense>
          </Container>
        </Box>

        <Box className={`posts-videos bg-${theme}`}>
          <Container>
            <Suspense fallback={<div className="loading">Carregando...</div>}>
              <PostsVideos posts={evaluationPosts} screen={screen} width={width} />
            </Suspense>
          </Container>
        </Box>

        <Box className={`lasteds-posts`}>
          <Container>
            <Suspense fallback={<div className="loading">Carregando...</div>}>
              <LastedPosts posts={lastedPosts} screen={screen} width={width} />
            </Suspense>
          </Container>
        </Box>
      </DefaultTemplate>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  const posts = limitCharacters(limitCharacters(allPosts, "title", 80), "excerpt", 240);
  const carouselPosts = removeLastRecords(posts, 12);
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

export default Home;
