import React from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/nav/Pagination";

import scroll from "../utils/scroll";

export function SearchResults() {
  scroll.resetPos();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="search-page container--1200">
      <h1 className="title--18">Search results for "{query}"</h1>

      <div className="search-page-results">Videos here!</div>

      <Pagination />
    </div>
  );
}

export default SearchResults;
