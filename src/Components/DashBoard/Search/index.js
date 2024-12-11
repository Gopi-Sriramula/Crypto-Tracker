import React, { useState } from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
function Search({ search, onChangeSearch }) {
  return (
    <div className="search-flex">
      <SearchIcon />
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => onChangeSearch(e)}
      />
    </div>
  );
}

export default Search;
