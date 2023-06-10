import React from "react";
import ProcessImage from "react-imgpro";
import Date from "../../atoms/date-component";
import { Box, Typography } from "@mui/material";

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
    featured?: string;
  };
  delay: number;
}

const PostThumb: React.FC<PostThumbProps> = ({ post, delay }) => {
  const url = `/${post.slug}`;
  const img = post.featured;

  return (
    <Box className="news-thumb">
      <Box className={`animated fadeInDown delay-${delay}s`}>
        <a href={url} title={post.title}>
          <Box className="thumb">
            <img src={img} alt={post.title} />
          </Box>
        </a>
        <Box className="content animated fadeIn">
          <Typography variant="subtitle2">
            <i className="fa fa-calendar-o" /> <Date dateString={post.date} locale={"ptBR"} />
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
