import { Box } from "@mui/material";
import React from "react";

const PostCredit = () => {
  return (
    <Box className="post-credit">
      <ol>
        <li className="tags">
          <span>Tags:</span>
          <a href="#">Notícias</a>
          <a href="#">Toyota</a>
          <a href="#">Hibrído</a>
        </li>
        <li className="sources">
          <span>Fonte:</span>
          <a href="#">UauMotors</a>
        </li>
      </ol>
    </Box>
  );
};

export default PostCredit;
