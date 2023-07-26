import React from "react";
import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { MenusCategories } from "../../../utility/Constants";
import { useRouter } from "next/router";

interface CategoryItem {
  title: string;
  pathname: string;
}

interface DrawerCategoriesProps {
  onClose: () => void;
}

const DrawerCategories: React.FC<DrawerCategoriesProps> = ({ onClose }) => {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    onClose();
    router.push(pathname);
  };

  return (
    <Box className="drawer-categories">
      <Typography variant="h3">Categorias</Typography>
      <List>
        {MenusCategories.map((item: CategoryItem, key: number) => (
          <ListItemButton key={key} onClick={() => handleNavigation(`/${item.pathname}`)} className="button">
            <ListItemIcon>
              <KeyboardDoubleArrowRightIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={item.title} className="title" />
            <Divider />
            <ListItemText primary={"12k"} style={{ textAlign: "right" }} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default DrawerCategories;
