import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { MenusCategories } from "../../../utility/constants";
const DrawerCategories = () => {
  return (
    <Box className="drawer-categories">
      <Typography variant="h3">Categorias</Typography>
      <List>
        {MenusCategories.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon>
              <KeyboardDoubleArrowRightIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={item.title} className="title" />
            <Divider />
            <ListItemText primary={"12k"} style={{ textAlign: "right" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerCategories;
