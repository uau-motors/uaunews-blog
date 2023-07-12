import React, { Fragment } from "react";

import { Box, Grid } from "@mui/material";

import { PostCardDataI } from "@utility/interfaces";
import TitleSection from "@molecules/title-section";
import SidebarSocials from "@organisms/sidebar/socials";
import PostCard from "@components/molecules/post-card";

import { screenContainer } from "@utility/helpers/ScreenContainer";

interface RecentPostsProps {
  posts: PostCardDataI[];
  screen: string;
  width: number;
}

const RecentPosts = ({ posts, screen, width }: RecentPostsProps) => {
  const screenMedium = ["sm", "md"];
  const screenLarge = ["lg", "xl"];
  const screenMobile = ["xs"];

  const xs = screenContainer(screen);

  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Não perca"} />
            </Box>
          </Grid>
        </Grid>

        {screenMobile.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              {posts && posts.length > 0 && (
                <Grid item xs={12}>
                  <PostCard
                    post={posts[0]}
                    delay={1}
                    tag={true}
                    excerpt={true}
                    counter={1}
                    size={screen}
                    orient="down"
                  />
                </Grid>
              )}
            </Grid>
            <Grid container spacing={2} className="post-list">
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 1 && key < 6)
                    return (
                      <Grid item xs={12}>
                        <PostCard
                          post={post}
                          delay={key}
                          tag={true}
                          excerpt={false}
                          counter={key}
                          size={screen}
                          orient="left"
                        />
                      </Grid>
                    );
                })}
            </Grid>

            <Grid container spacing={2} className="post-list">
              <Grid item xs={12}>
                <SidebarSocials />
              </Grid>
            </Grid>
          </Box>
        )}

        {screenMedium.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {posts && posts.length > 0 && (
                  <PostCard
                    post={posts[0]}
                    delay={1}
                    tag={true}
                    excerpt={true}
                    counter={1}
                    size={screen}
                    orient="down"
                  />
                )}
              </Grid>
              <Grid item xs={6}>
                <SidebarSocials />
              </Grid>
            </Grid>
            <Grid container spacing={2} className={`post-list ${width > 479 && width < 641 ? "post-sm" : ""}`}>
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 1 && key < 6)
                    return (
                      <Grid item xs={width > 479 && width <= 641 ? 12 : 6}>
                        <PostCard
                          post={post}
                          delay={key}
                          tag={true}
                          excerpt={false}
                          counter={key}
                          size={screen}
                          orient="left"
                        />
                      </Grid>
                    );
                })}
            </Grid>
          </Box>
        )}

        {screenLarge.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              <Grid item xs={xs?.xsl}>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="post-featured">
                    {posts && posts.length > 0 && (
                      <PostCard
                        post={posts[0]}
                        delay={1}
                        tag={true}
                        excerpt={true}
                        counter={1}
                        size={screen}
                        orient="down"
                      />
                    )}
                  </Grid>
                  <Grid item xs={6} className="post-list">
                    {posts &&
                      posts.length > 1 &&
                      posts.map((post, key) => {
                        if (key > 1 && key < 6)
                          return (
                            <PostCard
                              post={post}
                              delay={key}
                              excerpt={false}
                              counter={key}
                              size={screen}
                              tag={true}
                              orient="left"
                            />
                          );
                      })}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={xs?.xsr}>
                <SidebarSocials />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default RecentPosts;
