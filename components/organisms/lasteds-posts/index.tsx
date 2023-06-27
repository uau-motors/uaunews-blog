import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

import PostImage from "@molecules/post-card-thumb";
import PostTitle from "@molecules/post-title";
import PostTag from "@molecules/post-tag";
import PostDate from "@molecules/post-date";
import PostViews from "@molecules/post-views";
import PostExcerpt from "@molecules/post-excerpt";
import Ads from "@molecules/ads";

import Grid from "@mui/material/Grid";

import data from "@utility/data/posts.json";
import { Typography } from "@mui/material";
import TitleSection from "@components/molecules/title-section";
import { PostCardDataI } from "@utility/interfaces";
import SidebarBrands from "../sidebar/brands";
import SidebarArchive from "../sidebar/archive";
import SidebarTags from "../sidebar/tags";

interface LastedPostsProps {
  posts: PostCardDataI[];
}

const LastedPosts = ({ posts }: LastedPostsProps) => {
  const Counter = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2"
  }));
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="post-featured">
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Recentes Posts"} />
            </Box>
          </Grid>
        </Grid>

        <Box className="visible-xs">
          <Grid container spacing={2} className="post-list">
            {posts &&
              posts.length > 1 &&
              posts.map((post, key) => {
                if (key > 1 && key < 6)
                  return (
                    <Grid item xs={12} className={"post"} key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={5}>
                          <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                          <PostTag label={post.tags[0].name} onClick={handleClick} />
                        </Grid>
                        <Grid item xs={7}>
                          <PostTitle title={post.title} onClick={handleClick} />
                          <Box className="post-metas">
                            <PostDate date={post.created_at} />
                          </Box>
                        </Grid>
                      </Grid>
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
                if (key > 1 && key < 6)
                  return (
                    <Grid item xs={12} className={"post"} key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={5}>
                          <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                          <PostTag label={post.tags[0].name} onClick={handleClick} />
                        </Grid>
                        <Grid item xs={7}>
                          <PostTitle title={post.title} onClick={handleClick} />
                          <Box className="post-metas">
                            <PostDate date={post.created_at} />
                          </Box>
                        </Grid>
                      </Grid>
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

        <Box className="visible-sm">
          <Grid container spacing={2} className="post-list">
            {posts &&
              posts.length > 1 &&
              posts.map((post, key) => {
                if (key > 1 && key < 6)
                  return (
                    <Grid item xs={6} className={"post-item"} key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} className={"post"} key={key}>
                          <Grid container spacing={2}>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                              <PostTag label={post.tags[0].name} onClick={handleClick} />
                            </Grid>
                            <Grid item xs={7}>
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={post.created_at} />
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
              })}
          </Grid>

          <Grid container spacing={2} className="ads-sm">
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
                if (key > 1 && key < 6)
                  return (
                    <Grid item xs={6} className={"post-item"} key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} className={"post"} key={key}>
                          <Grid container spacing={2}>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                              <PostTag label={post.tags[0].name} onClick={handleClick} />
                            </Grid>
                            <Grid item xs={7}>
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={post.created_at} />
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
              })}
          </Grid>

          <Grid container spacing={2} className="brands-sm">
            <Grid item xs={12}>
              <SidebarBrands />
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-md">
          <Grid container spacing={2} className="post-list">
            {posts &&
              posts.length > 1 &&
              posts.map((post, key) => {
                if (key > 1 && key < 6)
                  return (
                    <Grid item xs={6} className={"post-item"} key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} className={"post"} key={key}>
                          <Grid container spacing={2}>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                              <PostTag label={post.tags[0].name} onClick={handleClick} />
                            </Grid>
                            <Grid item xs={7}>
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={post.created_at} />
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
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
                if (key > 1 && key < 6)
                  return (
                    <Grid item xs={6} className={"post-item"} key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} className={"post"} key={key}>
                          <Grid container spacing={2}>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                              <PostTag label={post.tags[0].name} onClick={handleClick} />
                            </Grid>
                            <Grid item xs={7}>
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={post.created_at} />
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
              })}
          </Grid>

          <Grid container spacing={2} className="brands-md">
            <Grid item xs={12}>
              <SidebarBrands />
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-lg">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Grid container spacing={2} className="post-list">
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key <= 5)
                      return (
                        <Grid item xs={12} className={"post-item"} key={key}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} className={"post"} key={key}>
                              <Grid container spacing={2}>
                                <Grid item xs={5}>
                                  <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                                  <PostTag label={post.tags[0].name} onClick={handleClick} />
                                </Grid>
                                <Grid item xs={7}>
                                  <PostTitle title={post.title} onClick={handleClick} />
                                  <PostExcerpt excerpt={post.excerpt} />
                                  <Box className="post-metas">
                                    <PostDate date={post.created_at} />
                                    <PostViews views={7} />
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
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

        <Box className="visible-xl">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Grid container spacing={2} className="post-list">
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key <= 5)
                      return (
                        <Grid item xs={12} className={"post-item"} key={key}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} className={"post"} key={key}>
                              <Grid container spacing={2}>
                                <Grid item xs={5}>
                                  <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                                  <PostTag label={post.tags[0].name} onClick={handleClick} />
                                </Grid>
                                <Grid item xs={7}>
                                  <PostTitle title={post.title} onClick={handleClick} />
                                  <PostExcerpt excerpt={post.excerpt} />
                                  <Box className="post-metas">
                                    <PostDate date={post.created_at} />
                                    <PostViews views={7} />
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                  })}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container className="ads-xl">
                <Grid item xs={12}>
                  <Ads
                    format={"square"}
                    imageUrl={"https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg"}
                    altText="250x250"
                  />
                </Grid>
              </Grid>
              <Grid container className="brands-xl">
                <Grid item xs={12}>
                  <SidebarBrands />
                </Grid>
              </Grid>
              <Grid container className="tags-xl">
                <Grid item xs={12}>
                  <SidebarTags />
                </Grid>
              </Grid>
              <Grid container className="archive-xl">
                <Grid item xs={12}>
                  <SidebarArchive />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default LastedPosts;
