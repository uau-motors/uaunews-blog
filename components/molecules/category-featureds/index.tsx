import React from "react";

import { Box, Grid } from "@mui/material";
import PostImage from "@molecules/post-card-thumb";
import PostTitle from "@components/atoms/post-title";
import PostDate from "@molecules/post-date";
import PostViews from "@molecules/post-views";

import data from "@utility/data/posts.json";
import PostCard from "@molecules/post-card";
import PostThumb from "@molecules/post-thumb";
import { PostCardDataI } from "@utility/interfaces";

interface FeaturedPostsProps {
  posts: PostCardDataI[];
}
const CategoryFeatureds = ({ posts }: FeaturedPostsProps) => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Box className="featureds-category">
      <Box className="visible-xs">
        <Grid container spacing={2}>
          <Grid item xs={12} className="medium-featured">
            <Grid container>
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 0 && key <= 3) {
                    return (
                      <Grid item xs={12} key={key}>
                        <PostCard post={post} delay={key} />
                      </Grid>
                    );
                  }
                })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CategoryFeatureds;
