import React, { FC } from "react";
import { Typography, Box } from "@mui/material";

interface TitleSectionProps {
  title: string;
}

const TitleSection: FC<TitleSectionProps> = ({ title }) => (
  <Box mb={3}>
    <Typography variant="h2" component="h2">
      {title}
    </Typography>
  </Box>
);

export default TitleSection;
