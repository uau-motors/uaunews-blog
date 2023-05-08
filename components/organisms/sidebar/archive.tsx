import { Box, Typography } from "@mui/material";
import TitleSection from "../../atoms/title-section";
import ArchivePosts from "../../molecules/archive-posts";
import { ThemeContext } from "../../../utility/contexts/theme-context";
import { useContext } from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function getPastMonths() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const months = [
    { name: "Janeiro", link: "https://exemplo.com/janeiro", count: 10 },
    { name: "Fevereiro", link: "https://exemplo.com/fevereiro", count: 15 },
    { name: "Março", link: "https://exemplo.com/marco", count: 20 },
    { name: "Abril", link: "https://exemplo.com/abril", count: 12 },
    { name: "Maio", link: "https://exemplo.com/maio", count: 8 },
    { name: "Junho", link: "https://exemplo.com/junho", count: 5 },
    { name: "Julho", link: "https://exemplo.com/julho", count: 3 },
    { name: "Agosto", link: "https://exemplo.com/agosto", count: 9 },
    { name: "Setembro", link: "https://exemplo.com/setembro", count: 14 },
    { name: "Outubro", link: "https://exemplo.com/outubro", count: 18 },
    { name: "Novembro", link: "https://exemplo.com/novembro", count: 22 },
    { name: "Dezembro", link: "https://exemplo.com/dezembro", count: 25 },
  ];
  const pastMonths = [];
  for (let i = 0; i < currentMonth; i++) {
    pastMonths.push({
      name: months[i].name,
      link: months[i].link,
      count: months[i].count,
    });
  }
  pastMonths.push({
    name: months[currentMonth].name,
    link: months[currentMonth].link,
    count: months[currentMonth].count,
  });
  return pastMonths.map((month) => ({
    month: `${month.name} ${currentYear}`,
    link: month.link,
    count: month.count,
  }));
}

function SidebarArchive() {
  const { theme } = useContext(ThemeContext);
  const data = getPastMonths();
  return (
    <Box className={"sidebar"}>
      <Box className={`archive-container archive-${theme}`}>
        <TitleSection title={"Arquivos"} />
        <Box className="archive-posts">
          <ArchivePosts data={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default SidebarArchive;
