import { UauSettings } from "@utility/interfaces";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";

const settings: UauSettings = {
  toolbarMenus: [
    { title: "Quem Somos", pathname: "quem-somos" },
    { title: "Anúncie", pathname: "contatos" },
    { title: "Contatos", pathname: "contatos" }
  ],
  socialItens: [
    {
      title: "Facebook",
      url: "https://www.facebook.com/uaumotors",
      icon: <FacebookIcon style={{ fontSize: "18px" }} />
    },
    {
      title: "LinkedIn",
      url: "https://instagram.com/uau.motors",
      icon: <InstagramIcon style={{ fontSize: "18px" }} />
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/uaumotors/",
      icon: <LinkedInIcon style={{ fontSize: "18px" }} />
    },
    {
      title: "Twitter",
      url: "https://twitter.com/uaumotors",
      icon: <TwitterIcon style={{ fontSize: "18px" }} />
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/channel/UCp_56lUt24Nc_sYt3NP1mzw/",
      icon: <YouTubeIcon style={{ fontSize: "18px" }} />
    },
    {
      title: "RssFeed",
      url: "",
      icon: <RssFeedIcon style={{ fontSize: "18px" }} />
    }
  ],
  menusCategories: [
    { title: "Notícias", pathname: "noticias" },
    { title: "Lançamentos", pathname: "lancamentos" },
    { title: "Avaliações", pathname: "avaliacoes" },
    { title: "Comparativos", pathname: "comparativos" },
    { title: "Curiosidades", pathname: "curiosidades" },
    { title: "Dicas", pathname: "dicas" },
    { title: "Galerias", pathname: "galerias" },
    { title: "Histórias", pathname: "historias" },
    { title: "Vídeos", pathname: "videos" }
  ],
  tags: [
    { title: "Notícias", pathname: "noticias" },
    { title: "Lançamentos", pathname: "lancamentos" },
    { title: "Avaliações", pathname: "avaliacoes" },
    { title: "Comparativos", pathname: "comparativos" },
    { title: "Curiosidades", pathname: "curiosidades" },
    { title: "Dicas", pathname: "dicas" },
    { title: "Galerias", pathname: "galerias" },
    { title: "Histórias", pathname: "historias" },
    { title: "Vídeos", pathname: "videos" },
    { title: "Destaques", pathname: "destaques" },
    { title: "IPVA", pathname: "ipva" },
    { title: "Seguros", pathname: "seguros" },
    { title: "Carros Novos", pathname: "carros-novos" },
    { title: "Carros Usados", pathname: "carros-usados" },
    { title: "Hot News", pathname: "hot-news" }
  ]
};

export default settings;
