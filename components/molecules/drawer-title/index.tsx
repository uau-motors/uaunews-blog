import React, { useContext, FunctionComponent } from "react";
import Logo from "../logo";
import { ThemeContext } from "@utility/contexts/ThemeContext";
interface DrawerTitleProps {
  onClose?: () => void;
}

const DrawerTitle: FunctionComponent<DrawerTitleProps> = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`drawer-title drawer-${theme}`} onClick={onClose}>
      <Logo mode={theme === "light" ? "dark" : "light"} />
    </div>
  );
};

export default DrawerTitle;
