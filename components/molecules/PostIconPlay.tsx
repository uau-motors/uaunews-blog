import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { Box, IconButton } from "@mui/material";

const Play = () => {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };
  return (
    <Box className="box-play">
      <IconButton aria-label="play" onClick={handleClick} className="play">
        <PlayCircleFilledWhiteIcon className="on" />
        <PlayCircleOutlineIcon className="off" />
      </IconButton>
    </Box>
  );
};

export default Play;
