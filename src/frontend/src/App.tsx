import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Watch from "./pages/Watch";
import SearchResults from "./pages/SearchResults";
import { RootState } from "./redux/store";
import { ColorThemes } from "./features/theme/colorThemeSlice";

import "./sass/style.scss";

function applyColorTheme(color: ColorThemes) {
  let prevColorTheme = "";

  for (let style of Object.values(ColorThemes)) {
    if (document.body.classList.contains(style)) {
      prevColorTheme = style;
      break;
    }
  }

  document.body.classList.replace(prevColorTheme, color);
}

function App() {
  const darkmode = useSelector((state: RootState) => state.darkmode.isDarkMode);
  const colorTheme = useSelector((state: RootState) => state.colorTheme.color);

  // Toggle darkmode
  useEffect(() => {
    const bodyStyles = document.body.classList;
    const hasDarkMode = bodyStyles.contains("dark");

    // Didnt use toggle because of glitch when changing darkmode quickly
    if (darkmode && !hasDarkMode) bodyStyles.add("dark");
    else if (!darkmode && hasDarkMode) bodyStyles.remove("dark");
  }, [darkmode]);

  //Toggle various color themes
  useEffect(() => applyColorTheme(colorTheme), [colorTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
