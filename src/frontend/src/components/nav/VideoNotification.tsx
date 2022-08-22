import React from "react";
import { Link } from "react-router-dom";

import truncateText from "../../utils/truncateText";
import getPostedAgo from "../../utils/getPostedAgo";

export interface IVideoNotification {
  channelImageUrl: string;
  thumbnailUrl: string;
  title: string;
  channelName: string;
  datePosted: number;
}

interface IVideoNotificationProps {
  data: IVideoNotification;
}

export function VideoNotification({ data }: IVideoNotificationProps) {
  return (
    <Link to="/" className="video-notification">
      {/* Channel image */}
      <img
        className="video-notification-channel-image"
        src={data.channelImageUrl}
      />

      {/* Content */}
      <div className="video-notification-content">
        <span className="video-notification-title text--16 ellipsis">
          {truncateText(data.title, 55)}
        </span>
        <span className="video-notification-channel text--14 semi-bold dim">
          {truncateText(data.channelName, 23)}
        </span>
        <span className="video-notification-time text--12 semi-bold bright">
          {getPostedAgo(data.datePosted)}
        </span>
      </div>

      {/* Video thumbnail */}
      <img
        className="video-notification-video-thumbnail"
        src={data.thumbnailUrl}
      />
    </Link>
  );
}

export default VideoNotification;
