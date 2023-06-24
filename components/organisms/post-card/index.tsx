import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import PostImage from "../../molecules/post-card-thumb";
import PostTitle from "../../molecules/post-title";
import PostTag from "../../molecules/post-tag";
import PostDate from "../../molecules/post-date";
import PostViews from "../../molecules/post-views";
import PostExcerpt from "../../molecules/post-excerpt";
import PostAuthor from "../../molecules/post-author";
import { Box } from "@mui/material";

interface PostCardProps {
  content: any;
}

const PostCard = ({ feature_image, title, tags, excerpt, author, date, link }) => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  console.log("CONTENT ==> ", {
    feature_image,
    title,
    tags,
    excerpt,
    author,
    link,
    date
  });

  return (
    <div className="search-post-card">
      <PostImage imageUrl={feature_image} altText={title} onClick={handleClick} />
      <PostTag label={tags[0].name} onClick={handleClick} />
      <PostTitle title={title} onClick={handleClick} />
      <PostExcerpt excerpt={excerpt} />
      <Box className="post-metas">
        <PostDate date={date} />
        <PostViews views={7} />
      </Box>
      {/* <PostAuthor author={author} /> */}
    </div>
  );
};

export default PostCard;
