import React from "react";

import { Box, Grid } from "@mui/material";
import PostCard from "@molecules/post-card";
import { PostCardDataI } from "@utility/interfaces";

interface FeaturedPostsProps {
  posts: PostCardDataI[];
}
const CategoryFeatureds = ({ posts }: FeaturedPostsProps) => {
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
