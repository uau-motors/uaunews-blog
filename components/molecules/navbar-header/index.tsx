import React, { useEffect, useState, useRef } from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ThemeToggle from "../theme-toggle";
import { useOverlay } from "@utility/contexts/ProviderContext";
import Router from "next/router";
import settings from "@utility/Settings";

import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useRouter } from "next/router";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 260,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}));

export default function NavbarHeader() {
  const { menusCategories } = settings;
  const { toggleDrawer } = useOverlay();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = (pathname: string) => {
    setAnchorEl(null);
    router.push(pathname);
  };
  // const [category, setCategory] = useState("home");

  const [navbarData, setNavbarData] = useState({
    sticky: false,
    navHeight: 0,
    pageYOffset: 0
  });

  const navbar = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = navbarData.navHeight;
      const scrollY = window.scrollY;

      setNavbarData((prevState) => ({
        ...prevState,
        sticky: scrollY >= value,
        pageYOffset: scrollY
      }));
    };

    const handleResize = () => {
      if (navbar.current) {
        setNavbarData((prevState) => ({
          ...prevState,
          navHeight: navbar.current.clientHeight,
          pageYOffset: window.scrollY
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    if (navbar.current) {
      setNavbarData((prevState) => ({
        ...prevState,
        navHeight: navbar.current.clientHeight,
        pageYOffset: window.pageYOffset
      }));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navbarData.navHeight]);

  const handleClose = () => {
    toggleDrawer();
  };

  return (
    <React.Fragment>
      <div ref={navbar} className={navbarData.pageYOffset > 148 ? "sticky fixed" : "sticky"}>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
          className={`megamenu`}
        >
          <Container style={{ position: "relative" }} maxWidth="lg">
            <Box
              sx={{
                typography: "body1",
                "& > :not(style) + :not(style)": {
                  ml: 1
                }
              }}
            >
              <button type="button" className="side-menu-trigger" onClick={handleClose}>
                <span className="menu-btn-icon">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </span>
              </button>
              <div className="menu-xs">
                <Button
                  id="menu"
                  aria-controls={open ? "menu-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="outlined"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  className="btn"
                >
                  MENU
                </Button>
                <StyledMenu
                  id="menu-customized-menu"
                  className="menu-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "menu-customized-button"
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseMenu}
                >
                  {menusCategories.map((section) => (
                    <MenuItem
                      onClick={() => handleCloseMenu(`/${section.pathname}`)}
                      disableRipple
                      key={section.title}
                      className="menu-item"
                    >
                      {section.title}
                    </MenuItem>
                  ))}
                </StyledMenu>
              </div>
              {menusCategories.map((section) => (
                <Link key={section.title} href={section.pathname} className={`nav-item nav-${section.pathname}`}>
                  {section.title}
                </Link>
              ))}
              <Box />
              <Box
                sx={{
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    sx: 0
                  }
                }}
                className="menuActions"
              >
                <Button
                  type="button"
                  sx={{ p: "2px 8px" }}
                  aria-label="search"
                  color="secondary"
                  variant="outlined"
                  className="btnSearch btn-md-cta"
                  onClick={() => Router.push({ pathname: `/busca/` })}
                >
                  <SearchIcon />
                  &nbsp; Buscar
                </Button>
                <Button
                  type="button"
                  sx={{ p: "2px 8px" }}
                  aria-label="search"
                  color="secondary"
                  variant="outlined"
                  className="btnSearch btn-xs-cta"
                  onClick={() => Router.push({ pathname: `/busca/` })}
                >
                  <SearchIcon />
                </Button>
                <ThemeToggle />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </div>
    </React.Fragment>
  );
}
