import TitleSection from "@molecules/title-section";
import { Box } from "@mui/material";
import React from "react";

const RelatedsPosts = () => {
  return (
    <Box className="relateds-posts">
      <TitleSection title="Relacionados" />
      <ul>
        <li>
          <a href="#">NASA Sets Coverage for Two Spacewalks Outside Space Station</a>
        </li>
        <li>
          <a href="#">NASA is Looking for 4 People to Live Inside 3D-Printed Mars Module</a>
        </li>
        <li>
          <a href="#">How Science Failed to Unlock The Mysteries of the Human Brain</a>
        </li>
        <li>
          <a href="#">Global Warming is Real: July 2021 Hottest Month Ever Recorded</a>
        </li>
        <li>
          <a href="#">The Difference Between Artificial Intelligence and Machine Learning</a>
        </li>
      </ul>
    </Box>
  );
};

export default RelatedsPosts;
