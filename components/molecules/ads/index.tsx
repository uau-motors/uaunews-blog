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
    if (format === "full") {
      setHeight(90);
      setWidth(728);
    }
    if (format === "square") {
      setHeight(250);
      setWidth(250);
    }
  }, [format]);

  return (
    <Box className="ads">
      <Box className="ads-container">
        <Paper sx={{ display: { xl: "none", xs: "block" } }} className="ads-paper">
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
            <Skeleton variant="rectangular" width={width} height={height} className="ads-image" />
          )}
        </Paper>
        <Paper sx={{ display: { xl: "block", xs: "none" } }} className="ads-paper">
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
