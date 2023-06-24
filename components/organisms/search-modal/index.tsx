import * as React from "react";
import { Container } from "@mui/material";
import CloseTitle from "../../molecules/close-title";
import SearchTitle from "../../molecules/search-title";
import SearchSubtitle from "../../molecules/search-subtitle";
import SearchCategories from "../../molecules/search-categories";
import SearchBox from "../../molecules/search-box";
import SearchPagination from "../../molecules/search-pagination";
import SearchPostList from "../search-posts-list";

import { Box } from "@mui/system";
import { PostCardDataI } from "@utility/interfaces";

interface SearchModalProps {
  posts: PostCardDataI[];
}

const SearchModal: React.FC = ({ posts }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <section className={`search-modal theme-light`}>
      <Container style={{ position: "relative" }}>
        <CloseTitle />
        <SearchTitle />
        <SearchCategories />
        <SearchBox />
        <Box className="search-pagination-control">
          <SearchSubtitle />
          <SearchPagination />
        </Box>
        <SearchPostList posts={posts} />
      </Container>
    </section>
  );
};

export default SearchModal;
