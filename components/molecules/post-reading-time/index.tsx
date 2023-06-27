import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Typography } from "@mui/material";

interface PostReadingTimeProps {
  time: number;
}

const PostReadingTime = ({ time }: PostReadingTimeProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }} className="post-views">
      <Box sx={{ mr: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="16"
          height="16"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="6" x2="12" y2="12" />
          <line x1="12" y1="12" x2="16" y2="16" />
        </svg>
      </Box>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        {time} minutos de leitura
      </Typography>
    </Box>
  );
};

export default PostReadingTime;
