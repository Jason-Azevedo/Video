import React, { useState } from "react";

import SearchBar from "../SearchBar";
import KebabMenu from "./KebabMenu";
import NotificationsMenu from "./NotificationsMenu";

import { ReactComponent as Logo } from "../../assets/svg/brand-icon.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svg/magnifying-glass.svg";
import { ReactComponent as XMarkIcon } from "../../assets/svg/xmark.svg";

export function Navbar() {
  const [searching, showSearchbar] = useState(false);
  const toggleSearchbar = () => showSearchbar((prev) => !prev);

  return (
    <nav className="nav-container">
      <div className="nav container--1200">
        <div className={`nav-brand ${searching ? "hide" : ""}`}>
          <Logo className="icon--24" />
          <h2 className="title-brand">Vidio</h2>
        </div>

        <div className={`nav-searchbar ${!searching ? "hide" : ""}`}>
          <button className="button--icon" onClick={toggleSearchbar}>
            <XMarkIcon className="icon--18" />
          </button>

          <SearchBar onSearch={console.log} />
        </div>

        <div className={`nav-icons ${searching ? "hide" : ""}`}>
          <div className="nav-search-icon" onClick={toggleSearchbar}>
            <MagnifyingGlassIcon className="icon--18" />
          </div>

          <NotificationsMenu />
          <KebabMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
