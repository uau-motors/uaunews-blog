import React from "react";
import { Avatar, Typography, makeStyles, Theme } from "@material-ui/core";
import { Box } from "@mui/material";
import PostDate from "../PostDate";
import PostViews from "../PostViews";

interface PostAuthorProps {
  name: string;
  avatarSrc: string;
  created?: string;
  office?: string;
}

const PostAuthor: React.FC<PostAuthorProps> = ({ name, avatarSrc, created, office }) => {
  const displayName = name ? `<strong>${name}</strong> ` : "";
  const displayOffice = office ? ` - ${office}` : "";
  const displayCreated = created ? `<br/><strong>Último post:</strong> ${created}` : "";
  return (
    <div className="author">
      <Box>
        <Avatar alt={name} src={avatarSrc} className="author-avatar" />
      </Box>
      <Box className="author-meta">
        <Typography
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: displayName }}
          className="author-name"
        ></Typography>
        <Typography
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: displayOffice }}
          className="author-office"
        ></Typography>
        <Typography
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: displayCreated }}
          className="author-lasteds"
        ></Typography>
      </Box>
    </div>
  );
};

export default PostAuthor;
