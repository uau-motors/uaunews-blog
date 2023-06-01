import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function ArchivePosts({ data }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data &&
        data.map((value, key) => (
          <ListItem
            disablePadding
            key={key}
            disableGutters
            secondaryAction={
              <IconButton aria-label="count" className="count">
                {value.count}
              </IconButton>
            }
          >
            <ListItemButton className="button">
              <ListItemIcon className="icon-container">
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>

              <Link href={`${value.link}`} className="link">
                <ListItemText primary={`${value.month}`} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
}
