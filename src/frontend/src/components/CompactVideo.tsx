import React from "react";
import { Link } from "react-router-dom";

import IVideo from "../interfaces/video";
import truncateText from "../utils/truncateText";
import getPostedAgo from "../utils/getPostedAgo";
import { IScreenSize } from "../hooks/useScreenSize";
import { maxTabletSize, maxLaptopSize } from "../utils/maxScreenSizes";

interface ICompactVideoProps {
  video: IVideo;
  screen: IScreenSize;
}

export default function CompactVideo({ video, screen }: ICompactVideoProps) {
  let maxTitleChars = 60;
  let maxChannelChars = 40;

  // Determine the max chars before truncation
  if (screen.width >= maxLaptopSize) {
    maxTitleChars = 180;
    maxChannelChars = 100;
  } else if (screen.width >= maxTabletSize) {
    maxTitleChars = 120;
    maxChannelChars = 100;
  }

  return (
    <Link className="video-compact" to={`/watch?v=${video.id}`}>
      <div className="video-thumbnail-container">
        <img className="video-thumbnail image" src={video.thumbnailUrl} />

        <span className="video-duration text--14">8:36</span>
      </div>

      <div className="video-content-compact">
        <h3 className="title--16">
          {truncateText(video.title, maxTitleChars)}
        </h3>
        <h4 className="title--12 dim">
          {truncateText(video.channelName, maxChannelChars)}
        </h4>

        <p className="text--12 dim">
          {video.views}k Views • {getPostedAgo(video.datePosted)}
        </p>

        {screen.width > maxTabletSize && (
          <p className="text--14 dim">{truncateText(video.description, 300)}</p>
        )}
      </div>
    </Link>
  );
}
