import React from "react";
import { DiscussionEmbed } from "disqus-react";
import { Box, Grid } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const PostComment = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box className="post-comment">
          <Box className="title">
            <Box className="icon">
              <ChatBubbleOutlineIcon />
            </Box>
            <Box className="name">
              <h3>Deixe um comentário</h3>
            </Box>
          </Box>
          <Box className="subtitle">
            <p>
              Seu endereço de e-mail não será publicado. Os campos obrigatórios
              estão marcados *
            </p>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <DiscussionEmbed
          shortname="comment-uaumotors"
          config={{
            url: "um1.uaumotors.com.br/noticias/titulo-da-noticia",
            identifier: "1",
            title: "Título da Notícia",
            language: "pt_BR"
          }}
        />
      </Grid>
    </Grid>
  );
};

export default PostComment;
