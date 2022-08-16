import React from "react";
import { Link } from "react-router-dom";

import defaultProfileImage from "../../assets/imgs/default-user-profile.jpg";

export function VideoNotification() {
  return (
    <Link to="/" className="video-notification">
      {/* Channel image */}
      <img
        className="video-notification-channel-image"
        src={defaultProfileImage}
      />

      {/* Content */}
      <div className="video-notification-content">
        <span className="text--16 ellipsis">
          Hiking through the mountains forever
        </span>
        <span className="video-notification-channel-name text--14 semi-bold dim">
          Jeffrey Beyzos
        </span>
        <span className="text--12 semi-bold bright">22 hours ago</span>
      </div>

      {/* Video thumbnail */}
      <img
        className="video-notification-video-thumbnail"
        src={defaultProfileImage}
      />
    </Link>
  );
}

export default VideoNotification;
