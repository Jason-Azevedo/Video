import React from "react";
import { Link } from "react-router-dom";

interface IVideoInfo {
  id: string;
  thumbnailUrl: string;
  channelImageUrl: string;
  title: string;
  duration: number;
  channelName: string;
  views: number;
  datePublished: number;
}

interface IVideoCardProps {
  videoInfo: IVideoInfo;
}

export default function VideoCard({ videoInfo }: IVideoCardProps) {
  return (
    <Link className="video-card" to={`/watch?id=${videoInfo.id}`}>
      <div className="video-card-thumbnail-container">
        <img
          className="video-card-thumbnail image"
          src={videoInfo.thumbnailUrl}
        />
        <span className="video-card-duration text--14">8:36</span>
      </div>

      <div className="video-card-content">
        <img className="image round" src={videoInfo.channelImageUrl} />
        <div>
          <h3 className="title--16">{videoInfo.title}</h3>
          <h4 className="title--12 dim">{videoInfo.channelName}</h4>

          <p className="text--12 dim">{videoInfo.views}k Views • 11 hours ago</p>
        </div>
      </div>
    </Link>
  );
}
