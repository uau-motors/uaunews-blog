import React from "react";
import Ads from "../../molecules/ads";
import { Box } from "@mui/material";
import SocialsNetworks from "../../molecules/socials";
const SidebarSocials = () => {
  return (
    <Box className={"sidebar"}>
      <Ads
        format={"square"}
        imageUrl={
          "https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/ads%2Fads-250-250.png?alt=media"
        }
        altText="250x250"
      />
      <SocialsNetworks />
    </Box>
  );
};

export default SidebarSocials;
