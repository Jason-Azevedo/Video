import React, { PropsWithChildren, ReactElement } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function withNavbarAndFooter<P>(Body: React.ComponentType<P>): Function {
  return (props: P) => {
    return (
      <>
        <Navbar />
        <Body {...props} />
        <Footer />
      </>
    );
  };
}

export default withNavbarAndFooter;
