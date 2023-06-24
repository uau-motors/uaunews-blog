import React, { Fragment } from "react";

import { Box, Grid } from "@mui/material";

import PostImage from "../../molecules/post-card-thumb";
import PostTitle from "../../molecules/post-title";
import PostDate from "../../molecules/post-date";
import PostViews from "../../molecules/post-views";
import Play from "../../molecules/play";

import TitleSection from "@components/molecules/title-section";
import { PostCardDataI } from "@utility/interfaces";

interface VideosProps {
  posts: PostCardDataI[];
}

const PostsVideos = ({ posts }: VideosProps) => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };
  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="post-featured">
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Vídeos"} />
            </Box>
          </Grid>
        </Grid>

        <Box className="visible-xs">
          <Grid container spacing={2}>
            {posts && posts.length > 0 && (
              <Grid item xs={12} className="post-featured">
                <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                <Play />
                <Box className="content">
                  <PostTitle title={posts[0].title} onClick={handleClick} />
                  <Box className="post-metas">
                    <PostDate date={new Date()} />
                    <PostViews views={7} />
                  </Box>
                </Box>
              </Grid>
            )}
            {posts &&
              posts.length > 1 &&
              posts.map((post, key) => {
                if (key > 1 && key < 4)
                  return (
                    <Grid item xs={12} className={"post"} key={key}>
                      <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                      <Play />
                      <Box className="content">
                        <PostTitle title={post.title} onClick={handleClick} />
                        <Box className="post-metas">
                          <PostDate date={new Date()} />
                          <PostViews views={7} />
                        </Box>
                      </Box>
                    </Grid>
                  );
              })}
          </Grid>
        </Box>

        <Box className="visible-sm">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {posts && posts.length > 0 && (
                <Grid item xs={12} className="post-featured">
                  <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                  <Play />
                  <Box className="content">
                    <PostTitle title={posts[0].title} onClick={handleClick} />
                    <Box className="post-metas">
                      <PostDate date={new Date()} />
                      <PostViews views={7} />
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid item xs={6} className={"post"}>
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 1 && key < 4)
                    return (
                      <Grid item xs={12} className="post-item" key={key}>
                        <Grid container spacing={2}>
                          <Grid item xs={5} className="card-video">
                            <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                            <Play />
                          </Grid>
                          <Grid item xs={7}>
                            <Box className="content">
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={new Date()} />
                                <PostViews views={7} />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                })}
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-md">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {posts && posts.length > 0 && (
                <Grid item xs={12} className="post-featured">
                  <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                  <Play />
                  <Box className="content">
                    <PostTitle title={posts[0].title} onClick={handleClick} />
                    <Box className="post-metas">
                      <PostDate date={new Date()} />
                      <PostViews views={7} />
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid item xs={6} className={"post"}>
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 1 && key < 4)
                    return (
                      <Grid item xs={12} className="post-item" key={key}>
                        <Grid container spacing={2}>
                          <Grid item xs={5} className="card-video">
                            <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                            <Play />
                          </Grid>
                          <Grid item xs={7}>
                            <Box className="content">
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={new Date()} />
                                <PostViews views={7} />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                })}
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-lg">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {posts && posts.length > 0 && (
                <Grid item xs={12} className="post-featured">
                  <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                  <Play />
                  <Box className="content">
                    <PostTitle title={posts[0].title} onClick={handleClick} />
                    <Box className="post-metas">
                      <PostDate date={new Date()} />
                      <PostViews views={7} />
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid item xs={6} className={"post"}>
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 1 && key < 4)
                    return (
                      <Grid item xs={12} className="post-item" key={key}>
                        <Grid container spacing={2}>
                          <Grid item xs={5} className="card-video">
                            <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                            <Play />
                          </Grid>
                          <Grid item xs={7}>
                            <Box className="content">
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={new Date()} />
                                <PostViews views={7} />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                })}
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-xl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {posts && posts.length > 0 && (
                <Grid item xs={12} className="post-featured">
                  <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                  <Play />
                  <Box className="content">
                    <PostTitle title={posts[0].title} onClick={handleClick} />
                    <Box className="post-metas">
                      <PostDate date={new Date()} />
                      <PostViews views={7} />
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid item xs={6} className={"post"}>
              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 1 && key < 4)
                    return (
                      <Grid item xs={12} className="post-item" key={key}>
                        <Grid container spacing={2}>
                          <Grid item xs={5} className="card-video">
                            <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                            <Play />
                          </Grid>
                          <Grid item xs={7}>
                            <Box className="content">
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={new Date()} />
                                <PostViews views={7} />
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                })}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default PostsVideos;
