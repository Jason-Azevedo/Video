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
  screenSize?: { width: number; height: number };
}

function determineContent(
  screenSize: { width: number; height: number },
  type: "card" | "compressed"
) {
  let titleLength = 200;
  let channelLength = 100;
  let showDesc = false;

  if (screenSize.width < 600) {
    titleLength = 50;
    channelLength = 30;
  } else if (screenSize.width < 750) {
    titleLength = 80;
    channelLength = 40;
  }

  if (type === "compressed" && screenSize.width > 767) {
    showDesc = true;
  }

  if (type === "card") {
    titleLength = 70;
    channelLength = 40;
  }

  return [titleLength, channelLength, showDesc];
}

export default function Video({
  type,
  video,
  menuItems,
  screenSize,
}: IVideoProps) {
  const [titleLength, channelLength, showDesc] = determineContent(
    screenSize || { width: window.innerWidth, height: window.innerHeight },
    type
  );

  return (
    <div className={`video-${type}`}>
      <Link className="video-link" to="" />
      <div className="video-thumbnail-container">
        <img className="video-thumbnail image" src={video.thumbnailUrl} />
        <span className="video-duration">8:36</span>
      </div>

      <div className="video-content">
        {type === "card" && (
          <div className="video-content-channel-image">
            <img className="image round" src={video.channelProfileImageUrl} />
          </div>
        )}

        <div className="video-content-details">
          <h3 className="title--16">
            {truncateText(video.title, titleLength as number)}
          </h3>
          <h4 className="title--14 dim">
            {truncateText(video.channelName, channelLength as number)}
          </h4>
          <span className="text--14 dim">
            {video.views}k views • {getPostedAgo(video.datePosted)}
          </span>

          {showDesc && (
            <p className="text--14">{truncateText(video.description, 120)}</p>
          )}
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
