import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// type SidebarMenuProps = {
//   toggleDrawer: () => void;
// };

const ItemsMenu = () => {
  const handleClick = () => {
    console.log("handleClick");
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Mail" />
      </ListItem>
    </List>
  );
};

export default ItemsMenu;
