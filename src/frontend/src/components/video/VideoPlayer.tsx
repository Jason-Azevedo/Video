import React from "react";

interface IVideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: IVideoPlayerProps) {
  return (
    <div className="video-player">
      <video className="video-player-video" src={url} />
      <div className="video-player-container">
        {/* Progress bar */}
        <div className="video-player-progress-bar">
          <div className="video-player-progress-bar-progress"></div>
        </div>

        {/* Other controls */}
        <div className="video-player-controls"></div>
      </div>
    </div>
  );
}
