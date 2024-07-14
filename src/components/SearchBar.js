import React from "react";
import '../styles.css';


function SearchBar({ searchWord, handleSearchWord }) {
    return (
        <input className="search-input"
            type="text" placeholder="Search movies"
            value={searchWord}
            onChange={handleSearchWord}
        />
    );
}

export default SearchBar;
