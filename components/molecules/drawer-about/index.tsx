import React from "react";
import { Box, Typography } from "@mui/material";

const DrawerAbout = () => {
  return (
    <Box className="drawer-about">
      <Typography variant="h3">Quem somos</Typography>
      <Typography variant="body1">
        A UauMotors é uma empresa jovem, que nasceu para trazer para seus
        usuários um vasto conteúdo no mundo dos veículos.
      </Typography>
    </Box>
  );
};

export default DrawerAbout;
