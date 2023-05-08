import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

import PostImage from "../../molecules/post-card-thumb";
import PostTitle from "../../molecules/post-title";
import PostTag from "../../molecules/post-tag";
import PostDate from "../../molecules/post-date";
import PostViews from "../../molecules/post-views";
import PostExcerpt from "../../molecules/post-excerpt";
import Ads from "../../molecules/ads";

import Grid from "@mui/material/Grid";

import data from "../../../utility/data/posts.json";
import { Typography } from "@mui/material";

const LastedPosts = () => {
  const Counter = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#1A2027" : "#f2f2f2",
  }));

  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Fragment>
      <Grid container spacing={2} className={"posts"}>
        <Grid item xs={5} className={"post"}>
          <PostImage
            imageUrl={data[9].feature_image}
            altText={data[2].title}
            onClick={handleClick}
          />
          <PostTag label={data[1].tags.name} onClick={handleClick} />
        </Grid>
        <Grid item xs={7} className="post-content">
          <PostTitle
            title={
              "Citroën C4 X, que mescla SUV com sedã, tem design registrado no Brasil"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Grid>
        <Grid item xs={5} className={"post"}>
          <PostImage
            imageUrl={data[8].feature_image}
            altText={data[2].title}
            onClick={handleClick}
          />
          <PostTag label={data[2].tags.name} onClick={handleClick} />
        </Grid>
        <Grid item xs={7} className="post-content">
          <PostTitle
            title={
              "Citroën C4 X, que mescla SUV com sedã, tem design registrado no Brasil"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Grid>
        <Grid item xs={5} className={"post"}>
          <PostImage
            imageUrl={data[7].feature_image}
            altText={data[2].title}
            onClick={handleClick}
          />
          <PostTag label={data[3].tags.name} onClick={handleClick} />
        </Grid>
        <Grid item xs={7} className="post-content">
          <PostTitle
            title={
              "Renault Alaskan 2023: novas versões na Argentina enquanto Brasil espera"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="O lançamento da inédita Ram nacional de porte médio está cada vez mais próximo. Além de estar perdendo camuflagens nos flagras mais recentes, a novidade já tem um site dedicado na página oficial da marca no Brasil." />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Grid>
        <Grid item xs={12} style={{ paddingRight: 20 }}>
          <Ads
            format={"full"}
            imageUrl={
              "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg"
            }
            altText="728x90"
          />
        </Grid>
        <Grid item xs={5} className={"post"}>
          <PostImage
            imageUrl={data[9].feature_image}
            altText={data[2].title}
            onClick={handleClick}
          />
          <PostTag label={data[1].tags.name} onClick={handleClick} />
        </Grid>
        <Grid item xs={7} className="post-content">
          <PostTitle
            title={
              "Citroën C4 X, que mescla SUV com sedã, tem design registrado no Brasil"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Grid>
        <Grid item xs={5} className={"post"}>
          <PostImage
            imageUrl={data[8].feature_image}
            altText={data[2].title}
            onClick={handleClick}
          />
          <PostTag label={data[2].tags.name} onClick={handleClick} />
        </Grid>
        <Grid item xs={7} className="post-content">
          <PostTitle
            title={
              "Citroën C4 X, que mescla SUV com sedã, tem design registrado no Brasil"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Grid>
        <Grid item xs={5} className={"post"}>
          <PostImage
            imageUrl={data[7].feature_image}
            altText={data[2].title}
            onClick={handleClick}
          />
          <PostTag label={data[3].tags.name} onClick={handleClick} />
        </Grid>
        <Grid item xs={7} className="post-content">
          <PostTitle
            title={
              "Renault Alaskan 2023: novas versões na Argentina enquanto Brasil espera"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="O lançamento da inédita Ram nacional de porte médio está cada vez mais próximo. Além de estar perdendo camuflagens nos flagras mais recentes, a novidade já tem um site dedicado na página oficial da marca no Brasil." />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LastedPosts;
