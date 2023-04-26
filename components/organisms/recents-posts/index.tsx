import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import { NavTabsRecents } from "../../../utility/constants";
import TitleSection from "../../atoms/title-section";
import TabContent from "../../molecules/tab-content";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

interface Tag {
  slug: string;
  title: string;
}

interface Post {
  title: string;
  content: string;
  featured: string;
  date: string;
  tags: Tag;
  slug: string;
}

interface Posts {
  news: Post[];
  releases: Post[];
  curiosities: Post[];
  tips: Post[];
  histories: Post[];
}

interface RecentPostsProps {
  posts: Posts;
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const RecentPosts: FC<RecentPostsProps> = ({ posts }) => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [tag, setTag] = useState<string>("news");

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className={"recents-news"}>
        <Grid item xs={8}>
          <Box sx={{ width: "100%" }}>
            <TitleSection title={"Recentes"} />
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  {NavTabsRecents.map((tab, key) => (
                    <Tab label={tab.title} {...a11yProps(key)} />
                  ))}
                </TabList>
                <TabPanel value={0}>Item Two</TabPanel>
                {/* <TabContent posts={posts.releases} /> */}
              </Box>
            </TabContext>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentPosts;
