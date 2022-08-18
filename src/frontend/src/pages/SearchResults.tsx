import React from "react";
import { useSearchParams } from "react-router-dom";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <>
      <h1 className="title--18">Search results for "{query}"</h1>

      <div>Videos here!</div>
    </>
  );
}

export default SearchResults;
