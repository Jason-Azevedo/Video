import React from "react";
import { Link } from "react-router-dom";

import IVideo from "../interfaces/video";
import getPostedAgo from "../utils/getPostedAgo";
import truncateText from "../utils/truncateText";

interface IVideoCardProps {
  video: IVideo;
}

export default function VideoCard({ video }: IVideoCardProps) {
  return (
    <Link className="video-card" to={`/watch?id=${video.id}`}>
      <div className="video-thumbnail-container">
        <img className="video-thumbnail image" src={video.thumbnailUrl} />
        <span className="video-duration text--14">8:36</span>
      </div>

      <div className="video-content-card">
        <img
          className="video-channel image round"
          src={video.channelProfileImageUrl}
        />
        <div>
          <h3 className="title--16">{truncateText(video.title, 60)}</h3>
          <h4 className="title--12 dim">
            {truncateText(video.channelName, 40)}
          </h4>

          <p className="text--12 dim">
            {video.views}k Views • {getPostedAgo(video.datePosted)}
          </p>
        </div>
      </div>
    </Link>
  );
}
