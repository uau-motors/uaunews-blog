import { Link } from "@mui/material";
import React, { useContext } from "react";
import Logo from "../logo";
import { ThemeContext } from "@utility/contexts/theme-context";

const DrawerTitle = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`drawer-title drawer-${theme}`}>
      <Logo mode={theme === "light" ? "dark" : "light"} />
    </div>
  );
};

export default DrawerTitle;
