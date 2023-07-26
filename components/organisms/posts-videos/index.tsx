import React, { Fragment } from "react";

import { Box, Grid } from "@mui/material";

import TitleSection from "@components/molecules/TitleSection";
import { PostCardDataI } from "@utility/interfaces";
import PostCard from "@molecules/PostCard";

interface VideosProps {
  posts: PostCardDataI[];
  screen: string;
  width: number;
}

const PostsVideos = ({ posts, screen, width }: VideosProps) => {
  const screenMedium = ["sm", "md"];
  const screenLarge = ["lg", "xl"];
  const screenMobile = ["xs"];

  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Vídeos"} />
            </Box>
          </Grid>
        </Grid>

        {screenMobile.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              {posts && posts.length > 0 && (
                <Grid item xs={12} className="post-featured">
                  <PostCard
                    post={posts[0]}
                    tag={false}
                    orient="down"
                    size={screen}
                    excerpt={false}
                    delay={1}
                    video={true}
                  />
                </Grid>
              )}
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 0 && key <= 4)
                    return (
                      <Grid item xs={12} className="post-list">
                        <PostCard
                          orient="left"
                          post={post}
                          delay={key}
                          excerpt={false}
                          tag={false}
                          bordered={true}
                          video={true}
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
            <Grid container spacing={2}>
              {posts && posts.length > 0 && (
                <Grid item xs={width > 479 && width <= 641 ? 12 : 6} className="post-featured">
                  <PostCard
                    post={posts[0]}
                    tag={false}
                    orient="down"
                    size={screen}
                    excerpt={false}
                    delay={1}
                    video={true}
                  />
                </Grid>
              )}
              <Grid item xs={width > 479 && width <= 641 ? 12 : 6}>
                <Grid container spacing={2} className="post-list">
                  {posts &&
                    posts.length > 1 &&
                    posts.map((post, key) => {
                      if (key > 0 && key <= 3)
                        return (
                          <Grid item xs={12}>
                            <PostCard
                              orient="left"
                              post={post}
                              delay={key}
                              excerpt={false}
                              tag={false}
                              bordered={true}
                              video={true}
                              size={screen}
                            />
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
                  <PostCard
                    post={posts[0]}
                    tag={false}
                    orient="down"
                    size={screen}
                    excerpt={false}
                    delay={1}
                    video={true}
                  />
                </Grid>
              )}
              <Grid item xs={6} className="post-list">
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key > 0 && key <= 3)
                      return (
                        <Grid item xs={12}>
                          <PostCard
                            orient="left"
                            post={post}
                            delay={key}
                            excerpt={false}
                            tag={false}
                            bordered={false}
                            video={true}
                            size={screen}
                          />
                        </Grid>
                      );
                  })}
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default PostsVideos;
