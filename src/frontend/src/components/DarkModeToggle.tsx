import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Toggle from "./buttons/Toggle";
import { RootState } from "../redux/store";
import { toggleDarkMode } from "../features/theme/darkModeSlice";

import { ReactComponent as MoonIcon } from "../assets/svg/moon.svg";

export default function DarkModeToggle() {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkmode.isDarkMode
  );
  const dispatch = useDispatch();

  return (
    <div className="dark-mode-toggle">
      {/* Display sun or moon depending on if it is darkmode or not */}
      <div className="dark-mode-toggle-content">
        <MoonIcon className="icon--24" />

        <span className="text--16">Dark Mode</span>
      </div>

      <Toggle
        toggled={isDarkMode}
        onToggle={() => dispatch(toggleDarkMode())}
      />
    </div>
  );
}
