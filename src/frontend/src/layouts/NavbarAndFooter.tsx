import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";

export function NavbarFooterLayout() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default NavbarFooterLayout;
