import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, InputBase, IconButton, Paper, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";

type SearchBoxProps = {
  onSearch?: (searchTerm: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClose = () => {
    setSearchTerm("");
  };

  return (
    <Paper
      component="form"
      className="search-box"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar por..."
        inputProps={{ "aria-label": "buscar por..." }}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      {searchTerm && (
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default SearchBox;
