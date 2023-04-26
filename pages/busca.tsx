import * as React from "react";
import { useContext } from "react";
import type { NextPage } from "next";
import Layout from "../components/template/layout";
import { Container } from "@mui/material";
import CarouselBlog from "../components/organisms/carousel";
import RecentsPosts from "../components/organisms/recents-posts";
import { faker } from "@faker-js/faker";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../utility/contexts/theme-context";
import { lightTheme, darkTheme } from "../utility/contexts/theme";
import { CssBaseline } from "@material-ui/core";
import SearchModal from "../components/organisms/search-modal";

interface Tag {
  slug: string;
  title: string;
}

interface Data {
  news: DataItem[];
  releases: DataItem[];
  curiosities: DataItem[];
  tips: DataItem[];
  histories: DataItem[];
}

interface DataItem {
  featured: string;
  title: string;
  date: string;
  excerpt: string;
  tags: Tag;
  slug: string;
}

const generateData = (): Data => {
  const data: Data = {
    news: [],
    releases: [],
    curiosities: [],
    tips: [],
    histories: [],
  };

  const tags: Tag[] = [
    {
      slug: "news",
      title: "Notícias",
    },
    {
      slug: "releases",
      title: "Lançamentos",
    },
    {
      slug: "curiosities",
      title: "Curiosidades",
    },
    {
      slug: "tips",
      title: "Dicas",
    },
    {
      slug: "histories",
      title: "Histórias",
    },
  ];

  const keys: string[] = [
    "news",
    "releases",
    "curiosities",
    "tips",
    "histories",
  ];

  keys.forEach((key: string) => {
    for (let i = 0; i < 12; i++) {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      const dirPath: string = "/assets/images/samples/cars";
      let fileName: string = `image-${i}.jpeg`;
      let filePath: string = `${dirPath}/${fileName}`;
      const dataItem: DataItem = {
        featured: `${filePath}`,
        title: faker.lorem.words(7),
        date: faker.date.recent().toISOString().slice(0, 10),
        excerpt: faker.lorem.words(15),
        tags: tag,
        slug: tag.slug,
      };
      data[key].push(dataItem);
    }
  });

  return data;
};

const recentsPosts = generateData();

const SearchPage: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Layout id="home" theme={theme} header={false} footer={false}>
        <main>
          <SearchModal theme={theme} posts={recentsPosts} />
        </main>
      </Layout>
    </ThemeProvider>
  );
};

export default SearchPage;
