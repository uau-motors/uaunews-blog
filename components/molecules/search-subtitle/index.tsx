import React from "react";
import { Box, Typography } from "@mui/material";

const SearchSubtitle = () => {
  return (
    <Box display="flex" alignItems="left" className="search-subtitle">
      <Typography variant="h4" component="h3" sx={{ mr: 2, mt: 5, mb: 5 }}>
        Blog
      </Typography>
    </Box>
  );
};

export default SearchSubtitle;
