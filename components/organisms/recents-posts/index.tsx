import React, { Fragment } from "react";

import Box from "@mui/material/Box";

import PostImage from "@molecules/post-card-thumb";
import PostTitle from "@molecules/post-title";
import PostTag from "@molecules/post-tag";
import PostDate from "@molecules/post-date";
import PostViews from "@molecules/post-views";
import PostExcerpt from "@molecules/post-excerpt";

import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";
import { PostCardDataI } from "@utility/interfaces";
import TitleSection from "@molecules/title-section";
import SidebarSocials from "@organisms/sidebar/socials";

interface RecentPostsProps {
  posts: PostCardDataI[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="post-featured">
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Não perca"} />
            </Box>
          </Grid>
        </Grid>
        <Box className="visible-xs">
          <Grid container spacing={2}>
            {posts && posts.length > 0 && (
              <Grid item xs={12} className="post-featured">
                <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                <Typography variant="h5" className="post-counter">
                  01
                </Typography>
                <PostTag label={posts[0].tags[0].name} onClick={handleClick} />
                <PostTitle title={posts[0].title} onClick={handleClick} />
                <PostExcerpt excerpt={posts[0].excerpt} />
                <Box className="post-metas">
                  <PostDate date={posts[0].created_at} />
                  <PostViews views={7} />
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={2} className="post-list">
            {posts &&
              posts.length > 1 &&
              posts.map((post, key) => {
                if (key > 1 && key < 6)
                  return (
                    <Grid item xs={12} className={"post-item"} key={key}>
                      <Grid container spacing={2}>
                        <Grid item xs={5}>
                          <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                          <PostTag label={post.tags[0].name} onClick={handleClick} />
                        </Grid>
                        <Grid item xs={7}>
                          <Typography variant="h5" className="post-counter">
                            0{key}
                          </Typography>
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

          <Grid container spacing={2} className="post-list">
            <Grid item xs={12}>
              <SidebarSocials />
            </Grid>
          </Grid>
        </Box>

        <Box className="visible-sm">
          <Grid container spacing={2}>
            {posts && posts.length > 0 && (
              <Grid item xs={7} className="post-featured">
                <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                <Typography variant="h5" className="post-counter">
                  01
                </Typography>
                <PostTag label={posts[0].tags[0].name} onClick={handleClick} />
                <PostTitle title={posts[0].title} onClick={handleClick} />
                <PostExcerpt excerpt={posts[0].excerpt} />
                <Box className="post-metas">
                  <PostDate date={posts[0].created_at} />
                  <PostViews views={7} />
                </Box>
              </Grid>
            )}
            <Grid item xs={5}>
              <SidebarSocials />
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
                        <Grid item xs={5}>
                          <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                          <PostTag label={post.tags[0].name} onClick={handleClick} />
                        </Grid>
                        <Grid item xs={7}>
                          <Typography variant="h5" className="post-counter">
                            0{key}
                          </Typography>
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
        </Box>
        <Box className="visible-md">
          <Grid container spacing={2}>
            {posts && posts.length > 0 && (
              <Grid item xs={8} className="post-featured">
                <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                <Typography variant="h5" className="post-counter">
                  01
                </Typography>
                <PostTag label={posts[0].tags[0].name} onClick={handleClick} />
                <PostTitle title={posts[0].title} onClick={handleClick} />
                <PostExcerpt excerpt={posts[0].excerpt} />
                <Box className="post-metas">
                  <PostDate date={posts[0].created_at} />
                  <PostViews views={7} />
                </Box>
              </Grid>
            )}
            <Grid item xs={4}>
              <SidebarSocials />
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
                        <Grid item xs={5}>
                          <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                          <PostTag label={post.tags[0].name} onClick={handleClick} />
                        </Grid>
                        <Grid item xs={7}>
                          <Typography variant="h5" className="post-counter">
                            0{key}
                          </Typography>
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
        </Box>
        <Box className="visible-lg">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Grid container spacing={2}>
                <Grid item xs={6} className="post-featured">
                  {posts && posts.length > 0 && (
                    <Grid item xs={12}>
                      <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                      <Typography variant="h5" className="post-counter">
                        01
                      </Typography>
                      <PostTag label={posts[0].tags[0].name} onClick={handleClick} />
                      <PostTitle title={posts[0].title} onClick={handleClick} />
                      <PostExcerpt excerpt={posts[0].excerpt} />
                      <Box className="post-metas">
                        <PostDate date={posts[0].created_at} />
                        <PostViews views={7} />
                      </Box>
                    </Grid>
                  )}
                </Grid>
                <Grid item xs={6} className="post-list">
                  {posts &&
                    posts.length > 1 &&
                    posts.map((post, key) => {
                      if (key > 1 && key < 6)
                        return (
                          <Grid container className={"post-item"} key={key} spacing={2}>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                              <PostTag label={post.tags[0].name} onClick={handleClick} />
                            </Grid>
                            <Grid item xs={7}>
                              <Typography variant="h5" className="post-counter">
                                0{key}
                              </Typography>
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={post.created_at} />
                              </Box>
                            </Grid>
                          </Grid>
                        );
                    })}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <SidebarSocials />
            </Grid>
          </Grid>
        </Box>
        <Box className="visible-xl">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Grid container spacing={2}>
                <Grid item xs={6} className="post-featured">
                  {posts && posts.length > 0 && (
                    <Grid item xs={12}>
                      <PostImage imageUrl={posts[0].feature_image} altText={posts[0].title} onClick={handleClick} />
                      <Typography variant="h5" className="post-counter">
                        01
                      </Typography>
                      <PostTag label={posts[0].tags[0].name} onClick={handleClick} />
                      <PostTitle title={posts[0].title} onClick={handleClick} />
                      <PostExcerpt excerpt={posts[0].excerpt} />
                      <Box className="post-metas">
                        <PostDate date={posts[0].created_at} />
                        <PostViews views={7} />
                      </Box>
                    </Grid>
                  )}
                </Grid>
                <Grid item xs={6} className="post-list">
                  {posts &&
                    posts.length > 1 &&
                    posts.map((post, key) => {
                      if (key > 1 && key < 6)
                        return (
                          <Grid container className={"post-item"} key={key} spacing={2}>
                            <Grid item xs={5}>
                              <PostImage imageUrl={post.feature_image} altText={post.title} onClick={handleClick} />
                              <PostTag label={post.tags[0].name} onClick={handleClick} />
                            </Grid>
                            <Grid item xs={7}>
                              <Typography variant="h5" className="post-counter">
                                0{key}
                              </Typography>
                              <PostTitle title={post.title} onClick={handleClick} />
                              <Box className="post-metas">
                                <PostDate date={post.created_at} />
                              </Box>
                            </Grid>
                          </Grid>
                        );
                    })}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <SidebarSocials />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
};

export default RecentPosts;
