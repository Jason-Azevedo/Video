import React, { FormEvent, useRef } from "react";

import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svg/magnifying-glass.svg";

interface ISearchBarProps {
  onSearch: (query: String) => any;
}

export function SearchBar({ onSearch }: ISearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(inputRef.current?.value || "");
  };

  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className="searchbar-input"
        type="text"
        placeholder="Cats..."
      />
      <button className="button--icon" type="submit">
        <MagnifyingGlassIcon className="icon--16" />
      </button>
    </form>
  );
}

export default SearchBar;
