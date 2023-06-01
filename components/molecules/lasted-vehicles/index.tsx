import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import VehicleItem from "../vehicle-item";
import { Box, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const LastedVehicles = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="Veiculos">
          <Tab
            label="Carro"
            {...a11yProps(0)}
            icon={<DirectionsCarIcon />}
            iconPosition="start"
            className="tab-button"
          />
          <Tab
            label="Moto"
            {...a11yProps(1)}
            icon={<TwoWheelerIcon />}
            iconPosition="start"
            className="tab-button"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <VehicleItem />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VehicleItem />
      </TabPanel>
    </Box>
  );
};

export default LastedVehicles;
