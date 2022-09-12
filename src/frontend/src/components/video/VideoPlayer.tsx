import React, { useRef, useEffect, useState, useReducer } from "react";

import { ReactComponent as PlayIcon } from "../../assets/svg/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/svg/pause.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/backward-step.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/forward-step.svg";
import { ReactComponent as VolumeIcon } from "../../assets/svg/volume.svg";
import VolumeSlider from "../inputs/VolumeSlider";
import BufferSliderBar from "../inputs/BufferSliderBar";
import useVideoPlayer from "../../hooks/useVideoPlayer";
import { toHMS } from "../../utils/toHMS";

interface IVideoPlayerProps {
  url: string;
  width: string;
  height: string;
}

export default function VideoPlayer({ url, width, height }: IVideoPlayerProps) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const { isPlaying, currentTime, duration, volume, adjustVolume, togglePlay } =
    useVideoPlayer(playerRef);

  const playPauseIcon = (
    <div style={{ height: "18px" }} onClick={togglePlay}>
      {isPlaying ? (
        <PauseIcon className="icon--18 white" />
      ) : (
        <PlayIcon className="icon--18 white" />
      )}
    </div>
  );

  return (
    <div className="video-player" style={{ height }}>
      <video
        ref={playerRef}
        className="video-player-video"
        src={url}
        width={width}
        height={height}
        onClick={togglePlay}
      />
      <div className="video-player-container">
        {/* Video duration */}

        <BufferSliderBar progressPercent={32} bufferPercent={54} />

        {/* Controls */}
        <div className="video-player-controls">
          <div className="video-player-controls-container">
            <PrevIcon className="icon--18 white" />
            {playPauseIcon}
            <NextIcon className="icon--18 white" />
          </div>

          <div className="video-player-controls-container">
            <VolumeSlider
              progressPercent={Math.round(volume * 100)}
              setProgress={adjustVolume}
            />
            <span className="text--14 white video-player-duration">
              {toHMS(currentTime)} / {toHMS(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
