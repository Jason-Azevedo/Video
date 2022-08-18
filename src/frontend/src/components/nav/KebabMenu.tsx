import React from "react";

import NavbarMenu from "./NavbarMenu";
import AccountSettingsLink from "./AccountSettingsLink";
import MenuItem from "./MenuItem";
import DarkModeToggle from "../DarkModeToggle";
import ThemeColorSelector from "../ThemeColorSelector";

import { ReactComponent as EllipsisIcon } from "../../assets/svg/ellipsis-vertical.svg";
import { ReactComponent as HouseIcon } from "../../assets/svg/house.svg";
import { ReactComponent as ShieldDogIcon } from "../../assets/svg/shield-dog.svg";
import { ReactComponent as ClockIcon } from "../../assets/svg/clock.svg";
import { ReactComponent as ListUlIcon } from "../../assets/svg/list-ul.svg";
import { ReactComponent as CameraIcon } from "../../assets/svg/camera.svg";
import { ReactComponent as GearIcon } from "../../assets/svg/gear.svg";

export function KebabMenu() {
  return (
    <NavbarMenu icon={<EllipsisIcon className="icon--18" />}>
      <AccountSettingsLink />

      <hr className="hr" />

      <MenuItem to="/" text="Home" icon={<HouseIcon className="icon--24" />} />
      <MenuItem
        to="/following"
        text="Following"
        icon={<ShieldDogIcon className="icon--24" />}
      />
      <MenuItem to="/" text="Saved" icon={<ClockIcon className="icon--24" />} />
      <MenuItem
        to="/"
        text="Playlists"
        icon={<ListUlIcon className="icon--24" />}
      />
      <MenuItem
        to="/"
        text="My Videos"
        icon={<CameraIcon className="icon--24" />}
      />

      <hr className="hr" />

      <ThemeColorSelector />

      <DarkModeToggle />

      <MenuItem
        to="/account"
        text="Settings"
        icon={<GearIcon className="icon--24" />}
      />
    </NavbarMenu>
  );
}

export default KebabMenu;
