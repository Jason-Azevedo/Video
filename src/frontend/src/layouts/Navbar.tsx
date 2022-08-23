import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/nav/Navbar";

export function NavbarLayout() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default NavbarLayout;
