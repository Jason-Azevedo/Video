import React from "react";

import withNavbarAndFooter from "../layouts/NavbarAndFooter";

export interface HomeProps {}

export function Home() {
  return <div>Welcome to the Home Page!</div>;
}

export default withNavbarAndFooter<HomeProps>(Home);
