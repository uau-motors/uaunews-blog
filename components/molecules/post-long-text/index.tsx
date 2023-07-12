import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

interface PostLongTextProps {
  text: string;
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  }
}));

const PostLongText: React.FC<PostLongTextProps> = ({ text }) => {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classes.root}>
      {text}
    </Typography>
  );
};

export default PostLongText;
