import { Box } from "@mui/material";
import TitleSection from "../../atoms/title-section";
import TagCloud from "../../atoms/tag-cloud";
import { ThemeContext } from "../../../utility/contexts/theme-context";
import { useContext } from "react";
import { Tags } from "../../../utility/constants";

const getTags = (tags) => {
  const tagsRandom = [...tags];
  for (let i = tagsRandom.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tagsRandom[i], tagsRandom[j]] = [tagsRandom[j], tagsRandom[i]];
  }
  return tagsRandom;
};

function SidebarTags() {
  const { theme } = useContext(ThemeContext);
  return (
    <Box className={"sidebar"}>
      <Box className={`tags-container tag-${theme}`}>
        <TitleSection title={"Tags"} />
        <Box className="tags-cloud">
          <TagCloud tags={getTags(Tags)} />
        </Box>
      </Box>
    </Box>
  );
}

export default SidebarTags;
