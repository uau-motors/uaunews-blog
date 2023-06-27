import Breadcrumb from "@molecules/breadcrumb";
import PostAuthor from "@molecules/post-author";
import PostDate from "@molecules/post-date";
import PostExcerpt from "@molecules/post-excerpt";
import PostReadingTime from "@molecules/post-reading-time";
import PostShare from "@molecules/post-share";
import PostTag from "@molecules/post-tag";
import PostTitle from "@molecules/post-title";
import PostViews from "@molecules/post-views";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const SinglePostHeader = () => {
  return (
    <Grid container className="post-header">
      <Breadcrumb titlePage="Avaliação: Novo Toyota Corolla Cross híbrido é mais potente que o brasileiro" />
      <Grid item xs={12}>
        <PostTag label="Notícias" />
      </Grid>
      <Grid item xs={12}>
        <PostTitle
          title="
Avaliação: Novo Toyota Corolla Cross híbrido é mais potente que o brasileiro"
        />
      </Grid>
      <Grid item xs={12}>
        <PostExcerpt excerpt="Novidade da marca teve o preço confirmado. Lançamento acontecerá no final de abril" />
      </Grid>
      <Grid item xs={12} className="post-author">
        <PostAuthor
          avatarSrc="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/emm-150x150.jpg"
          name="Taylor Emma"
          created=" 2021/09/25 at 9:28 AM"
          office="Senior Editor"
        />
      </Grid>
      <Grid item xs={6}>
        <Box className="post-metas">
          <PostDate date={"01/01/2023"} />
          <PostViews views={7} />
          <PostReadingTime time={4} />
        </Box>
      </Grid>
      <Grid item xs={6} className="post-share">
        <PostShare />
      </Grid>
    </Grid>
  );
};

export default SinglePostHeader;
