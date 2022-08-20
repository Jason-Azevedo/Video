import React, { useState } from "react";

import NavbarMenu from "./NavbarMenu";
import VideoNotification, { IVideoNotification } from "./VideoNotification";
import { INavbarOverlay } from "./Navbar";

import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as BellSlashIcon } from "../../assets/svg/bell-slash.svg";

export function NotificationsMenu({ toggleOverlay }: INavbarOverlay) {
  const [isShowing, showMenu] = useState(false);

  const toggleMenu = () => {
    toggleOverlay();
    showMenu((prev) => !prev);
  };

  const data: IVideoNotification = {
    channelImageUrl:
      "https://media.istockphoto.com/photos/traditional-swedish-dessert-cinnabon-roll-bread-homemade-bakery-sale-picture-id868037278",
    thumbnailUrl:
      "https://media.istockphoto.com/photos/freshly-baked-cinnamon-roll-and-coffee-with-latte-art-picture-id1131410383",
    channelName: "The cinnabunor channel of goodness",
    title:
      "How to make the best cinnabuns in the world that no one will believe you not even your mother",
    datePosted: 1644761189,
  };

  const notificationsData = Array(7).fill(data);

  const notifications = notificationsData.map((e, i) => (
    <VideoNotification key={i} data={e} />
  ));

  const bellIcon = (
    <div className="notification-menu-icon">
      <BellIcon className="icon--18" />
      <span className="text--14 semi-bold">{notificationsData.length}</span>
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
