import React, { FC } from "react";
import { Typography, Box, TypographyPropsVariantOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";

interface TitleSectionProps {
  title: string;
  variant?: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>;
  component?: React.ElementType;
}

const TitleSection: FC<TitleSectionProps> = ({ title, variant = "h2", component = "h2" }) => {
  return (
    <Box className="title-section">
      <Typography variant={variant} component={component}>
        {title}
      </Typography>
    </Box>
  );
};

export default TitleSection;
