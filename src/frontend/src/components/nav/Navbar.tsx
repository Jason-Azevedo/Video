import React, { useState } from "react";

import SearchBar from "../inputs/SearchBar";
import KebabMenu from "./KebabMenu";
import NotificationsMenu from "./NotificationsMenu";

import { ReactComponent as Logo } from "../../assets/svg/brand-icon.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svg/magnifying-glass.svg";
import { ReactComponent as XMarkIcon } from "../../assets/svg/xmark.svg";

export interface INavbarOverlay {
  toggleOverlay: Function;
}

export function Navbar() {
  const [isOverlay, setIsOverlay] = useState(false);
  const [searching, showSearchbar] = useState(false);
  const toggleSearchbar = () => showSearchbar((prev) => !prev);

  const toggleOverlay = () => {
    setIsOverlay((prev) => {
      const bodyStyle = document.body.style;

      if (!prev) bodyStyle.overflow = "hidden";
      else bodyStyle.overflow = "";

      return !prev;
    });
  };

  return (
    <>
      <header className="nav-container">
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

            <NotificationsMenu toggleOverlay={toggleOverlay} />
            <KebabMenu toggleOverlay={toggleOverlay} />
          </div>
        </div>
      </header>

      <div className={`nav-overlay ${isOverlay ? "" : "hidden"}`}></div>
    </>
  );
}

export default Navbar;
