import React, { useRef, useEffect, useState } from "react";

import { ReactComponent as PlayIcon } from "../../assets/svg/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/svg/pause.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/backward-step.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/forward-step.svg";
import { ReactComponent as VolumeIcon } from "../../assets/svg/volume.svg";

interface IVideoPlayerProps {
  url: string;
  width: string;
  height: string;
}

export default function VideoPlayer({ url, width, height }: IVideoPlayerProps) {
  const [playerState, setPlayerState] = useState({ playing: false });
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    playerRef.current?.addEventListener("ended", () => {
      setPlayerState((p) => ({ ...p, playing: false }));
    });

    playerRef.current?.addEventListener("timeupdate", (e) => {
      console.log(Math.round(playerRef.current?.currentTime || 0));
    });
  });

  const togglePlayPause = () => {
    const isPaused = playerRef.current?.paused || false;

    if (isPaused) playerRef.current?.play();
    else playerRef.current?.pause();

    setPlayerState((p) => ({ ...p, playing: isPaused }));
  };

  return (
    <div className="video-player" style={{ height }}>
      <video
        ref={playerRef}
        className="video-player-video"
        src={url}
        width={width}
        height={height}
        onClick={togglePlayPause}
      />
      <div className="video-player-container">
        {/* Video duration */}

        {/* Progress bar */}
        <div className="video-player-progress-bar">
          <div className="video-player-progress-bar-progress"></div>
        </div>

        {/* Controls */}
        <div className="video-player-controls">
          <div>
            <PrevIcon className="icon--18 white" />
            <div onClick={togglePlayPause}>
              {playerState.playing ? (
                <PauseIcon className="icon--18 white" />
              ) : (
                <PlayIcon className="icon--18 white" />
              )}
            </div>
            <NextIcon className="icon--18 white" />
          </div>

          <div>
            <div className="video-player-volume">
              <VolumeIcon className="icon--18 white" />
              <div className="video-player-volume-slider">
                <div className="video-player-volume-slider-progress"></div>
              </div>
            </div>
            <span className="text--14 white">22:34 / 42:22</span>
          </div>
        </div>
      </div>
    </div>
  );
}
