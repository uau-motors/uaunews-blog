import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import { NavTabsRecents } from "../../../utility/constants";
import TitleSection from "../../atoms/title-section";
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

const RecentPosts = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className={"recents-news"}>
        <Grid item xs={9}>
          <Box sx={{ width: "100%" }}>
            <TitleSection title={"Não perca"} />
          </Box>
          <Grid container spacing={2} className={"posts"}>
            <Grid item xs={7} className="post-featured">
              <PostImage
                imageUrl={data[3].feature_image}
                altText={data[3].title}
                onClick={handleClick}
              />
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
                </Grid>
                <Grid item xs={7}>
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
                </Grid>
                <Grid item xs={7}>
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
                </Grid>
                <Grid item xs={7}>
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
                </Grid>
                <Grid item xs={7}>
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
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentPosts;
