import React, { useContext, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from "@mui/icons-material";
import { ThemeContext } from "@utility/contexts/theme-context";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
  };

  return (
    <div className="toggle-theme">
      <Switch
        color="primary"
        checked={theme === "light"}
        onChange={handleToggle}
        icon={<DarkModeIcon />}
        checkedIcon={<LightModeIcon />}
      />
    </div>
  );
}

export default ThemeToggle;
