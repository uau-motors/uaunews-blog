import React, { Fragment } from "react";

import { Box, Grid } from "@mui/material";

import { PostCardDataI } from "@utility/interfaces";

import TitleSection from "@components/molecules/title-section";
import SidebarNewsletter from "../sidebar/newsletter";
import PostCard from "@components/molecules/post-card";

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
              <Grid item xs={12}>
                <SidebarNewsletter />
              </Grid>
            </Grid>
          </Box>
        )}

        {screenMedium.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              <Grid item xs={width > 479 && width <= 641 ? 12 : 8}>
                <Grid container spacing={2} className={`post-list ${width > 479 && width < 641 ? "post-sm" : ""}`}>
                  {posts &&
                    posts.length > 0 &&
                    posts.map((post, key) => {
                      if (key > 0 && key < 5)
                        return (
                          <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={width > 479 && width <= 641 ? 12 : 4}>
                <SidebarNewsletter />
              </Grid>
            </Grid>
          </Box>
        )}

        {screenLarge.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid container spacing={2} className={`post-list post-${screen}`}>
                  {posts &&
                    posts.length > 0 &&
                    posts.map((post, key) => {
                      if (key > 0 && key < 5)
                        return (
                          <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={4}>
                <SidebarNewsletter />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default RecentsVehicles;
