import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { ToolbarProps } from "../../utility/types";
import CloudIcon from "@mui/icons-material/Cloud";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const UauToolbar = ({ menus }: ToolbarProps) => {
  const [city, setCity] = useState<string>();
  const [weather, setWeather] = useState<number>();

  function getBrowserCity(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position: GeolocationPosition) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt-br`;
            try {
              const response = await fetch(url);
              const data = await response.json();
              if (data.countryCode === "BR") {
                resolve(data.city);
                setCity(data.city);
              } else {
                reject(new Error("A localização não está no Brasil."));
              }
            } catch (error) {
              reject(
                new Error(`Erro ao obter a localização: ${error.message}`)
              );
            }
          },
          (error: GeolocationPositionError) => {
            reject(new Error(`Erro ao obter a localização: ${error.message}`));
          }
        );
      } else {
        reject(new Error("Geolocalização não suportada neste navegador."));
      }
    });
  }

  async function getWeather(city: string): Promise<any> {
    const apiKey = "51e38bb9aa5c0f0180c54903abcc2d84";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const weatherData = Math.round(data.main.temp);
      setWeather(weatherData);
      return weatherData;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to retrieve weather data");
    }
  }

  // useEffect(() => {
  //   getBrowserCity();
  // }, []);

  // useEffect(() => {
  //   if (city) getWeather(city);
  // }, [city]);

  const date = format(new Date(), "PPPP", {
    locale: ptBR
  });
  return (
    <div className="toolbar">
      <Container maxWidth="lg">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={5} md={4}>
              <nav className="toolbarLink">
                {menus.map((item, key) => {
                  return (
                    <Link href={`/${item.pathname}`} key={key}>
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </Grid>
            <Grid item xs={7} md={8} className="gridSocials">
              {/* <Box
                sx={{
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 1,
                  },
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
              </Box> */}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </div>
  );
};

export default UauToolbar;
