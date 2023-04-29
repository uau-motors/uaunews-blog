import React, { FC, Fragment, useState } from "react";
import { styled } from "@mui/material/styles";
import { NavTabsRecents } from "../../../utility/constants";
import TabContent from "../../molecules/tab-content";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import PostImage from "../../molecules/post-card-thumb";
import PostTitle from "../../molecules/post-title";
import PostTag from "../../molecules/post-tag";
import PostDate from "../../molecules/post-date";
import PostViews from "../../molecules/post-views";
import PostExcerpt from "../../molecules/post-excerpt";
import PostAuthor from "../../molecules/post-author";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import data from "../../../utility/data/posts.json";
import { Typography } from "@mui/material";

const RecentPosts = () => {
  const Counter = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2",
  }));

  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Fragment>
      <Grid container spacing={2} className={"posts"}>
        <Grid item xs={7} className="post-featured">
          <PostImage
            imageUrl={data[3].feature_image}
            altText={data[3].title}
            onClick={handleClick}
          />
          <Counter variant="h5" className="post-counter">
            01
          </Counter>
          <PostTag label={data[3].tags.name} onClick={handleClick} />
          <PostTitle
            title={
              "Royal Enfield Scram 2023 será R$ 1.800 mais barata que a Himalayan"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Grid>
        <Grid item xs={5} className={"post-list"}>
          <Grid container spacing={2} className={"post-item"}>
            <Grid item xs={5}>
              <PostImage
                imageUrl={data[9].feature_image}
                altText={data[2].title}
                onClick={handleClick}
              />
              <PostTag label={data[1].tags.name} onClick={handleClick} />
            </Grid>
            <Grid item xs={7}>
              <Counter variant="h5" className="post-counter">
                02
              </Counter>
              <PostTitle
                title={
                  "Citroën C4 X, que mescla SUV com sedã, tem design registrado no Brasil"
                }
                onClick={handleClick}
              />
              <Box className="post-metas">
                <PostDate date={new Date()} />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={"post-item"}>
            <Grid item xs={5}>
              <PostImage
                imageUrl={data[4].feature_image}
                altText={data[2].title}
                onClick={handleClick}
              />
              <PostTag label={data[2].tags.name} onClick={handleClick} />
            </Grid>
            <Grid item xs={7}>
              <Counter variant="h5" className="post-counter">
                03
              </Counter>
              <PostTitle
                title={
                  "Chevrolet S10 Midnight 2023 é lançada ao preço de R$ 310.100"
                }
                onClick={handleClick}
              />
              <Box className="post-metas">
                <PostDate date={new Date()} />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={"post-item"}>
            <Grid item xs={5}>
              <PostImage
                imageUrl={data[5].feature_image}
                altText={data[2].title}
                onClick={handleClick}
              />
              <PostTag label={data[3].tags.name} onClick={handleClick} />
            </Grid>
            <Grid item xs={7}>
              <Counter variant="h5" className="post-counter">
                04
              </Counter>
              <PostTitle
                title={
                  "Jeep revela teaser e confirma estreia de mais um SUV elétrico em 2025"
                }
                onClick={handleClick}
              />
              <Box className="post-metas">
                <PostDate date={new Date()} />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} className={"post-item"}>
            <Grid item xs={5}>
              <PostImage
                imageUrl={data[6].feature_image}
                altText={data[2].title}
                onClick={handleClick}
              />
              <PostTag label={data[4].tags.name} onClick={handleClick} />
            </Grid>
            <Grid item xs={7}>
              <Counter variant="h5" className="post-counter">
                05
              </Counter>
              <PostTitle
                title={
                  "Novo BMW Série 5 não será polêmico como o Série 7 e estreará em maio"
                }
                onClick={handleClick}
              />
              <Box className="post-metas">
                <PostDate date={new Date()} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default RecentPosts;
