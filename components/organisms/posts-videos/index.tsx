import React from "react";

import { Box, Grid } from "@mui/material";

import PostImage from "../../molecules/post-card-thumb";
import PostTitle from "../../molecules/post-title";
import PostDate from "../../molecules/post-date";
import PostViews from "../../molecules/post-views";
import Play from "../../molecules/play";

import data from "../../../utility/data/posts.json";

const PostsVideos = () => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };
  return (
    <Grid container> 
      <Grid item xs={6} className="post-featured">
          <PostImage
            imageUrl={data[14].feature_image}
            altText={data[3].title}
            onClick={handleClick}
          />
          <Play/>
          <Box className="content">
            <PostTitle
              title={
                "Avaliação: Novo Toyota Corolla Cross híbrido é mais potente que o brasileiro"
              }
              onClick={handleClick}
            />
            <Box className="post-metas">
              <PostDate date={new Date()} />
              <PostViews views={7} />
            </Box>
          </Box>
      </Grid>
      <Grid item xs={3} className="post">
          <PostImage
            imageUrl={data[17].feature_image}
            altText={data[3].title}
            onClick={handleClick}
          />
          <Play/>
          <Box className="content">
            <PostTitle
              title={
                "Novo Honda Civic Type R, com 330 cv, começa a desembarcar no Brasil
              }
              onClick={handleClick}
            />
            <Box className="post-metas">
              <PostDate date={new Date()} />
              <PostViews views={7} />
            </Box>
          </Box>
      </Grid>
      <Grid item xs={3} className="post">
          <PostImage
            imageUrl={data[19].feature_image}
            altText={data[3].title}
            onClick={handleClick}
          />
          <Play/>
          <Box className="content">
            <PostTitle
              title={
                "Volkswagen ID.7: sedã elétrico sucessor do Passat promete rodar por 700 km
              }
              onClick={handleClick}
            />
            <Box className="post-metas">
              <PostDate date={new Date()} />
              <PostViews views={7} />
            </Box>
          </Box>
      </Grid>
    </Grid>
    );
};

export default PostsVideos;
