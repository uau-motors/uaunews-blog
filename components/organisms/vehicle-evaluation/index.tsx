import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";

import PostImage from "../../molecules/post-card-thumb";
import PostTitle from "../../molecules/post-title";
import PostDate from "../../molecules/post-date";
import PostViews from "../../molecules/post-views";
import ReviewMeta from "../../molecules/review-meta";

import data from "../../../utility/data/posts.json";

const VehicleEvaluation = () => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Grid container>
      <Grid item xs={4} className="post-featured">
        <PostImage
          imageUrl={data[16].feature_image}
          altText={data[3].title}
          onClick={handleClick}
        />
        <Box className="content">
          <PostTitle
            title={
              "Avaliação: Novo Toyota Corolla Cross híbrido é mais potente que o brasileiro"
            }
            onClick={handleClick}
          />
          <ReviewMeta score={9.6} place="Good Place" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} className="post-featured-2">
        <PostImage
          imageUrl={data[14].feature_image}
          altText={data[3].title}
          onClick={handleClick}
        />
        <Box className="content">
          <PostTitle
            title={
              "Teste: VW Polo Track 2023 é muito melhor que Gol e pode ser o novo carro popular"
            }
            onClick={handleClick}
          />
          <ReviewMeta score={9.6} place="Good Place" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} className="post-featured-2">
        <PostImage
          imageUrl={data[17].feature_image}
          altText={data[3].title}
          onClick={handleClick}
        />
        <Box className="content">
          <PostTitle
            title={
              "Avaliação: Purosangue é uma legítima Ferrari mesmo vestida de SUV
            }
            onClick={handleClick}
          />
          <ReviewMeta score={9.6} place="Good Place" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VehicleEvaluation;
