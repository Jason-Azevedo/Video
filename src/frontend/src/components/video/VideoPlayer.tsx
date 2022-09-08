import React, { useRef, useEffect, useState } from "react";

import { ReactComponent as PlayIcon } from "../../assets/svg/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/svg/pause.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/backward-step.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/forward-step.svg";
import { ReactComponent as ExpandIcon } from "../../assets/svg/expand.svg";
import { ReactComponent as VolumeIcon } from "../../assets/svg/volume.svg";

interface IVideoPlayerProps {
  url: string;
  width: string;
  height: string;
}

export default function VideoPlayer({ url, width, height }: IVideoPlayerProps) {
  const playerRef = useRef<HTMLVideoElement>(null);

  // Hide the controls
  useEffect(() => {
    if (!playerRef.current) return;

    playerRef.current.controls = false;
  }, []);

  return (
    <div className="video-player" style={{ height }}>
      <video
        ref={playerRef}
        className="video-player-video"
        src={url}
        width={width}
        height={height}
      />
      <div className="video-player-container">
        {/* Video duration */}
        <span className="text--14 white video-player-duration">
          22:34 / 42:22
        </span>

        {/* Progress bar */}
        <div className="video-player-progress-bar">
          <div className="video-player-progress-bar-progress"></div>
        </div>

        {/* Controls */}
        <div className="video-player-controls">
          <div>
            <PrevIcon className="icon--18 white" />
            <PauseIcon className="icon--18 white" />
            <NextIcon className="icon--18 white" />
          </div>

          <div>
            <div className="video-player-volume">
              <VolumeIcon className="icon--18 white" />
              <div className="video-player-volume-slider">
                <div className="video-player-volume-slider-progress"></div>
              </div>
            </div>
            <ExpandIcon className="icon--18 white" />
          </div>
        </div>
      </div>
    </div>
  );
}
