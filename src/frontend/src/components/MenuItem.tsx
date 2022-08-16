import React, { ReactNode } from "react";

import { Link, To } from "react-router-dom";

interface IMenuItemProps {
  icon: ReactNode;
  text: String;
  to: To;
}

export function MenuItem({ icon, text, to }: IMenuItemProps) {
  return (
    <Link className="menu-item" to={to}>
      {icon}
      <div className="menu-item-contents">
        <span className="text--16">{text}</span>
      </div>
    </Link>
  );
}

export default MenuItem;
