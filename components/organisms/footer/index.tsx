import React, { useContext } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

import Logo from "@molecules/logo";

import Icon from "@mui/material/Icon";
import Date from "@components/atoms/date-component";
import SignInModal from "@molecules/modal/sign-in";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "@utility/contexts/ThemeContext";
import Newsletter from "@components/molecules/newsletter";

export const SocialNetworks = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/uaumotors",
    icon: "fa fa-facebook"
  },
  {
    title: "LinkedIn",
    url: "https://instagram.com/uau.motors",
    icon: "fa fa-instagram"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/uaumotors/",
    icon: "fa fa-linkedin"
  },
  {
    title: "Twitter",
    url: "https://twitter.com/uaumotors",
    icon: "fa fa-twitter"
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCp_56lUt24Nc_sYt3NP1mzw/",
    icon: "fa fa-youtube"
  },
  {
    title: "RssFeed",
    url: "",
    icon: "fa fa-rss"
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

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer id="footer" className={`bg-${theme}`}>
      <Container maxWidth="lg">
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
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
                A UauNews é um canal de conteúdo da UauMotors, dedicado a trazer a você conteúdos de alta relevância e
                todas as novidades do mundo automotivo.
              </Typography>
              <span className="mobileTitle">
                <h4>UauNews Mobile</h4>
              </span>
              <Box className="icons">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/ads%2Fapp-store.png?alt=media"
                  alt="logos"
                  width={240}
                  height={50}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="footerWidget">
              <div className="footerTitle">
                <h2>Tags</h2>
              </div>
              <div className="tagcloud">
                {UauTags.map((tag, key) => {
                  if (key < 12) {
                    return (
                      <Link href={`/tag/${tag.pathname}`} className="tag-cloud-link" key={key}>
                        {tag.title}
                      </Link>
                    );
                  }
                })}
              </div>
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
                <h2>Assine a nossa newsletter</h2>
              </div>
              <Newsletter />
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
