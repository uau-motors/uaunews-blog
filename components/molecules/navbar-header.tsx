import React, { useState, useContext, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ThemeToggle from "../molecules/theme-toggle";
import { useDrawer } from "../../utility/contexts/drawer-context";
import Router from "next/router";

interface NavbarHeaderProps {
  sections: ReadonlyArray<{
    title: string;
    pathname: string;
  }>;
  title: string;
}

export default function NavbarHeader(props: NavbarHeaderProps) {
  const { isOpen, toggleDrawer } = useDrawer();
  const { sections } = props;

  const [category, setCategory] = useState("home");
  // const [collapse, setCollapse] = useState(false);

  // useEffect(() => {
  //   setCategory(router.query.category);
  // }, [category]);

  const handleClose = () => {
    toggleDrawer();
  };

  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
        className="megamenu"
      >
        <Container style={{ position: "relative" }}>
          <Box
            sx={{
              typography: "body1",
              "& > :not(style) + :not(style)": {
                ml: 1,
              },
            }}
          >
            <button
              type="button"
              className="side-menu-trigger"
              onClick={handleClose}
            >
              <span className="menu-btn-icon">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </span>
            </button>
            {sections.map((section) => (
              <Link key={section.title} href={section.pathname}>
                {section.title}
              </Link>
            ))}
            <Box />
            <Box
              sx={{
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  sx: 0,
                },
              }}
              className="menuActions"
            >
              <Button
                type="button"
                sx={{ p: "2px 8px" }}
                aria-label="search"
                color="secondary"
                variant="outlined"
                className="btnSearch"
                onClick={() => Router.push({ pathname: `/busca/` })}
              >
                <SearchIcon />
                &nbsp; Buscar
              </Button>
              <ThemeToggle />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </React.Fragment>
  );
}
