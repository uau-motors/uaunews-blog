import React from "react";
import Ads from "../../molecules/ads";
import { Box } from "@mui/material";
import SocialsNetworks from "../../molecules/socials";
const SidebarSocials = () => {
  return (
    <Box className={"sidebar"}>
      <Ads
        format={"square"}
        imageUrl={"https://securemove.in/wp-content/uploads/2022/08/Car-transport-cost.jpg"}
        altText="250x250"
      />
      <SocialsNetworks />
    </Box>
  );
};

export default SidebarSocials;
