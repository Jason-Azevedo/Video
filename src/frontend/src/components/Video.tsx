import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import IVideo from "../interfaces/video";
import getPostedAgo from "../utils/getPostedAgo";

import { ReactComponent as EllipsisIcon } from "../assets/svg/ellipsis-vertical.svg";
import truncateText from "../utils/truncateText";

interface IVideoProps {
  type: "card" | "compressed";
  video: IVideo;
  menuItems?: ReactElement;
}

export default function Video({ type, video, menuItems }: IVideoProps) {
  return (
    <div className={`video-${type}`}>
      <Link className="video-link" to="" />
      <div className="video-thumbnail-container">
        <img className="video-thumbnail image" src={video.thumbnailUrl} />
        <span className="video-duration">8:36</span>
      </div>

      <div className="video-content">
        <div className="video-content-channel-image">
          <img className="image round" src={video.channelProfileImageUrl} />
        </div>

        <div className="video-content-details">
          <h3 className="title--16">{truncateText(video.title, 85)}</h3>
          <h4 className="title--14 dim">
            {truncateText(video.channelName, 40)}
          </h4>
          <span className="text--14 dim">
            {video.views}k views • {getPostedAgo(video.datePosted)}
          </span>
        </div>

        {menuItems && (
          <div className="video-ellipsis">
            <EllipsisIcon className="icon--18" />

            {/* Floating menu here */}
          </div>
        )}
      </div>
    </div>
  );
}
