import { Box, Skeleton, Tooltip } from "@mui/material";
import React from "react";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import Image from "next/image";

interface VehicleThumbProps {
  imageUrl: string;
  altText: string;
  onClick?: () => void;
}

const VehicleThumb: React.FC<VehicleThumbProps> = ({ imageUrl, altText, onClick }) => {
  return (
    <div className="vehicle-card-thumb">
      {imageUrl && imageUrl != "/assets/images/samples/cars/image-0.jpeg" ? (
        <Image src={imageUrl} alt={altText} onClick={onClick} width={1920} height={1080} />
      ) : (
        <Skeleton variant="rectangular" width={`100%`} height={155} onClick={onClick} />
      )}
      <Box className="vehicle-media">
        <Tooltip title="Vídeo" placement="top">
          <SlideshowIcon />
        </Tooltip>
        <Tooltip title="Fotos" placement="top">
          <PhotoCameraBackIcon />
        </Tooltip>
      </Box>
    </div>
  );
};

export default VehicleThumb;
