import React from "react";
import { Chip } from "@mui/material";

interface Tag {
  title: string;
  pathname: string;
}

interface TagCloudProps {
  tags: Tag[];
}

const TagCloud = ({ tags }: TagCloudProps) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag.title}
          variant="outlined"
          size="small"
          component="a"
          href={tag.pathname}
          rel="noopener noreferrer"
        />
      ))}
    </>
  );
};

export default TagCloud;
