import React, { FC, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Breadcrumb from "@molecules/breadcrumb";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PostTitle from "@components/molecules/PostTitle";
import { Container, Box, ListItemIcon } from "@mui/material";
import { useRouter } from "next/router";
import TitleSection from "@molecules/TitleSection";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface InstitutionalProps {
  title: string;
}

const Institutional: FC<InstitutionalProps> = ({ title }) => {
  const [selected, setSelected] = React.useState("");
  const router = useRouter();
  const { pathname, query } = router;
  const pathnames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    setSelected(pathnames[0]);
  }, [pathnames]);

  return (
    <Box className={`page-institutional`}>
      <Box className="header-institutional">
        <Container>
          <Breadcrumb />
          <Grid container>
            <Grid item xs={12}>
              <PostTitle title={title} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TitleSection title="Institucional" />
            <List dense>
              <ListItemButton onClick={(event) => console.log("event ==>", event)} className="button-item">
                <ListItemIcon className="icon">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Quem Somos" />
              </ListItemButton>
              <ListItemButton onClick={(event) => console.log("event ==>", event)} className="button-item">
                <ListItemIcon className="icon">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Anúncie" />
              </ListItemButton>
              <ListItemButton
                selected={selected === "termos-de-uso"}
                onClick={(event) => console.log("event ==>", event)}
                className="button-item"
              >
                <ListItemIcon className="icon">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Termos de Uso" />
              </ListItemButton>
              <ListItemButton
                selected={selected === "politica-de-privacidade"}
                onClick={(event) => console.log("event ==>", event)}
                className="button-item"
              >
                <ListItemIcon className="icon">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Politíca de Privacidade" />
              </ListItemButton>
              <ListItemButton
                selected={selected === "cookies"}
                onClick={(event) => console.log("event ==>", event)}
                className="button-item"
              >
                <ListItemIcon className="icon">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Sobre o Uso de Cookies" />
              </ListItemButton>
              <ListItemButton
                selected={selected === "código-de-defesa"}
                onClick={(event) => console.log("event ==>", event)}
                className="button-item"
              >
                <ListItemIcon className="icon">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Código de defesa do consumidor
"
                />
              </ListItemButton>
              <ListItemButton onClick={(event) => console.log("event ==>", event)} className="button-item">
                <ListItemIcon className="icon">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
                <ListItemText primary="Contatos" />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={9} className="post-content">
            <p className="first-letter">
              Good web design has visual weight, is optimized for various devices, and has content that is prioritized
              for the medium. The most important elements of a web page should have more visual weight to “naturally
              attract” a visitor’s attention.
            </p>

            <p>
              Contents A good website should be easy to navigate Creating visual rhythms in your layouts Elements that
              can help website visual composition Diving into UX and UI design Ensure that interactive elements are easy
              to identify Breaking down the barriers Optimization for various types of devices and resolutions plays a
              fundamental role in modern website design. Web page layouts should be genuinely responsive and not rely on
              any fixed-size elements. Web designers using fluid grids and flexible images will guarantee that a web
              page will render well on a variety of devices, windows, and screen sizes.
            </p>

            <p>
              Most users search for something interesting (or useful) and clickable; as soon as some promising
              candidates are found, users click. If the new page doesn’t meet users’ expectations, the back button is
              clicked and the search process is continued.
            </p>

            <h4>A good website should be easy to navigate</h4>

            <p>
              Not all websites are made equal. Some websites are simple, logical, and easy to use. Others are a messy
              hodgepodge of pages and links.
            </p>

            <ul>
              <li>
                Direct the Eye With<strong> </strong>
                <a rel="noreferrer noopener" href="#" target="_blank">
                  {" "}
                  Leading Lines{" "}
                </a>
              </li>
              <li>Balance Out Your Elements</li>
              <li>
                Use Elements That<strong> Complement Each Other</strong>
              </li>
              <li>
                Be clear about your <strong>“focal points”</strong> and where you place them
              </li>
            </ul>

            <p>
              The size and position of elements in a composition will determine its balance. An unbalanced design
              generates tension, which may be the goal in many design projects, but for web apps that demand repeated
              comfortable use, tension is not a desirable trait.
            </p>

            <div className="paragraph-image">
              <p>
                UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both
                elements are crucial to a product and work closely together. But despite their relationship, the roles
                themselves are quite different.
              </p>
              <p>
                UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both
                elements are crucial to a product and work closely together. But despite their relationship, the roles
                themselves are quite different.
              </p>
              <p>
                UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both
                elements are crucial to a product and work closely together. But despite their relationship, the roles
                themselves are quite different.
              </p>
            </div>

            <h3>Ensure that interactive elements are easy to identify</h3>

            <p>
              Provide distinct styles for interactive elements, such as links and buttons, to make them easy to
              identify. For example, “change the appearance of links” on mouse hover, “keyboard focus”, and
              “touch-screen activation”.
            </p>

            <p>
              Design is not the end-all solution to all of the worlds problems — but with the right thinking and
              application, it can definitely be a good beginning to start tackling them.
            </p>

            <div className="paragraph-image">
              <p>
                UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both
                elements are crucial to a product and work closely together. But despite their relationship, the roles
                themselves are quite different.
              </p>
              <p>
                UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both
                elements are crucial to a product and work closely together. But despite their relationship, the roles
                themselves are quite different.
              </p>
              <p>
                UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both
                elements are crucial to a product and work closely together. But despite their relationship, the roles
                themselves are quite different.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Institutional;
