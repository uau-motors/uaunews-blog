import React from "react";
import { useOverlay } from "@utility/contexts/provider-context";
import { Button } from "@mui/material";

const DrawerClose: React.FC = () => {
  const { toggleDrawer } = useOverlay();

  const handleClose = () => {
    toggleDrawer();
    console.log("handleClose");
  };

  return (
    <Button onClick={handleClose} className="drawer-close">
      <i className="fa fa-times"></i>
    </Button>
  );
};

export default DrawerClose;
