import React, { useState, useEffect } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import Image from "next/image";

interface AdsPropsI {
  format?: string;
  imageUrl?: string;
  altText?: string;
}

const Ads = ({ format, imageUrl, altText }: AdsPropsI) => {
  const [width, setWidth] = useState(250);
  const [height, setHeight] = useState(250);

  useEffect(() => {
    if (format === "mobile") {
      setWidth(320);
      setHeight(50);
    }
    if (format === "leaderboard") {
      setWidth(728);
      setHeight(90);
    }
    if (format === "square") {
      setWidth(250);
      setHeight(250);
    }
    if (format === "billboard") {
      setWidth(970);
      setHeight(250);
    }
  }, [format]);

  return (
    <Box className="ads">
      <Box className="ads-container">
        <Paper sx={{ display: { xl: "block", xs: "none" } }} className={`ads-paper ads-${format}`}>
          {imageUrl ? (
            <center>
              <Image
                src={imageUrl}
                className="ads-image"
                width={width}
                height={height}
                alt={altText ? altText : "ads-image"}
              />
            </center>
          ) : (
            <Skeleton variant="rectangular" width="100%" height="auto" className="ads-image" />
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default Ads;
