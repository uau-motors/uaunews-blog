import TitleSection from "@/components/atoms/title-section";
import PostCredit from "@/components/molecules/post-credit";
import PostImage from "@/components/molecules/post-image";
import PostTitle from "@/components/molecules/post-title";
import RelatedsPosts from "@/components/molecules/relateds-posts";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import NewsletterPost from "@/components/molecules/newsletter-post";
import PostShare from "@/components/molecules/post-share";
import PostNavigator from "@/components/molecules/post-navegator";
import PostComment from "@/components/molecules/post-comment";
import PostContent from "@/components/molecules/post-content";
import PostGallery from "@/components/molecules/post-gallery";
import PostVideo from "@/components/molecules/post-video";

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
