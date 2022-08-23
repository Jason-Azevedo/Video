import React, { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Following from "./pages/Following";
import NavbarLayout from "./layouts/Navbar";
import FooterLayout from "./layouts/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
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
      {/* Automatically scroll to top when changing pages */}
      <ScrollToTop />

      <Routes>
        {/* Routes with navbar only */}
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="/watch" element={<Watch />} />

          {/* Routes with navbar and footer */}
          <Route path="/" element={<FooterLayout />}>
            <Route path="/search" element={<Search />} />
            <Route path="/following" element={<Following />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

        {/* Elements with no navbar or footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
