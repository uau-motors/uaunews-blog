import React, { Fragment } from "react";
import { Box, Grid } from "@mui/material";

import TitleSection from "@components/molecules/TitleSection";
import { PostCardDataI } from "@utility/interfaces";
import PostThumb from "@molecules/post-thumb";
import PostCard from "@components/molecules/PostCard";

interface VehicleEvaluationProps {
  posts: PostCardDataI[];
  screen: string;
  width: number;
}

const VehicleEvaluation = ({ posts, screen, width }: VehicleEvaluationProps) => {
  const screenMedium = ["sm", "md"];
  const screenLarge = ["lg", "xl"];
  const screenMobile = ["xs"];

  return (
    <Fragment>
      <Box className={"posts"}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <TitleSection title={"Avaliações UauMotors"} />
            </Box>
          </Grid>
        </Grid>

        {screenMobile.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              <Grid item xs={12} className="post-featured">
                {posts && posts.length > 0 && <PostThumb post={posts[0]} size={screen} reviews={9.6} />}
              </Grid>
              {posts &&
                posts.length > 0 &&
                posts.map((post, key) => {
                  if (key > 0 && key < 5)
                    return (
                      <Grid item xs={12} className={`post-list post-xs`}>
                        <PostCard
                          orient="left"
                          post={post}
                          delay={key}
                          excerpt={false}
                          tag={false}
                          size={screen}
                          reviews={9.2}
                        />
                      </Grid>
                    );
                })}
            </Grid>
          </Box>
        )}

        {screenMedium.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              <Grid item xs={width > 479 && width <= 641 ? 12 : 6} className="post-featured">
                {posts && posts.length > 0 && <PostThumb post={posts[0]} size={screen} reviews={9.6} />}
              </Grid>
              <Grid item xs={width > 479 && width <= 641 ? 12 : 6}>
                <Grid container spacing={2} className={`post-list ${width > 479 && width < 641 ? "post-sm" : ""}`}>
                  {posts &&
                    posts.length > 0 &&
                    posts.map((post, key) => {
                      if (key > 0 && key < 3)
                        return (
                          <Grid item xs={12}>
                            <PostCard
                              orient="left"
                              post={post}
                              delay={key}
                              excerpt={false}
                              tag={false}
                              size={screen}
                              reviews={9.2}
                            />
                          </Grid>
                        );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}

        {screenLarge.includes(screen) && (
          <Box className={`visible-${screen}`}>
            <Grid container spacing={2}>
              {posts && posts.length > 0 && (
                <Grid item xs={4} className="post-featured">
                  <PostThumb post={posts[0]} size={screen} reviews={9.6} />
                </Grid>
              )}

              {posts &&
                posts.length > 1 &&
                posts.map((post, key) => {
                  if (key > 1 && key < 4)
                    return (
                      <Grid item xs={4} className="post-list" key={key}>
                        <PostCard
                          orient="down"
                          post={post}
                          delay={key}
                          excerpt={false}
                          tag={false}
                          size={screen}
                          reviews={9.2}
                        />
                      </Grid>
                    );
                })}
            </Grid>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default VehicleEvaluation;
