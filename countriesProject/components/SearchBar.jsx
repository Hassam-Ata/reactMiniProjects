import React from "react";

function Search({ setQuery }) {
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        className="countryInput"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
