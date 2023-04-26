import { Skeleton } from "@mui/material";
import React from "react";

interface PostThumbProps {
  imageUrl: string;
  altText: string;
  onClick?: () => void;
}

const PostThumb: React.FC<PostThumbProps> = ({
  imageUrl,
  altText,
  onClick,
}) => {
  return (
    <div className="post-card-thumb">
      {imageUrl && imageUrl != "/assets/images/samples/cars/image-0.jpeg" ? (
        <img src={imageUrl} alt={altText} onClick={onClick} />
      ) : (
        <Skeleton
          variant="rectangular"
          width={`100%`}
          height={155}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default PostThumb;
