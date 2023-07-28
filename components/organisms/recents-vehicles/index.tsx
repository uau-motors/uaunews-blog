import React, { Fragment } from "react";

import { Box, Grid } from "@mui/material";

import { PostCardDataI } from "@utility/interfaces";

import TitleSection from "@components/molecules/TitleSection";
import SidebarNewsletter from "../sidebar/newsletter";
import PostCard from "@components/molecules/PostCard";

interface RecentsVehiclesProps {
  posts: PostCardDataI[];
  screen: string;
  width: number;
}

const RecentsVehicles = ({ posts, screen, width }: RecentsVehiclesProps) => {
  const screenMedium = ["sm", "md"];
  const screenLarge = ["lg", "xl"];
  const screenMobile = ["xs"];

  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="post-featured">
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Últimos Lançamentos"} />
            </Box>
          </Grid>
        </Grid>
        {screenMobile.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2} className="post-list">
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 0 && key <= 4)
                    return (
                      <Grid item xs={12}>
                        <PostCard
                          orient="right"
                          post={post}
                          delay={key}
                          excerpt={false}
                          tag={false}
                          bordered={true}
                          size={screen}
                        />
                      </Grid>
                    );
                })}
            </Grid>
          </Box>
        )}

        {screenMedium.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2} className={`${width > 479 && width < 641 ? "post-sm" : ""}`}>
              <Grid item xs={12} className="post-featured">
                <PostCard
                  orient="down"
                  post={posts[0]}
                  delay={0}
                  excerpt={false}
                  tag={false}
                  size={screen}
                  bordered={true}
                />
              </Grid>
              {posts &&
                posts.length > 0 &&
                posts.map((post, key) => {
                  if (key > 0 && key < 4)
                    return (
                      <Grid item xs={12} className="post-list">
                        <PostCard
                          orient="right"
                          post={post}
                          delay={key}
                          excerpt={false}
                          tag={false}
                          size={screen}
                          bordered={true}
                        />
                      </Grid>
                    );
                })}
            </Grid>
          </Box>
        )}

        {screenLarge.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2} className={`post-list post-${screen}`}>
              {posts &&
                posts.length > 0 &&
                posts.map((post, key) => {
                  if (key > 0 && key < 7)
                    return (
                      <Grid item xs={4}>
                        <PostCard
                          orient="right"
                          post={post}
                          delay={key}
                          excerpt={false}
                          tag={false}
                          size={screen}
                          bordered={true}
                        />
                      </Grid>
                    );
                })}
            </Grid>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default RecentsVehicles;
