import React from "react";
import { Avatar, Typography, makeStyles, Theme } from "@material-ui/core";

interface PostAuthorProps {
  name: string;
  avatarSrc: string;
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

const PostAuthor: React.FC<PostAuthorProps> = ({ name, avatarSrc }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt={name} src={avatarSrc} className={classes.avatar} />
      <Typography variant="subtitle1">{name}</Typography>
    </div>
  );
};

export default PostAuthor;
