import React, { useRef, useEffect, useState, useReducer } from "react";

import { ReactComponent as PlayIcon } from "../../assets/svg/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/svg/pause.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/backward-step.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/forward-step.svg";
import { ReactComponent as VolumeIcon } from "../../assets/svg/volume.svg";
import VolumeSlider from "../inputs/VolumeSlider";
import BufferSliderBar from "../inputs/BufferSliderBar";

interface IVideoPlayerProps {
  url: string;
  width: string;
  height: string;
}

export default function VideoPlayer({ url, width, height }: IVideoPlayerProps) {
  const [playerState, setPlayerState] = useState({ playing: false });
  const playerRef = useRef<HTMLVideoElement>(null);

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

        <BufferSliderBar progress={32} buffer={54} />

        {/* Controls */}
        <div className="video-player-controls">
          <div className="video-player-controls-container">
            <PrevIcon className="icon--18 white" />
            <div style={{ height: "18px" }}>
              {playerState.playing ? (
                <PauseIcon className="icon--18 white" />
              ) : (
                <PlayIcon className="icon--18 white" />
              )}
            </div>
            <NextIcon className="icon--18 white" />
          </div>

          <div className="video-player-controls-container">
            <VolumeSlider progress={45} />
            <span className="text--14 white">22:34 / 42:22</span>
          </div>
        </div>
      </div>
    </div>
  );
}
