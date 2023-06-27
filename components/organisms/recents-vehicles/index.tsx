import React, { Fragment } from "react";

import { Box, Grid } from "@mui/material";

import PostImage from "@molecules/post-card-thumb";
import PostTitle from "@molecules/post-title";
import PostDate from "@molecules/post-date";
import PostViews from "@molecules/post-views";

import { PostCardDataI } from "@utility/interfaces";

import TitleSection from "@components/molecules/title-section";
import SidebarNewsletter from "../sidebar/newsletter";

interface RecentsVehiclesProps {
  posts: PostCardDataI[];
}

const RecentsVehicles = ({ posts }: RecentsVehiclesProps) => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };
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

        <Box className="visible-xs">
          <Grid container spacing={2}>
            {posts &&
              posts.length > 1 &&
              posts.map((post, key) => {
                if (key > 0 && key <= 4)
                  return (
                    <Grid container key={key} className="post" spacing={2}>
                      <Grid item xs={7}>
                        <Box className="content">
                          <PostTitle title={post.title} onClick={handleClick} />
                          <Box className="post-metas">
                            <PostDate date={"01/01/2023"} />
                            <PostViews views={7} />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={5}>
                        <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                      </Grid>
                    </Grid>
                  );
              })}
            <Grid item xs={12}>
              <SidebarNewsletter />
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-sm">
          <Grid container spacing={2}>
            {posts &&
              posts.length > 1 &&
              posts.map((post, key) => {
                if (key > 0 && key <= 4)
                  return (
                    <Grid item xs={6}>
                      <Grid container key={key} className="post" spacing={2}>
                        <Grid item xs={7}>
                          <Box className="content">
                            <PostTitle title={post.title} onClick={handleClick} />
                            <Box className="post-metas">
                              <PostDate date={"01/01/2023"} />
                              <PostViews views={7} />
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={5}>
                          <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                        </Grid>
                      </Grid>
                    </Grid>
                  );
              })}
            <Grid item xs={12}>
              <SidebarNewsletter />
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-md">
          <Grid container spacing={2}>
            <Grid item xs={8} className="posts-items">
              <Grid container className="post">
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key > 0 && key <= 4)
                      return (
                        <Grid item xs={6} className={`post-item-${key}`}>
                          <Grid container key={key} className="post">
                            <Grid item xs={7}>
                              <Box className="content">
                                <PostTitle title={post.title} onClick={handleClick} />
                                <Box className="post-metas">
                                  <PostDate date={"01/01/2023"} />
                                  <PostViews views={7} />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                            </Grid>
                          </Grid>
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

        <Box className="visible-lg">
          <Grid container spacing={2}>
            <Grid item xs={9} className="posts-items">
              <Grid container className="post">
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key > 0 && key <= 4)
                      return (
                        <Grid item xs={6} className={`post-item-${key}`}>
                          <Grid container key={key} className="post">
                            <Grid item xs={7}>
                              <Box className="content">
                                <PostTitle title={post.title} onClick={handleClick} />
                                <Box className="post-metas">
                                  <PostDate date={"01/01/2023"} />
                                  <PostViews views={7} />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                  })}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <SidebarNewsletter />
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-xl">
          <Grid container spacing={2}>
            <Grid item xs={8} className="posts-items">
              <Grid container className="post">
                {posts &&
                  posts.length > 1 &&
                  posts.map((post, key) => {
                    if (key > 0 && key <= 4)
                      return (
                        <Grid item xs={6} className={`post-item-${key}`}>
                          <Grid container key={key} className="post">
                            <Grid item xs={7}>
                              <Box className="content">
                                <PostTitle title={post.title} onClick={handleClick} />
                                <Box className="post-metas">
                                  <PostDate date={"01/01/2023"} />
                                  <PostViews views={7} />
                                </Box>
                              </Box>
                            </Grid>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                            </Grid>
                          </Grid>
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
      </Box>
    </Fragment>
  );
};

export default RecentsVehicles;
