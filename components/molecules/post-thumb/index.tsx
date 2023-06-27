import React from "react";
import Date from "../../atoms/date-component";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Tag {
  slug: string;
  title: string;
}

interface PostThumbProps {
  post: {
    tags: Tag;
    slug: string;
    title: string;
    date: string;
    featured: string;
  };
  delay: number;
}

const PostThumb: React.FC<PostThumbProps> = ({ post, delay }) => {
  const url = `/${post.slug}`;

  return (
    <Box className="news-thumb">
      <Box className={`animated fadeInDown delay-${delay}s`}>
        <a href={url} title={post.title}>
          <Box className="thumb">
            <Image src={post.featured} alt={post.title} width={1920} height={1080} />
          </Box>
        </a>
        <Box className="content animated fadeIn">
          <Typography variant="subtitle2">
            <i className="fa fa-calendar-o" /> <Date dateString={post.date} />
          </Typography>
          <a href={url} title={post.title}>
            <Typography variant="h6">{post.title}</Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default PostThumb;
