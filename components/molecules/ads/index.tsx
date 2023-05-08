import React, { useState, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    adContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      backgroundColor: "#f2f2f2",
    },
    adImage: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "4px",
    },
  })
);

const Ads = ({ format, imageUrl, altText }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(250);

  useEffect(() => {
    if (format === "full") {
      setHeight(90);
      setWidth(728);
    }
    if (format === "square") {
      setHeight(250);
      setWidth(250);
    }
  }, []);

  return (
    <Box className={classes.adContainer}>
      <Paper sx={{ display: { xl: "none", xs: "block" } }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            className={classes.adImage}
            width={width}
            height={height}
            alt={altText}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width={width}
            height={height}
            className={classes.adImage}
          />
        )}
      </Paper>
      <Paper sx={{ display: { xl: "block", xs: "none" } }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            className={classes.adImage}
            width={width}
            height={height}
            alt={altText}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="auto"
            className={classes.adImage}
          />
        )}
      </Paper>
    </Box>
  );
};

export default Ads;
