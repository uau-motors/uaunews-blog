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
          "https://newzin.themescamp.com/politics/wp-content/uploads/sites/7/2022/08/banner12.png"
        }
        altText="250x250"
      />
      <SocialsNetworks />
    </Box>
  );
};

export default SidebarSocials;
