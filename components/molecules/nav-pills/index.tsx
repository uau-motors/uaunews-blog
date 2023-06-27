import React, { FC } from "react";
import { Tabs, Tab, Box } from "@mui/material";

interface NavPillsProps {
  items: { title: string; url: string }[];
  active: number;
  cls: string;
  id: string;
  setActive: (url: number) => void;
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
};

const NavPills: FC<NavPillsProps> = ({ items, active, setActive }) => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setActive(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={active} onChange={handleChange} aria-label="basic tabs example">
          {items.map((tab, key) => (
            <Tab label={tab.title} {...a11yProps(key)} key={key} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default NavPills;
