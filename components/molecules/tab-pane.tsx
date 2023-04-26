import React from "react";
import FeaturedPostImage from "./featured-post-image";
import PostThumb from "./post-thumb";
import Grid from "@mui/material/Grid";

interface TabPaneProps {
  posts: {
    posts: any[];
  };
  value: number;
  tag: string;
  tagActive: string;
}

const TabPane: React.FC<TabPaneProps> = ({ posts, value, tagActive }) => {
  const [tag, setTag] = React.useState<string>("news");

  React.useEffect(() => {
    switch (value) {
      case 0:
        setTag("news");
        break;
      case 1:
        setTag("releases");
        break;
      case 2:
        setTag("curiosities");
        break;
      case 3:
        setTag("tips");
        break;
      case 4:
        setTag("histories");
        break;
      default:
        setTag("news");
        break;
    }
  }, [value]);

  const featured = posts[0];

  console.log("TAB PANEL ==> ", [posts, value, tag, tagActive]);

  return (
    <Grid
      container
      className={
        tagActive === tag ? "tab-pane fade show active" : "tab-pane fade"
      }
      id={`pills-${tag}`}
      role="tabpanel"
      aria-labelledby={`pills-${tag}-tab`}
    >
      <h3>{value}</h3>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
        <FeaturedPostImage
          post={featured}
          size={{ width: 360, height: 480 }}
          rest={false}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
        {posts.posts &&
          posts.posts.map((post, key) => {
            if (key > 0) {
              return (
                <PostThumb
                  delay={key + 1}
                  post={post.node}
                  size={{ width: 160, height: 120 }}
                  key={key}
                />
              );
            }
          })}
      </Grid>
    </Grid>
  );
};

export default TabPane;
