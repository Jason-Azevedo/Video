import React, { useState, useRef, ReactNode } from "react";

import { FloatingMenu } from "../FloatingMenu";

interface INavbarMenuProps {
  icon: ReactNode;
  toggleMenu: Function;
  children: ReactNode;
  show: boolean;
}

export function NavbarMenu({
  icon,
  children,
  toggleMenu,
  show,
}: INavbarMenuProps) {
  const iconRef = useRef<HTMLDivElement>(null);

  const offMenuClickHandler = (event: MouseEvent) => {
    // Hide the menu if the user did not click the bell
    if (!iconRef.current?.contains(event.target as Node)) {
      toggleMenu();
    }
  };

  return (
    <div className="navbar-menu">
      <div
        className="navbar-menu-icon"
        ref={iconRef}
        onClick={() => toggleMenu()}
      >
        {icon}
      </div>

      <FloatingMenu
        show={show}
        position={{ top: "120%", right: "0" }}
        offMenuClickHandler={offMenuClickHandler}
      >
        {children}
      </FloatingMenu>
    </div>
  );
}

export default NavbarMenu;
