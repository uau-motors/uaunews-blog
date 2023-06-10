import { Box, Typography } from "@mui/material";
import TitleSection from "../../molecules/title-section";
import BrandsIcons from "../../molecules/brands-icons";
import { ThemeContext } from "../../../utility/contexts/theme-context";
import { useContext } from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function SidebarBrands() {
  const { theme } = useContext(ThemeContext);
  return (
    <Box className={"sidebar"}>
      <Box className={`brands-container brands-${theme}`}>
        <TitleSection title={"Marcas"} />
        <Box className="brands-icons">
          <BrandsIcons />
        </Box>
        <Link href="#" className="readmore">
          <Typography variant="body2">Veja mais</Typography>
          <ArrowRightAltIcon />
        </Link>
      </Box>
    </Box>
  );
}

export default SidebarBrands;
