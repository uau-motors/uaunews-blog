import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Logo from "../logo";
import MiddleActions from "../middle-actions";

export default function UauMiddleHeader() {
  return (
    <div className="middleHeader">
      <Container maxWidth="lg">
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={3} sm={3} md={3}>
            <Logo mode={"light"} />
          </Grid>
          <Grid xs={5} sm={4} md={3}>
            <div className="logoUM1">
              <span>UM1</span>
              <img src={`/assets/images/svg/logo-um1.svg`} alt="logo-um1" />
              <h2>Canal de conteúdo da UauMotors</h2>
            </div>
          </Grid>
          <Grid xs={4} sm={5} md={6}>
            <MiddleActions />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
