import React from "react";
import Ads from "../../molecules/ads";
import { Box } from "@mui/material";
import SocialsNetworks from "../../molecules/socials";
const SidebarSocials = () => {
  return (
    <Box className={"sidebar"}>
      <Ads />
      <SocialsNetworks />
    </Box>
  );
};

export default SidebarSocials;
