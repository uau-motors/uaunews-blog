import { Skeleton, Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import Image from "next/image";

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
  position = "down",
  legend,
  credit = "Divulgação",
  zoom = true
}) => {
  const [full, setFull] = useState(false);

  useEffect(() => {
    setFull(false);
  }, []);

  useEffect(() => {
    if (zoom === true) {
      setFull(false);
    }
  }, [full, zoom]);

  return (
    <div className={`post-image size-${format} position-${position} image-${full === true ? "full" : ""}`}>
      {imageUrl &&
      imageUrl !=
        "https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/samples%2Fimage-1.jpeg?alt=media" ? (
        <>
          {zoom && (
            <figure onClick={() => setFull(full ? false : true)}>
              <Image decoding="async" loading="lazy" src={imageUrl} alt={altText} width={1920} height={1080} />
            </figure>
          )}
          {!zoom && (
            <figure>
              <Image decoding="async" loading="lazy" src={imageUrl} alt={altText} width={1920} height={1080} />
            </figure>
          )}
          {format === "large" && zoom === true && (
            <Button onClick={() => setFull(full ? false : true)} className="close">
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
