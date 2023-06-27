import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CloudIcon from "@mui/icons-material/Cloud";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import settings from "@utility/settings";
import { useOverlay } from "@utility/contexts/provider-context";

const ToolbarHeader = () => {
  const { city, weather } = useOverlay();
  const { toolbarMenus } = settings;

  const date = format(new Date(), "PPPP", {
    locale: ptBR
  });

  return (
    <div className="toolbar">
      <Container maxWidth="lg">
        <Toolbar className="mui-toolbar">
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={5} md={4}>
              <nav className="toolbarLink">
                {toolbarMenus.map((item, key) => {
                  return (
                    <Link href={`/${item.pathname}`} key={key}>
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </Grid>
            <Grid item xs={7} md={8} className="gridSocials">
              <Box
                sx={{
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 1
                  }
                }}
                className="boxWeather"
              >
                <span>{date},</span>
                {city && (
                  <Link href={`/`} key={`sp`}>
                    {city},
                  </Link>
                )}
                <span>
                  {weather}°&nbsp;
                  <CloudIcon style={{ fontSize: "13px" }} />
                </span>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </div>
  );
};

export default ToolbarHeader;
