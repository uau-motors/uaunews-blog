import React from "react";
import { Grid } from "@mui/material";
import PostCard from "../post-card";

interface PostListProps {
  posts: PostCardProps[];
}

const SearchPostList: React.FC<PostListProps> = (props) => {
  const { posts } = props;
  console.log("SEARCH POSTS ==> ", posts);
  return (
    <Grid container spacing={2} className="search-posts">
      {posts &&
        posts.news.map((post, index) => (
          <Grid item key={index} xs={3}>
            <PostCard {...post} />
          </Grid>
        ))}
    </Grid>
  );
};

export default SearchPostList;
