import React from "react";
import { Grid } from "@mui/material";
import PostCard from "../post-card";
import { PostCardDataI } from "@utility/interfaces";

interface PostListProps {
  posts: PostCardDataI[];
}

const SearchPostList = ({ posts }: PostListProps) => {
  return (
    <Grid container spacing={2} className="search-posts">
      {posts &&
        posts.map((post, index) => {
          if (index > 0 && index <= 8)
            return (
              <Grid item key={index} xs={3}>
                <PostCard {...post} />
              </Grid>
            );
        })}
    </Grid>
  );
};

export default SearchPostList;
