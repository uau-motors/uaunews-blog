import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

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
  const parsedText = ReactHtmlParser(text);

  return (
    <Typography variant="body1" className={classes.root}>
      {parsedText}
    </Typography>
  );
};

export default PostLongText;
