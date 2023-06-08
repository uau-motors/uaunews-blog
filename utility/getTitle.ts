export const getTitle = (name, title = null) => {
  switch (name) {
    case "noticias":
      return "Notícias";
    case "lancamentos":
      return "Lançamentos";
    case "avaliacoes":
      return "Avaliações";
    case "comparativos":
      return "Comparativos";
    case "curiosidades":
      return "Curiosidades";
    case "dicas":
      return "Dicas";
    case "galerias":
      return "Galerias";
    case "historias":
      return "Histórias";
    case "videos":
      return "Vídeos";
    case "quem-somos":
      return "Quem Somos";
    case "contatos":
      return "Contatos";
    case "termos-de-uso":
      return "Termos de uso";
    case "politica-de-privacidade":
      return "Politíca de Privacidade";
    case "cookies":
      return "Sobre o uso de cookies";
    case "[...slug]":
      return title;
    default:
      return name;
  }
};
