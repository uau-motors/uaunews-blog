import { Skeleton, Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

interface PostImageProps {
  imageUrl: string;
  altText: string;
  legend?: string;
  format?: string;
  position?: string;
  credit?: string;
  zoom?: boolean;
}

const PostImage: React.FC<PostImageProps> = ({
  imageUrl,
  altText,
  format = "large",
  position = "left",
  legend,
  credit = "Divulgação",
  zoom = true
}) => {
  const [full, setFull] = useState(false);

  useEffect(() => {
    setFull(false);
  }, []);

  useEffect(() => {
    if (zoom) {
      setFull(false);
    }
  }, [full]);

  return (
    <div
      className={`post-image size-${format} position-${position} image-${
        full === true ? "full" : ""
      }`}
    >
      {imageUrl && imageUrl != "/assets/images/samples/cars/image-0.jpeg" ? (
        <>
          {zoom && (
            <figure onClick={() => setFull(full ? false : true)}>
              <img
                decoding="async"
                loading="lazy"
                src={imageUrl}
                alt={altText}
              />
            </figure>
          )}
          {!zoom && (
            <figure>
              <img
                decoding="async"
                loading="lazy"
                src={imageUrl}
                alt={altText}
              />
            </figure>
          )}
          {format === "large" && zoom === true && (
            <Button
              onClick={() => setFull(full ? false : true)}
              className="close"
            >
              {full && <CloseIcon />}
              {!full && <OpenInFullIcon />}
            </Button>
          )}
          <Box className="image-legend">
            {legend && (
              <Typography className="legend" variant="h5">
                {legend}
              </Typography>
            )}
            <small>
              <strong>Crédito:</strong> {credit}
            </small>
          </Box>
        </>
      ) : (
        <Skeleton variant="rectangular" width={`100%`} height={155} />
      )}
    </div>
  );
};

export default PostImage;
