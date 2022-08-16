import React, { useRef } from "react";

import { ReactComponent as MagnifyingGlassIcon } from "../assets/svg/magnifying-glass.svg";

interface ISearchBarProps {
  onSearch: (query: String) => any;
}

export function SearchBar({ onSearch }: ISearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="searchbar">
      <input
        ref={inputRef}
        className="searchbar-input"
        type="text"
        placeholder="Cats..."
      />
      <button
        className="button--icon"
        onClick={() => onSearch(inputRef.current?.value || "")}
      >
        <MagnifyingGlassIcon className="icon--16" />
      </button>
    </div>
  );
}

export default SearchBar;
