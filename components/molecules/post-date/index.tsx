import { Box, Typography } from "@mui/material";
import { format } from "date-fns";

interface PostDateProps {
  date: string;
}

const PostDate = ({ date }: PostDateProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }} className="post-date">
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
          className="feather feather-calendar"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </Box>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        {format(new Date(date), "dd/MM/yyyy")}
      </Typography>
    </Box>
  );
};

export default PostDate;
