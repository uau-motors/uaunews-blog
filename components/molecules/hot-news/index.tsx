import React, { useEffect, useState, useContext } from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { ThemeContext } from "@utility/contexts/theme-context";
import Link from "next/link";

const hotNews = [
  {
    title: "Tesla anuncia novo modelo elétrico com preço acessível",
    link: "https://exemplo.com/tesla-anuncia-novo-modelo-eletrico-com-preco-acessivel"
  },
  {
    title: "Ford lança nova linha de picapes para competir com concorrentes",
    link: "https://exemplo.com/ford-lanca-nova-linha-de-picapes-para-competir-com-concorrentes"
  },
  {
    title: "Toyota anuncia recall de veículos com problema no sistema de freios",
    link: "https://exemplo.com/toyota-anuncia-recall-de-veiculos-com-problema-no-sistema-de-freios"
  },
  {
    title: "Volkswagen revela conceito de carro autônomo para o futuro",
    link: "https://exemplo.com/volkswagen-revela-conceito-de-carro-autonomo-para-o-futuro"
  },
  {
    title: "General Motors fecha fábrica nos EUA e corta milhares de empregos",
    link: "https://exemplo.com/general-motors-fecha-fabrica-nos-eua-e-corta-milhares-de-empregos"
  }
];

const HotNews = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = hotNews.length;
  const { theme } = useContext(ThemeContext);

  const changeHotNews = () => {
    let i = 0;
    const intervalId = setInterval(() => {
      setActiveStep(i);
      i++;
      if (i > maxSteps) {
        setActiveStep(0);
        clearInterval(intervalId);
      }
    }, 5000);
  };

  //  useEffect(() => {
  //    changeHotNews
  //  }, []);

  // useEffect(() => {
  //   if (activeStep === 0) {
  //     changeHotNews
  //   }
  // }, [activeStep]);

  return (
    <section className={`hot-news hot-news-${theme}`}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box className="hot-box">
              <LocalFireDepartmentIcon />
              <Typography variant="body1" className="hot-title">
                Hot News
              </Typography>
            </Box>
            <Box>
              <Paper square elevation={0} className="hot-slider">
                <Link href={hotNews[activeStep].link}>{hotNews[activeStep].title}</Link>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={false} className="hot-links">
            <Box className="hot-links-internal">
              <Typography variant="body1" className="hot-links-title">
                Hot Links:
              </Typography>
              <Link href="#">Destaques</Link>
              <Link href="#">Mais lidos</Link>
              <Link href="#">Hot News</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HotNews;
