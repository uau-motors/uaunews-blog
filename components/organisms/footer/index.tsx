import React, { useEffect } from "react";
import { Container, Grid, Box, Typography, Link } from "@mui/material";

import Logo from "@molecules/logo";
import { loadCSS } from "fg-loadcss";

import Icon from "@mui/material/Icon";
import Date from "@components/atoms/date-component";
import SignInModal from "@molecules/modal/sign-in";
import Image from "next/image";

export const SocialNetworks = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/uaumotors",
    icon: "fab fa-facebook"
  },
  {
    title: "LinkedIn",
    url: "https://instagram.com/uau.motors",
    icon: "fab fa-instagram"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/uaumotors/",
    icon: "fab fa-linkedin"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/uaumotors",
    icon: "fab fa-twitter"
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCp_56lUt24Nc_sYt3NP1mzw/",
    icon: "fab fa-youtube"
  },
  {
    title: "RssFeed",
    url: "",
    icon: "fas fa-rss"
  }
];

export const UauMobile = [
  {
    title: "Mobile",
    url: "#",
    icon: <Icon baseClassName="fas" className="fa-mobile fa-2x" />
  },
  {
    title: "Android",
    url: "#",
    icon: <Icon baseClassName="fab" className="fa-android fa-2x" />
  },
  {
    title: "Windows",
    url: "#",
    icon: <Icon baseClassName="fab" className="fa-windows fa-2x" />
  },
  {
    title: "Apple",
    url: "#",
    icon: <Icon baseClassName="fab" className="fa-apple fa-2x" />
  }
];

export const UauTags = [
  {
    title: "Mobile",
    pathname: "#"
  },
  {
    title: "Android",
    pathname: "#"
  },
  {
    title: "Windows",
    pathname: "#"
  },
  {
    title: "Apple",
    pathname: "#"
  }
];

interface NewsItem {
  title: string;
  date: string;
}

const UauRecents: NewsItem[] = [
  {
    title: "Novo carro elétrico da Tesla é lançado",
    date: "2022-03-24"
  },
  {
    title: "Google anuncia nova atualização de algoritmo de busca",
    date: "2022-03-22"
  },
  {
    title: "Vendas de carros no Brasil registram alta no primeiro trimestre",
    date: "2022-03-18"
  },
  {
    title: "Apple lança novo iPad com tela dobrável",
    date: "2022-03-15"
  }
];

interface VehiclePhoto {
  src: string;
  alt: string;
}

const vehiclePhotos: VehiclePhoto[] = [
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+1",
    alt: "Carro 1"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+2",
    alt: "Carro 2"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+3",
    alt: "Carro 3"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+4",
    alt: "Carro 4"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+5",
    alt: "Carro 5"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+6",
    alt: "Carro 6"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+7",
    alt: "Carro 7"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+8",
    alt: "Carro 8"
  },
  {
    src: "https://via.placeholder.com/320x320.png?text=Car+9",
    alt: "Carro 9"
  }
];

export const Footer = () => {
  return (
    <footer id="footer">
      <Container>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  ml: 1
                }
              }}
              className="footerWidget"
            >
              <Logo mode="light" />
              <Typography className="content-about">
                A UauNews é um canal de contéudo da UauMotors, que tem como objetivo trazer a você, conteúdos de
                relevância e todas novidades do mundo automotivos.
              </Typography>
              <span className="mobileTitle">
                <h4>UauNews Mobile</h4>
              </span>
              <Box className="icons">
                <Image
                  src="/assets/images/logos/app-legislativo-disponivel-googleplay-e-appstore.png"
                  alt="logos"
                  width={1}
                  height={1}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="footerWidget">
              <div className="footerTitle">
                <h2>Tags</h2>
              </div>
              {/* <div className="tagcloud">
                {UauTags.map((tag, key) => {
                  if (key < 12) {
                    return (
                      <Link href={`/tag/${tag.pathname}`} className="tag-cloud-link" key={key}>
                        {tag.title}
                      </Link>
                    );
                  }
                })}
              </div> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="footerWidget">
              <div className="footerTitle">
                <h2>Recentes</h2>
              </div>
              <div className="timelineNews">
                <ul>
                  {UauRecents.map((post, key) => {
                    return (
                      <li key={key}>
                        <span>
                          <small>
                            <i className={"fa fa-calendar"} />
                            <Date dateString={post.date} />
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
            <div className="footerWidget">
              <div className="footerTitle">
                <h2>Instagram</h2>
              </div>
              <div className="thumbnails">
                {vehiclePhotos.map((img, key) => (
                  <div key={key}>
                    <Image src={img.src} alt={img.alt} width={1920} height={1080} />
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <section className="bottomFooter">
        <Container>
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={12} sm={8} md={7}>
              <Typography>© 2023 UauNews. Todos os direitos reservados.</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={5}>
              <ul className="socials">
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
      <SignInModal />
    </footer>
  );
};

export default Footer;
