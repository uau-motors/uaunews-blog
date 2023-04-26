import Head from "next/head";
import Toolbar from "../../molecules/toolbar";
import DrawerSidebar from "../../organisms/drawer-sidebar";
import MiddleHeader from "../../molecules/middle-header";
import NavbarHeader from "../../molecules/navbar-header";
import NotNews from "../../molecules/hot-news";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import {
  MenusCategories,
  MenusInstitutionsToolbar,
} from "../../../utility/constants";

export const SocialNetworks = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/uaumotors",
    icon: <FacebookIcon style={{ fontSize: "18px" }} />,
  },
  {
    title: "LinkedIn",
    url: "https://instagram.com/uau.motors",
    icon: <InstagramIcon style={{ fontSize: "18px" }} />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/uaumotors/",
    icon: <LinkedInIcon style={{ fontSize: "18px" }} />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/uaumotors",
    icon: <TwitterIcon style={{ fontSize: "18px" }} />,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCp_56lUt24Nc_sYt3NP1mzw/",
    icon: <YouTubeIcon style={{ fontSize: "18px" }} />,
  },
  {
    title: "RssFeed",
    url: "",
    icon: <RssFeedIcon style={{ fontSize: "18px" }} />,
  },
];

const UauHeader = () => {
  return (
    <header id="header">
      <Toolbar menus={MenusInstitutionsToolbar} />
      <MiddleHeader socials={SocialNetworks} />
      <NavbarHeader sections={MenusCategories} title={"UauMotors"} />
      <NotNews />
      <DrawerSidebar />
    </header>
  );
};

export default UauHeader;
