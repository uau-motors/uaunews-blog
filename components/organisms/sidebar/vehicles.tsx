import { Box, Typography } from "@mui/material";
import TitleSection from "../../molecules/TitleSection";
import LastedVehicles from "../../molecules/lasted-vehicles";
import { ThemeContext } from "../../../utility/contexts/ThemeContext";
import { useContext } from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function SidebarVehicles() {
  const { theme } = useContext(ThemeContext);
  return (
    <Box className={"sidebar"}>
      <Box className={`vehicles-container archive-${theme}`}>
        <TitleSection title={"Recentes veículos"} />
        <Box className="vehicles">
          <LastedVehicles />
        </Box>
      </Box>
    </Box>
  );
}

export default SidebarVehicles;
