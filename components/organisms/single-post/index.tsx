import TitleSection from "@molecules/title-section";
import PostCredit from "@molecules/post-credit";
import PostImage from "@molecules/post-image";
import PostTitle from "@components/atoms/post-title";
import RelatedsPosts from "@molecules/relateds-posts";

import { Box, Grid } from "@mui/material";
import React from "react";
import NewsletterPost from "@molecules/newsletter-post";
import PostShare from "@molecules/post-share";
import PostNavigator from "@molecules/post-navegator";
import PostComment from "@molecules/post-comment";
import PostContent from "@molecules/post-content";
import PostGallery from "@molecules/post-gallery";
import PostVideo from "@molecules/post-video";

interface SinglePostProps {
  format: string;
}

function renderSwitch(param: string) {
  switch (param) {
    case "image":
      return (
        <PostImage
          altText="full image"
          imageUrl="https://wallpapercave.com/wp/wp7439426.jpg"
          legend="Legenda da imagem"
        />
      );
    case "gallery":
      return <PostGallery />;
    case "video":
      return <PostVideo />;
    default:
      return "";
  }
}

const SinglePost: React.FC<SinglePostProps> = ({ format }) => {
  return (
    <Grid container className="post-content">
      {renderSwitch(format)}
      <PostContent />
      <RelatedsPosts />
      <PostCredit />
      <NewsletterPost />

      <Box className="post-share">
        <PostShare />
      </Box>

      <PostNavigator />
      <PostComment />
    </Grid>
  );
};

export default SinglePost;
