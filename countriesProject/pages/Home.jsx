import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import CountriesList from "../components/CountriesList";

import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <Dropdown setQuery={setQuery} />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  );
}

export default Home;
