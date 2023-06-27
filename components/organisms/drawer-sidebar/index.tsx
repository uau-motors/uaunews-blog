import React, { useEffect } from "react";
import { Drawer } from "@mui/material";
import { useOverlay } from "@utility/contexts/provider-context";
import DrawerTitle from "@molecules/drawer-title";
import DrawerCategories from "@molecules/drawer-categories";
import DrawerAbout from "@molecules/drawer-about";
import DrawerClose from "@atoms/drawer-close";

export default function DrawerSidebar() {
  const { isOpenDrawer, toggleDrawer } = useOverlay();

  const handleClose = () => {
    toggleDrawer();
  };

  return (
    <Drawer anchor="left" open={isOpenDrawer} onClose={handleClose} style={{ width: 320 }}>
      <div className="drawer-sidebar">
        <DrawerClose />
        <DrawerTitle />
        <DrawerAbout />
        <DrawerCategories />
      </div>
    </Drawer>
  );
}
