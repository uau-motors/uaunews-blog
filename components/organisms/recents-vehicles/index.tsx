import React from "react";

import { Box, Grid } from "@mui/material";

import PostImage from "../../molecules/post-card-thumb";
import PostTitle from "../../molecules/post-title";
import PostDate from "../../molecules/post-date";
import PostViews from "../../molecules/post-views";
import PostExcerpt from "../../molecules/post-excerpt";

import data from "../../../utility/data/posts.json";

const RecentsVehicles = () => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };
  return (
    <Grid container> 
    <Grid item xs={4} className="post">
        <PostImage
          imageUrl={data[14].feature_image}
          altText={data[3].title}
          onClick={handleClick}
        />
        <Box className="content">
          <PostTitle
            title={
              "Fiat Toro alcança 400 mil unidades vendidas no Brasil desde 2016"
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} className="post">
        <PostImage
          imageUrl={data[17].feature_image}
          altText={data[3].title}
          onClick={handleClick}
        />
        <Box className="content">
          <PostTitle
            title={
              "Novo Honda Civic Type R, com 330 cv, começa a desembarcar no Brasil
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4} className="post">
        <PostImage
          imageUrl={data[19].feature_image}
          altText={data[3].title}
          onClick={handleClick}
        />
        <Box className="content">
          <PostTitle
            title={
              "Volkswagen ID.7: sedã elétrico sucessor do Passat promete rodar por 700 km
            }
            onClick={handleClick}
          />
          <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
          <Box className="post-metas">
            <PostDate date={new Date()} />
            <PostViews views={7} />
          </Box>
        </Box>
      </Grid>
      </Grid>
    );
};

export default RecentsVehicles;
