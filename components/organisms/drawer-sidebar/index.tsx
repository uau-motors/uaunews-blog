import React, { useEffect } from "react";
import { Drawer } from "@mui/material";
import { useDrawer } from "../../../utility/contexts/drawer-context";
import DrawerTitle from "../../molecules/drawer-title";
import DrawerCategories from "../../molecules/drawer-categories";
import DrawerAbout from "../../molecules/drawer-about";
import DrawerClose from "../../atoms/drawer-close";

export default function DrawerSidebar() {
  const { isOpen, toggleDrawer } = useDrawer();

  const handleClose = () => {
    toggleDrawer();
  };

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={handleClose}
      style={{ width: 320 }}
    >
      <div className="drawer-sidebar">
        <DrawerClose />
        <DrawerTitle />
        <DrawerAbout />
        <DrawerCategories />
      </div>
    </Drawer>
  );
}
