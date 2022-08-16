import React from "react";

import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";

export function withNavbarAndFooter<P>(Body: React.ComponentType<P>): Function {
  return (props: P) => {
    return (
      <>
        <Navbar />

        <main className="main">
          <Body {...props} />
        </main>

        <Footer />
      </>
    );
  };
}

export default withNavbarAndFooter;
