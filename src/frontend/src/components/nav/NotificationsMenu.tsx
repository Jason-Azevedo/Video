import React from "react";

import NavbarMenu from "./NavbarMenu";
import VideoNotification from "./VideoNotification";
import { INavbarOverlay } from "./Navbar";

import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as BellSlashIcon } from "../../assets/svg/bell-slash.svg";

export function NotificationsMenu({ toggleOverlay }: INavbarOverlay) {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  // Get this from the server
  const notifications = data.map((e, i) => <VideoNotification key={i} />);

  const bellIcon = (
    <div className="notification-menu-icon">
      <BellIcon className="icon--18" />
      <span className="text--14 semi-bold">{data.length}</span>
    </div>
  );

  return (
    <NavbarMenu icon={bellIcon} toggleOverlay={toggleOverlay}>
      {notifications ? (
        <div className="notification-menu-notifications">{notifications}</div>
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
