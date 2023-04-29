import React from "react";
import Box from "@mui/material/Box";
import TitleSection from "../../atoms/title-section";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const socials = [
  {
    title: "Facebook",
    url: "https://facebook.com/uaumotors",
    icon: <FacebookIcon />,
    counter: "10k",
    subs: "Seguidores",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/channel/UC4eOvRtKjxkxzRq8WYmVm7w",
    icon: <YouTubeIcon />,
    counter: "34k",
    subs: "Escritos",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/uaumotors",
    icon: <InstagramIcon />,
    counter: "86k",
    subs: "Seguidores",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/uaumotors",
    icon: <TwitterIcon />,
    counter: "64k",
    subs: "Seguidores",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/uaumotors",
    icon: <LinkedInIcon />,
    counter: "23k",
    subs: "Seguidores",
  },
  {
    title: "RSS",
    url: "https://example.com/rss",
    icon: <RssFeedIcon />,
    counter: "251",
    subs: "Artigos",
  },
];

const SocialsNetworks = () => {
  return (
    <Box className="sidebar-socials">
      <TitleSection title={"Siga-nos"} />
      <Box className="social-counter">
        {socials.map((social, key) => (
          <Link
            target="_blank"
            href={`${social.url}`}
            className={`box bg-${social.title.toLowerCase()}`}
            key={key}
            title={`${social.title}`}
          >
            <span className="counter-icon">{social.icon}</span>
            <span className="num-count">{`${social.counter}`}</span>
            <span className="counter-subscribers">{`${social.subs}`}</span>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default SocialsNetworks;
