import React from "react";
import IframePlayer from "player-iframe-video";
import "player-iframe-video/dist/index.css";
import { Box } from "@mui/material";

const PostVideo = () => {
  const iFrame = (
    <iframe
      width="840"
      height="480"
      src="https://PostIconPlayer.vimeo.com/video/107747073?h=aee925f4ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&color=cc6101"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="test player iframe vimeo"
    />
  );
  return (
    <Box className="post-video">
      <IframePlayer id={"iframe-vimeo-player-test"} iFrame={iFrame} />
    </Box>
  );
};

export default React.memo(PostVideo);
