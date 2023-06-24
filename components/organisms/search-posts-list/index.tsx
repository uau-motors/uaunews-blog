import React from "react";
import { Grid } from "@mui/material";
import PostCard from "../post-card";

interface PostListProps {
  posts: PostCardProps[];
}

const SearchPostList: React.FC<PostListProps> = (props) => {
  const { posts } = props;
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
