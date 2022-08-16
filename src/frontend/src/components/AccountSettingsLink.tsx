import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as UserIcon } from "../assets/svg/user.svg";

// TODO: This default image must be fetched from backend
import defaultProfileImage from "../assets/imgs/default-user-profile.jpg";

export function AccountSettingsLink() {
  // Fetch this from redux context
  const profileImage = "";
  const username = "James Oliver";
  const email = "james@fake.io";

  return (
    <Link to="/account" className="account-settings-link">
      <img
        className="account-settings-link-profile-image"
        src={profileImage || defaultProfileImage}
      />

      <div>
        <span className="account-settings-link-username">{username}</span>
        <span className="account-settings-link-email">{email}</span>
      </div>
    </Link>
  );
}

export default AccountSettingsLink;
