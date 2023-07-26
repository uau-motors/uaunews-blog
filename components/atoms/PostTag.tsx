import React from "react";
import { Chip } from "@material-ui/core";

interface PostTagProps {
  label: string;
  onClick?: () => void;
}

const PostTag: React.FC<PostTagProps> = ({ label, onClick }) => {
  return <Chip label={label} className="post-tag" onClick={onClick} variant="outlined" />;
};

export default PostTag;
