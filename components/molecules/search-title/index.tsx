import React from "react";
import { Box, Typography } from "@mui/material";

const SearchTitle = () => {
  return (
    <Box display="flex" alignItems="left" className="search-title">
      <Typography variant="h3" component="h1" sx={{ mr: 2, mt: 5, mb: 5 }}>
        Como podemos te ajudar?
      </Typography>
    </Box>
  );
};

export default SearchTitle;
