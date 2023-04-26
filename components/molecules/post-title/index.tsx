import React from "react";
import { Typography } from "@material-ui/core";
import { Skeleton } from "@mui/material";

interface PostTitleProps {
  title: string;
  onClick?: () => void;
}

const PostTitle: React.FC<PostTitleProps> = ({ title, onClick }) => {
  return (
    <div className="post-title" onClick={onClick}>
      {title ? (
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
      ) : (
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      )}
    </div>
  );
};

export default PostTitle;
