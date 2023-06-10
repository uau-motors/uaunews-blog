import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FeaturedPostImage from "../featured-post-image";
import PostThumb from "../post-thumb";

interface Category {
  slug: string;
  title: string;
}

interface Post {
  featured: string;
  title: string;
  date: Date;
  categories: Category;
}

interface Posts {
  news: Post[];
  releases: Post[];
  curiosities: Post[];
  tips: Post[];
  histories: Post[];
}

interface TabContentProps {
  posts: Posts;
  active: number;
  tag: string;
}

const TabContent: FC<TabContentProps> = ({ posts }) => {
  console.log("TAB CONTENT ==> ", [posts]);
  const featured = posts[0];

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        className={"tab-pane fade show active"}
        id={`pills-${featured.tags.slug}`}
        role="tabpanel"
        aria-labelledby={`pills-${featured.tags.slug}-tab`}
      >
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <FeaturedPostImage
            post={featured}
            size={{ width: 360, height: 480 }}
            rest={false}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          {posts &&
            posts.map((post, key) => {
              if (key > 0) {
                return (
                  <PostThumb
                    delay={key + 1}
                    post={post}
                    size={{ width: 160, height: 120 }}
                    key={key}
                  />
                );
              }
            })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TabContent;
