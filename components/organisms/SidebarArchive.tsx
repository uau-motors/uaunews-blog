import { Box } from "@mui/material";
import TitleSection from "@molecules/TitleSection";
import ArchivePosts from "@molecules/ArchivePosts";
import { ThemeContext } from "@utility/contexts/ThemeContext";
import { useContext } from "react";

function getPastMonths() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const months = [
    { name: "Janeiro", link: "/arquivo/2023/janeiro", count: 10 },
    { name: "Fevereiro", link: "/arquivo/2023/fevereiro", count: 15 },
    { name: "Março", link: "/arquivo/2023/marco", count: 20 },
    { name: "Abril", link: "/arquivo/2023/abril", count: 12 },
    { name: "Maio", link: "/arquivo/2023/maio", count: 8 },
    { name: "Junho", link: "/arquivo/2023/junho", count: 5 },
    { name: "Julho", link: "/arquivo/2023/julho", count: 3 },
    { name: "Agosto", link: "/arquivo/2023/agosto", count: 9 },
    { name: "Setembro", link: "/arquivo/2023/setembro", count: 14 },
    { name: "Outubro", link: "/arquivo/2023/outubro", count: 18 },
    { name: "Novembro", link: "/arquivo/2023/novembro", count: 22 },
    { name: "Dezembro", link: "/arquivo/2023/dezembro", count: 25 }
  ];
  const pastMonths = [];
  for (let i = 0; i < currentMonth; i++) {
    pastMonths.push({
      name: months[i].name,
      link: months[i].link,
      count: months[i].count
    });
  }
  pastMonths.push({
    name: months[currentMonth].name,
    link: months[currentMonth].link,
    count: months[currentMonth].count
  });
  return pastMonths.map((month) => ({
    month: `${month.name} ${currentYear}`,
    link: month.link,
    count: month.count
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
