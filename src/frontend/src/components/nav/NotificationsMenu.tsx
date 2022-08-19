import React, { useState } from "react";

import NavbarMenu from "./NavbarMenu";
import VideoNotification from "./VideoNotification";
import { INavbarOverlay } from "./Navbar";

import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as BellSlashIcon } from "../../assets/svg/bell-slash.svg";

export function NotificationsMenu({ toggleOverlay }: INavbarOverlay) {
  const [isShowing, showMenu] = useState(false);

  const toggleMenu = () => {
    toggleOverlay();
    showMenu((prev) => !prev);
  };

  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  const notifications = data.map((e, i) => <VideoNotification key={i} />);

  const bellIcon = (
    <div className="notification-menu-icon">
      <BellIcon className="icon--18" />
      <span className="text--14 semi-bold">{data.length}</span>
    </div>
  );

  return (
    <NavbarMenu icon={bellIcon} toggleMenu={toggleMenu} show={isShowing}>
      {notifications ? (
        <div className="notification-menu-notifications" onClick={toggleMenu}>
          {notifications}
        </div>
      ) : (
        <div className="notification-menu-no-notifications">
          <BellSlashIcon className="icon--48" />
          <h3 className="title--18">No notifications</h3>
        </div>
      )}
    </NavbarMenu>
  );
}

export default NotificationsMenu;
