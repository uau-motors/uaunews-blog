import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Archive } from "@utility/interfaces";

interface ArchivePropsI {
  data: Archive[];
}

export default function ArchivePosts({ data }: ArchivePropsI) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data &&
        data.map((post, key) => (
          <ListItem
            disablePadding
            key={key}
            disableGutters
            secondaryAction={
              <IconButton aria-label="count" className="count">
                {post.count}
              </IconButton>
            }
          >
            <ListItemButton className="button">
              <ListItemIcon className="icon-container">
                <KeyboardDoubleArrowRightIcon />
              </ListItemIcon>

              <Link href={`${post.link}`} className="link">
                <ListItemText primary={`${post.month}`} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
}
