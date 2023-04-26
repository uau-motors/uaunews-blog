import { Box, Typography } from "@mui/material";

interface PostViewsProps {
  views: number;
}

const PostViews = ({ views }: PostViewsProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }} className="post-views">
      <Box sx={{ mr: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-eye"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M2.32 12A10 10 0 0 0 12 21.68M21.08 12a10 10 0 0 0-8.16-8.16M3.92 6.32A10 10 0 0 0 12 2.32m0 19.36a10 10 0 0 0 8.08-8.08"></path>
        </svg>
      </Box>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        {views} visualizações
      </Typography>
    </Box>
  );
};

export default PostViews;
