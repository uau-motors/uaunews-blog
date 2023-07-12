import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

import { Box, Divider, Grid, Typography } from "@mui/material";
import VehicleThumb from "../vehicle-thumb";
import VehiclePrice from "../vehicle-price";
import VehicleTitle from "../../atoms/post-title";

const VehicleItem = () => {
  return (
    <div>
      <Box className="vehicle-card">
        <VehicleThumb
          imageUrl="https://motors.stylemixthemes.com/classified-four/wp-content/uploads/sites/13/2021/04/01-6-280x165.jpg"
          altText="car"
        />
        <VehiclePrice label="R$ 3.989.658,00" />
      </Box>
      <VehicleTitle title="BMW X7 M50D Sport 2021" />
      <Box className="vehicle-meta">
        <Grid container>
          <Grid item xs={6}>
            <Box className="meta-item border-bottom">
              <LocalGasStationIcon />
              <Typography variant="h6">Combustível</Typography>
              <Typography variant="h4">Gasolina</Typography>
              <Divider orientation="vertical" flexItem className="divider" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="meta-item border-bottom">
              <LocalGasStationIcon />
              <Typography variant="h6">Combustível</Typography>
              <Typography variant="h4">Gasolina</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="meta-item no-border">
              <LocalGasStationIcon />
              <Typography variant="h6">Combustível</Typography>
              <Typography variant="h4">Gasolina</Typography>
              <Divider orientation="vertical" flexItem className="divider" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="meta-item no-border">
              <LocalGasStationIcon />
              <Typography variant="h6">Combustível</Typography>
              <Typography variant="h4">Gasolina</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default VehicleItem;
