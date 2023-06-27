import React from "react";
import Date from "../../atoms/date-component";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { TagI } from "@utility/interfaces";

interface FeaturedPostImageProps {
  size: {
    width: number;
    height: number;
  };
  post: {
    images: string;
    tags: TagI[];
    featured: string;
    slug: string;
    title: string;
    date: string;
  };
  cls?: string;
  rest?: boolean;
}

const FeaturedPostImage: React.FC<FeaturedPostImageProps> = ({ size, post, cls = "", rest = false }) => {
  if (!size) {
    size = {
      width: 1920,
      height: 1024
    };
  }
  return (
    <Box className={`featured animated fadeIn ${cls}`}>
      <Image src={`${post.featured}`} alt={post.title} width={size.width} height={size.height} />
      <Box className="thumb-content">
        <Typography variant="body1">
          <a className="post-cat tie-cat-1" href={`/${post.tags[0].slug}`}>
            {post.tags[0].name}
          </a>
        </Typography>
        <Typography variant="h3">
          <a href={`/${post.slug}`}>{post.title}</a>
        </Typography>
        <ul className="meta">
          <li>
            <i className="fa fa-calendar-o" /> <Date dateString={post.date} />
          </li>
        </ul>
      </Box>
      <div className="thumb-overlay" />
    </Box>
  );
};

export default FeaturedPostImage;
