import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import styles from "../../styles/Footer.module.css";
import Logo from "../atoms/logo";
import { loadCSS } from "fg-loadcss";

import Icon from "@mui/material/Icon";
import Date from "../atoms/date";

export const SocialNetworks = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/uaumotors",
    icon: "fab fa-facebook",
  },
  {
    title: "LinkedIn",
    url: "https://instagram.com/uau.motors",
    icon: "fab fa-instagram",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/uaumotors/",
    icon: "fab fa-linkedin",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/uaumotors",
    icon: "fab fa-twitter",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCp_56lUt24Nc_sYt3NP1mzw/",
    icon: "fab fa-youtube",
  },
  {
    title: "RssFeed",
    url: "",
    icon: "fas fa-rss",
  },
];

export const UauMobile = [
  {
    title: "Mobile",
    url: "#",
    icon: <Icon baseClassName="fas" className="fa-mobile fa-2x" />,
  },
  {
    title: "Android",
    url: "#",
    icon: <Icon baseClassName="fab" className="fa-android fa-2x" />,
  },
  {
    title: "Windows",
    url: "#",
    icon: <Icon baseClassName="fab" className="fa-windows fa-2x" />,
  },
  {
    title: "Apple",
    url: "#",
    icon: <Icon baseClassName="fab" className="fa-apple fa-2x" />,
  },
];

export const UauTags = [
  {
    title: "Mobile",
    pathname: "#",
  },
  {
    title: "Android",
    pathname: "#",
  },
  {
    title: "Windows",
    pathname: "#",
  },
  {
    title: "Apple",
    pathname: "#",
  },
];

interface NewsItem {
  title: string;
  date: string;
}

const UauRecents: NewsItem[] = [
  {
    title: "Novo carro elétrico da Tesla é lançado",
    date: "2022-03-24",
  },
  {
    title: "Google anuncia nova atualização de algoritmo de busca",
    date: "2022-03-22",
  },
  {
    title: "Vendas de carros no Brasil registram alta no primeiro trimestre",
    date: "2022-03-18",
  },
  {
    title: "Apple lança novo iPad com tela dobrável",
    date: "2022-03-15",
  },
];

interface VehiclePhoto {
  src: string;
  alt: string;
}

const vehiclePhotos: VehiclePhoto[] = [
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+1",
    alt: "Carro 1",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+2",
    alt: "Carro 2",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+3",
    alt: "Carro 3",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+4",
    alt: "Carro 4",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+5",
    alt: "Carro 5",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+6",
    alt: "Carro 6",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+7",
    alt: "Carro 7",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+8",
    alt: "Carro 8",
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+9",
    alt: "Carro 9",
  },
];

export const UauFooter = () => {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  return (
    <footer className={`${styles.footer} footer`}>
      <Container>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  ml: 1,
                },
              }}
              className={styles.footerWidget}
            >
              <Logo mode="ligth" />
              <Typography>
                A UauMotors é uma empresa jovem, que nasceu para trazer para
                seus usuários um vasto conteúdo no mundo dos veículos.
              </Typography>
              <span className={styles.mobileTile}>
                <h4>UauMotors Mobile</h4>
              </span>
              {UauMobile.map((item, key) => {
                return (
                  <IconButton
                    type="button"
                    sx={{ p: "5px" }}
                    aria-label={item.title.toLowerCase()}
                    key={key}
                    style={{ width: "40px", color: "#FFF" }}
                    className={styles.mobileIcons}
                  >
                    {item.icon}
                  </IconButton>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={styles.footerWidget}>
              <div className={styles.footerTitle}>
                <h2>Tags</h2>
              </div>
              <div className={styles.tagcloud}>
                {UauTags.map((tag, key) => {
                  if (key < 12) {
                    return (
                      <Link
                        href={`/tag/${tag.pathname}`}
                        className="tag-cloud-link"
                        key={key}
                      >
                        {tag.title}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={styles.footerWidget}>
              <div className={styles.footerTitle}>
                <h2>Recentes</h2>
              </div>
              <div className={styles.timelineNews}>
                <ul>
                  {UauRecents.map((post, key) => {
                    return (
                      <li key={key}>
                        <span>
                          <small>
                            <i className={"fa fa-calendar"} />
                            <Date dateString={post.date} locale={"ptBR"} />
                          </small>
                        </span>
                        <h3>{post.title}</h3>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className={styles.footerWidget}>
              <div className={styles.footerTitle}>
                <h2>Instagram</h2>
              </div>
              <div className={styles.thumbnails}>
                {vehiclePhotos.map((img, key) => (
                  <div key={key}>
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <section className={styles.bottomFooter}>
        <Container>
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={12} sm={8} md={7}>
              <Typography>
                © 2023 UauMotors. Todos os direitos reservados.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={5}>
              <ul className={styles.socials}>
                {SocialNetworks.map((item, key) => {
                  return (
                    <li key={key}>
                      <a href={item.url} target="_blank">
                        <i className={`${item.icon}`} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Grid>
        </Container>
      </section>
    </footer>
  );
};

export default UauFooter;
