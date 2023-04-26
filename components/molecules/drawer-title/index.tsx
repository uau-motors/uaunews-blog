import { Link } from "@mui/material";
import React, { useContext } from "react";
import Logo from "../../atoms/logo";
import { ThemeContext } from "../../../utility/contexts/theme-context";

const DrawerTitle = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`drawer-title drawer-${theme}`}>
      <Link href="#">
        <Logo mode={theme === "light" ? "dark" : "light"} />
      </Link>
    </div>
  );
};

export default DrawerTitle;
