import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PostCardDataI } from "@utility/interfaces";
import PostImage from "./PostImage";
import PostTitle from "@molecules/PostTitle";
import PostDate from "./PostDate";
import PostViews from "./PostViews";
import Link from "next/link";
import PostTag from "@atoms/PostTag";
import PostExcerpt from "./PostExcerpt";
import ReviewMeta from "./PostReviewMeta";
import Play from "./PostIconPlay";

interface PostCardProps {
  post: PostCardDataI;
  tag?: boolean;
  excerpt?: boolean;
  delay?: number;
  orient?: string;
  size?: string;
  counter?: number;
  reviews?: number;
  bordered?: boolean;
  video?: boolean;
}

const getOrient = (orient: string | null = "down") => {
  if (orient === "down") {
    return {
      xsl: 12,
      xsr: 12
    };
  } else {
    return {
      xsl: 5,
      xsr: 7
    };
  }
};

const PostCard = ({ post, delay, tag, excerpt, orient, counter, bordered, size, reviews, video }: PostCardProps) => {
  const url = `/${post.tags[0].slug}/${post.slug}`;

  const xs = getOrient(orient);

  const handleClick = () => {
    console.log("O botão foi clicado!");
  };

  return (
    <Box className={`animated fadeInDown delay-${delay}s`}>
      <Box className={`post post-card size-${size}`}>
        <Link href={url}>
          <Grid container className={"post-item"} key={post.id} spacing={2}>
            {orient === "down" && (
              <Grid item xs={xs.xsl}>
                <PostImage imageUrl={post.feature_image} altText={post.title} zoom={false} />
                {tag && <PostTag label={post.tags[0].name} onClick={handleClick} />}
                {video && <Play />}
              </Grid>
            )}
            {orient === "left" && (
              <Grid item xs={xs.xsl}>
                <PostImage imageUrl={post.feature_image} altText={post.title} zoom={false} />
                {tag && <PostTag label={post.tags[0].name} onClick={handleClick} />}
                {video && <Play />}
              </Grid>
            )}
            <Grid item xs={xs.xsr}>
              <Box className={`post-content ${bordered ? `border-${orient}` : ""}`}>
                {counter && (
                  <Typography variant="h5" component={"span"} className="post-counter">
                    0{counter}
                  </Typography>
                )}
                <PostTitle title={post.title} onClick={handleClick} />
                {reviews && <ReviewMeta score={reviews} place="Good Place" />}
                {excerpt && <PostExcerpt excerpt={post.excerpt} />}
                <Box className="post-metas">
                  <PostDate date={post.created_at} />
                  <PostViews views={7} />
                </Box>
              </Box>
            </Grid>
            {orient === "right" && (
              <Grid item xs={xs.xsl}>
                <PostImage imageUrl={post.feature_image} altText={post.title} zoom={false} />
                {tag && <PostTag label={post.tags[0].name} onClick={handleClick} />}
                {video && <Play />}
              </Grid>
            )}
          </Grid>
        </Link>
      </Box>
    </Box>
  );
};

export default PostCard;
