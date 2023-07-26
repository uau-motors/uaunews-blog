import React from "react";

import { Box, Grid } from "@mui/material";
import { PostCardDataI } from "@utility/interfaces";
import PostThumb from "./post-thumb";

interface FeaturedPostsProps {
  posts: PostCardDataI[];
  screen: string;
  width: number;
}
const CategoryFeatureds = ({ posts, screen, width }: FeaturedPostsProps) => {
  const screenMedium = ["sm", "md"];
  const screenLarge = ["lg", "xl"];
  const screenMobile = ["xs"];

  return (
    <Box className="featureds-category">
      {screenMobile.includes(screen) && (
        <Box className={`visible-${screen}`}>
          <Grid container spacing={2}>
            <Grid item xs={12} className="post-featured">
              <Grid container>
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key > 0 && key <= 3) {
                      return (
                        <Grid item xs={12} key={key}>
                          <PostThumb post={post} size={screen} delay={key} />
                        </Grid>
                      );
                    }
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}

      {screenMedium.includes(screen) && (
        <Box className={`visible-${screen}`}>
          <Grid container spacing={2}>
            {posts && posts.length > 0 && (
              <Grid item xs={width > 479 && width <= 641 ? 12 : 6} className="post-featured">
                <PostThumb post={posts[0]} size={screen} delay={1} />
              </Grid>
            )}
            <Grid item xs={width > 479 && width <= 641 ? 12 : 6}>
              <Grid container spacing={2} className="post-list">
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key > 0 && key <= 2)
                      return (
                        <Grid item xs={12}>
                          <PostThumb post={post} size={screen} delay={key} />
                        </Grid>
                      );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}

      {screenLarge.includes(screen) && (
        <Box className={`visible-${screen}`}>
          <Grid container spacing={2}>
            {posts && posts.length > 0 && (
              <Grid item xs={6} className="post-featured">
                <PostThumb post={posts[0]} size={screen} delay={1} />
              </Grid>
            )}
            <Grid item xs={6} className="post-list">
              <Grid container spacing={2}>
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key > 0 && key <= 2)
                      return (
                        <Grid item xs={6}>
                          <PostThumb post={post} size={screen} delay={key} />
                        </Grid>
                      );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default CategoryFeatureds;
