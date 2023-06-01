import { Box, Grid, Button } from "@mui/material";
import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PostThumb from "../post-card-thumb";
import PostTitle from "../post-title";

const PostNavigator = () => {
  return (
    <Grid container className="post-navigator">
      <Grid item xs={6}>
        <Box className="post-previous">
          <Button startIcon={<KeyboardArrowLeftIcon />}>Anterior</Button>
          <Box className="post">
            <PostThumb
              imageUrl="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t5-150x150.jpg"
              altText="previous"
            />
            <PostTitle title="Google deve permitir que desenvolvedores usem outros sistemas de pagamento" />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className="post-next">
          <Button endIcon={<KeyboardArrowRightIcon />}>Próximo</Button>
          <Box className="post">
            <PostTitle title="Carros autônomos: tudo o que você precisa saber" />
            <PostThumb
              imageUrl="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/08/t13-150x150.jpg"
              altText="next"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PostNavigator;
