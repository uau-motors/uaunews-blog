import React from "react";

import { Box, Container, Grid } from "@mui/material";
import PostImage from "@molecules/post-card-thumb";
import PostTitle from "@molecules/post-title";
import PostDate from "@molecules/post-date";
import PostViews from "@molecules/post-views";

import data from "@utility/data/posts.json";

const CategoryFeatureds = () => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Container className="featureds-category">
      <Grid container>
        <Grid item xs={7} className="large-featured">
          <Box className="post">
            <PostImage
              imageUrl={data[14].feature_image}
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
              <Box className="post-metas">
                <PostDate date={new Date()} />
                <PostViews views={7} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5} className="medium-featured">
          <Grid container>
             <Grid item xs={12}>
              <Box className="post">
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
                  <Box className="post-metas">
                    <PostDate date={new Date()} />
                    <PostViews views={7} />
                  </Box>
                </Box>
                </Box>
            </Grid>
            <Grid item xs={12}>
                    <Box className="post">
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
                  <Box className="post-metas">
                    <PostDate date={new Date()} />
                    <PostViews views={7} />
                  </Box>
                </Box>
                </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoryFeatureds;
