import React from "react";
import ProcessImage from "react-imgpro";
import Skeleton from "react-loading-skeleton";
import Date from "../../atoms/date-component";
import { Box, Typography } from "@mui/material";

interface FeaturedPostImageProps {
  size: string;
  post: {
    images: string;
    tags: string[];
    featured: string;
    slug: string;
    title: string;
    date: string;
  };
  cls?: string;
  rest?: boolean;
}

const FeaturedPostImage: React.FC<FeaturedPostImageProps> = ({ size, post, cls = "", rest = false }) => {
  return (
    <Box className={`featured animated fadeIn ${cls}`}>
      <img src={`${post.featured}`} alt={post.title} width={size.width} height={size.height} />
      <Box className="thumb-content">
        <Typography variant="body1">
          <a className="post-cat tie-cat-1" href={`/${post.tags.slug}`}>
            {post.tags.title}
          </a>
        </Typography>
        <Typography variant="h3">
          <a href={`/${post.slug}`}>{post.title}</a>
        </Typography>
        <ul className="meta">
          <li>
            <i className="fa fa-calendar-o" /> <Date dateString={post.date} locale={"ptBR"} />
          </li>
        </ul>
      </Box>
      <div className="thumb-overlay" />
    </Box>
  );
};

export default FeaturedPostImage;
