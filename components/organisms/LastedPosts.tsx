import React, { Fragment } from "react";

import Box from "@mui/material/Box";
import Ads from "@molecules/ads";
import Grid from "@mui/material/Grid";

import TitleSection from "@components/molecules/TitleSection";
import { PostCardDataI } from "@utility/interfaces";
import SidebarBrands from "@organisms/SidebarBrands";
import SidebarArchive from "@organisms/SidebarArchive";
import SidebarTags from "@organisms/SidebarTags";
import PostCard from "@components/molecules/PostCard";

interface LastedPostsProps {
  posts: PostCardDataI[];
  screen: string;
  width: number;
}

const LastedPosts = ({ posts, screen, width }: LastedPostsProps) => {
  const screenMedium = ["sm", "md"];
  const screenLarge = ["lg", "xl"];
  const screenMobile = ["xs"];

  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="post-featured">
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Recentes"} />
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
                        <PostCard post={post} delay={key} tag={true} excerpt={false} size={screen} orient="left" />
                      </Grid>
                    );
                })}
            </Grid>

            <Grid container spacing={2} className="ads-xs">
              <Grid item xs={12}>
                <Ads
                  format={"rectangle"}
                  imageUrl={"https://securemove.in/wp-content/uploads/2022/08/Car-transport-cost.jpg"}
                  altText="300x100"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} className="post-list">
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 4 && key <= 8)
                    return (
                      <Grid item xs={12}>
                        <PostCard post={post} delay={key} tag={true} excerpt={false} size={screen} orient="left" />
                      </Grid>
                    );
                })}
            </Grid>

            <Grid container spacing={2} className="brands-xs">
              <Grid item xs={12}>
                <SidebarBrands />
              </Grid>
            </Grid>
          </Box>
        )}

        {screenMedium.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2} className="post-list">
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 0 && key <= 4)
                    return (
                      <Grid item xs={12}>
                        <PostCard
                          post={post}
                          delay={key}
                          tag={true}
                          excerpt={width > 479 && width <= 641 ? false : true}
                          size={screen}
                          orient="left"
                        />
                      </Grid>
                    );
                })}
            </Grid>

            <Grid container spacing={2} className="brands-sm">
              <Grid item xs={12}>
                <SidebarBrands />
              </Grid>
            </Grid>

            <Grid container spacing={2} className="post-list">
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 4 && key <= 8)
                    return (
                      <Grid item xs={12}>
                        <PostCard
                          post={post}
                          delay={key}
                          tag={true}
                          excerpt={width > 479 && width <= 641 ? false : true}
                          size={screen}
                          orient="left"
                        />
                      </Grid>
                    );
                })}
            </Grid>

            <Grid container spacing={2} className="tags-sm">
              <Grid item xs={12}>
                <SidebarTags />
              </Grid>
            </Grid>

            <Grid container spacing={2} className="brands-sm">
              <Grid item xs={12}>
                <SidebarArchive />
              </Grid>
            </Grid>
          </Box>
        )}

        {screenLarge.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2} className="post-list">
              <Grid item xs={9}>
                <Grid container spacing={2}>
                  {posts &&
                    posts.length > 1 &&
                    posts.map((post, key) => {
                      if (key > 0 && key <= 4)
                        return (
                          <Grid item xs={12}>
                            <PostCard post={post} delay={key} tag={true} excerpt={true} size={screen} orient="left" />
                          </Grid>
                        );
                    })}
                </Grid>

                <Grid container spacing={2} className="ads-md">
                  <Grid item xs={12}>
                    <Ads
                      format={"full"}
                      imageUrl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg"}
                      altText="728x90"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="post-list">
                  {posts &&
                    posts.length > 1 &&
                    posts.map((post, key) => {
                      if (key > 4 && key <= 8)
                        return (
                          <Grid item xs={12}>
                            <PostCard post={post} delay={key} tag={true} excerpt={true} size={screen} orient="left" />
                          </Grid>
                        );
                    })}
                </Grid>
              </Grid>

              <Grid item xs={3}>
                <Grid container className="ads-lg">
                  <Grid item xs={12}>
                    <Ads
                      format={"square"}
                      imageUrl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg"}
                      altText="250x250"
                    />
                  </Grid>
                </Grid>
                <Grid container className="brands-lg">
                  <Grid item xs={12}>
                    <SidebarBrands />
                  </Grid>
                </Grid>
                <Grid container className="tags-lg">
                  <Grid item xs={12}>
                    <SidebarTags />
                  </Grid>
                </Grid>
                <Grid container className="archive-lg">
                  <Grid item xs={12}>
                    <SidebarArchive />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default LastedPosts;
