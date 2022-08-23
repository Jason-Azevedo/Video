import React from "react";
import { Link } from "react-router-dom";

import withPage from "../wrappers/withPage";

export function NotFound() {
  return (
    <div className="container--1200">
      <h2 className="title--18 bold dim">404</h2>
      <h1 className="title--24">Not Found</h1>

      <Link className="link" to="/">
        Return to home
      </Link>
    </div>
  );
}

export default withPage(NotFound);
