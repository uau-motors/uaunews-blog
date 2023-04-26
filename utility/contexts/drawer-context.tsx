import React, { createContext, useContext, useState } from "react";
import { DrawerProps } from "@material-ui/core/Drawer";

type DrawerContextType = {
  isOpen: boolean;
  toggleDrawer: () => void;
  drawerProps: DrawerProps;
};

const DrawerContext = createContext<DrawerContextType>({
  isOpen: false,
  toggleDrawer: () => {},
  drawerProps: {},
});

export const useDrawer = () => useContext(DrawerContext);

type DrawerProviderProps = {
  children: React.ReactNode;
};

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerProps, setDrawerProps] = useState<DrawerProps>({});

  const toggleDrawer = (props?: DrawerProps) => {
    if (props) setDrawerProps(props);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer, drawerProps }}>
      {children}
    </DrawerContext.Provider>
  );
};
