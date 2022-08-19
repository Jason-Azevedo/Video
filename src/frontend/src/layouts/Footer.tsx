import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/nav/Footer";

export function FooterLayout() {
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
}

export default FooterLayout;
