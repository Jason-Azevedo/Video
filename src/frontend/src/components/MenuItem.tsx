import React, { ReactNode } from "react";

import { Link, To } from "react-router-dom";

interface IMenuItemProps {
  text: String;
  icon?: ReactNode;
  to?: To;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function MenuItem({ icon, text, to, onClick }: IMenuItemProps) {
  const body = (
    <>
      {/* Render icon if defined */}
      {icon && icon}
      <div className="menu-item-contents">
        <span className="text--16">{text}</span>
      </div>
    </>
  );

  if (to)
    return (
      <Link className="menu-item" to={to}>
        {body}
      </Link>
    );

  return (
    <div className="menu-item" onClick={onClick}>
      {body}
    </div>
  );
}

export default MenuItem;
