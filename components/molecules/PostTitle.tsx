import React, { FC } from "react";
import { Typography, TypographyPropsVariantOverrides } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";
import { Skeleton } from "@mui/material";

interface PostTitleProps {
  title: string;
  onClick?: () => void;
}

interface PostTitleProps {
  title: string;
  variant?: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>;
  component?: React.ElementType;
  onClick?: () => void;
}

const PostTitle: FC<PostTitleProps> = ({ title, variant = "h4", component = "h3", onClick }) => {
  return (
    <div className="post-title" onClick={onClick}>
      {title ? (
        <Typography variant={variant} component={component}>
          {title}
        </Typography>
      ) : (
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      )}
    </div>
  );
};

export default PostTitle;
