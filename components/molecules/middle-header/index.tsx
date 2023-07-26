import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Logo from "../logo";
import MiddleActions from "../middle-actions";
import ThemeToggle from "../theme-toggle";
import Image from "next/image";

export default function UauMiddleHeader() {
  return (
    <div className="middleHeader">
      <Container maxWidth="lg">
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={2} sm={2} md={3} className="grid-logo">
            <Logo mode={"light"} />
          </Grid>
          <Grid xs={9} sm={3} md={3}>
            <div className="logoUM1">
              <span>UM1</span>
              <Image src={`/assets/images/svg/logo-um1.svg`} alt="logo-um1" width={40} height={40} />
              <h2>Seu hub de conteúdo automotivo</h2>
            </div>
          </Grid>
          <Grid xs={5} sm={7} md={6} className="header-actions">
            <MiddleActions />
            <Box className="toogle-xs">
              <ThemeToggle />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
