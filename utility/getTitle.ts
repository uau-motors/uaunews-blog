export const getTitle = (name: string): string => {
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
    default:
      return name;
  }
};
