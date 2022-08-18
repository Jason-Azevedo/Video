import React, { useState, useRef, ReactNode } from "react";

import { FloatingMenu } from "../FloatingMenu";

interface INavbarMenuProps {
  icon: ReactNode;
  toggleOverlay: Function;
  children: ReactNode;
}

export function NavbarMenu({
  icon,
  children,
  toggleOverlay,
}: INavbarMenuProps) {
  const [isShowing, showMenu] = useState(false);

  const iconRef = useRef<HTMLDivElement>(null);

  const offMenuClickHandler = (event: MouseEvent) => {
    // Hide the menu if the user did not click the bell
    if (!iconRef.current?.contains(event.target as Node)) {
      showMenu(false);
      toggleOverlay();
    }
  };

  return (
    <div className="navbar-menu">
      <div
        className="navbar-menu-icon"
        ref={iconRef}
        onClick={() => {
          showMenu((prev) => !prev);
          toggleOverlay();
        }}
      >
        {icon}
      </div>

      <FloatingMenu
        show={isShowing}
        position={{ top: "120%", right: "0" }}
        offMenuClickHandler={offMenuClickHandler}
      >
        {children}
      </FloatingMenu>
    </div>
  );
}

export default NavbarMenu;
