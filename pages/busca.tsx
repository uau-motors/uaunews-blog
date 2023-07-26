import * as React from "react";

import { useRouter } from "next/router";

import SearchModal from "../components/organisms/search-modal";

import DefaultTemplate from "@components/templates";
import settings from "@utility/Settings";
import { SEO } from "@organisms/Seo";
import { CmsData, PostCardDataI } from "@utility/interfaces";
import { BodyClass } from "@helpers/BodyClass";
import { getAllPosts } from "./api";

function removeLast12Records(jsonArray: any[]): any[] {
  const sortedArray = jsonArray.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  const posts = sortedArray.slice(-12);
  return posts;
}

function limitExcerptCharacters(jsonArray: any[], maxLength: number): any[] {
  const modifiedArray = jsonArray.map((record) => {
    if (record.excerpt && record.excerpt.length > maxLength) {
      record.excerpt = record.excerpt.substring(0, maxLength) + "...";
    }
    return record;
  });

  return modifiedArray;
}

function limitTitleCharacters(jsonArray: any[], maxLength: number): any[] {
  const modifiedArray = jsonArray.map((record) => {
    if (record.title && record.title.length > maxLength) {
      record.title = record.title.substring(0, maxLength) + "...";
    }
    return record;
  });

  return modifiedArray;
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  const posts = limitExcerptCharacters(limitTitleCharacters(allPosts, 80), 240);
  const searchPost = removeLast12Records(posts);

  const cmsData = {
    bodyClass: BodyClass({ isHome: false })
  };

  return {
    revalidate: 10,
    props: { cmsData, searchPost }
  };
};

const SearchPage: React.FC<{
  cmsData: CmsData;
  searchPost: PostCardDataI[];
}> = (props) => {
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;
  const bodyClass = BodyClass({ isHome: true });
  const { seo } = settings;
  const { cmsData, searchPost } = props;

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "search", header: false, footer: false }}>
        <SearchModal posts={searchPost} />
      </DefaultTemplate>
    </>
  );
};

export default SearchPage;
