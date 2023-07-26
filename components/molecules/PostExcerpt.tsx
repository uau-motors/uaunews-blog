import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

interface PostExcerptProps {
  excerpt: string;
}

const PostExcerpt: React.FC<PostExcerptProps> = ({ excerpt }) => {
  return (
    <Typography variant="body1" className="post-excerpt">
      {excerpt}
    </Typography>
  );
};

export default PostExcerpt;
