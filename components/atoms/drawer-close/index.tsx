import React from "react";
import { useOverlay } from "@utility/contexts/ProviderContext";
import { Button } from "@mui/material";

const DrawerClose: React.FC = () => {
  const { toggleDrawer } = useOverlay();

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
