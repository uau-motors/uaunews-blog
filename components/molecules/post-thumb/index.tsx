import React from "react";
import { Box, Skeleton } from "@mui/material";
import { PostCardDataI } from "@utility/interfaces";
import PostImage from "../PostImage";
import PostTitle from "../../molecules/PostTitle";
import PostDate from "../PostDate";
import PostViews from "../PostViews";
import Link from "next/link";
import ReviewMeta from "../PostReviewMeta";

interface Tag {
  slug: string;
  title: string;
}

interface PostThumbProps {
  post: PostCardDataI;
  delay?: number;
  reviews?: number;
  size?: string;
}

const PostThumb = ({ post, delay, size, reviews }: PostThumbProps) => {
  const url = `/${post.tags[0].slug}/${post.slug}`;
  const newDelay = (delay ?? 0) > 0 ? (delay ?? 0) + 1 : 1;

  return (
    <Box className={`animated fadeInDown delay-${newDelay}s`}>
      <Box className={`post post-thumb size-${size}`}>
        <Link href={url}>
          {post.feature_image && <PostImage imageUrl={post.feature_image} altText={post.title} zoom={false} />}
          {!post.feature_image && <Skeleton variant="rectangular" width={`100%`} height={155} />}
          <div className="post-content">
            <PostTitle title={post.title} />
            {reviews && <ReviewMeta score={reviews} place="Good Place" />}
            <div className="post-metas">
              <PostDate date={"2023-01-01"} />
              <PostViews views={7} />
            </div>
          </div>
        </Link>
      </Box>
    </Box>
  );
};

export default PostThumb;
