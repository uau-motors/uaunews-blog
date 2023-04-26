import React from "react";
import { useDrawer } from "../../../utility/contexts/drawer-context";
import { Button } from "@mui/material";

export const DrawerClose = () => {
  const { toggleDrawer } = useDrawer();

  const handleClose = () => {
    toggleDrawer();
  };
  return (
    <Button onClick={handleClose} className="drawer-close">
      <i className="fa fa-times"></i>
    </Button>
  );
};

export default DrawerClose;
