import React from "react";
import PostImage from "@molecules/post-card-thumb";
import PostTitle from "@molecules/post-title";
import PostTag from "@molecules/post-tag";
import PostDate from "@molecules/post-date";
import PostViews from "@molecules/post-views";
import PostExcerpt from "@molecules/post-excerpt";
import { Box } from "@mui/material";
import { PostCardDataI } from "@utility/interfaces";

const PostCard = ({ feature_image, title, tags, excerpt, created_at }: PostCardDataI) => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <div className="search-post-card">
      <PostImage imageUrl={feature_image} altText={title} onClick={handleClick} />
      <PostTag label={tags[0].name} onClick={handleClick} />
      <PostTitle title={title} onClick={handleClick} />
      <PostExcerpt excerpt={excerpt} />
      <Box className="post-metas">
        <PostDate date={created_at} />
        <PostViews views={7} />
      </Box>
      {/* <PostAuthor author={author} /> */}
    </div>
  );
};

export default PostCard;
