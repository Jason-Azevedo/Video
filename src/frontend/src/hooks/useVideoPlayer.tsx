import React, { useReducer, useEffect } from "react";

enum VideoPlayerActions {
  togglePlay = "togglePlay",
  volume = "volume",
}

interface IVideoPlayerState {
  isPlaying: boolean;
  volume: number;
}

function playerReducer(
  state: IVideoPlayerState,
  action: { type: VideoPlayerActions; payload?: string | number }
): IVideoPlayerState {
  switch (action.type) {
    case VideoPlayerActions.togglePlay:
      return { ...state, isPlaying: !state.isPlaying };

    case VideoPlayerActions.volume:
      let volume = (action.payload as number) / 1000;

      if (volume > 0.01) volume = 0.01;
      if (volume < 0) volume = 0;

      return { ...state, volume: volume };

    default:
      return state;
  }
}

const initialState = {
  isPlaying: false,
  volume: 50,
};

export default function useVideoPlayer(
  videoRef: React.RefObject<HTMLVideoElement>
) {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  const video = videoRef.current;

  /* PLAY */

  const togglePlay = () => {
    dispatch({ type: VideoPlayerActions.togglePlay });
  };

  useEffect(() => {
    if (!video) return;
    state.isPlaying ? video.play() : video.pause();
  }, [state.isPlaying]);

  /* VOLUME */

  const adjustVolume = (volume: number) => {
    dispatch({ type: VideoPlayerActions.volume, payload: volume });
  };

  useEffect(() => {
    if (!video) return;
    video.volume = state.volume;
  }, [state.volume]);

  return { ...state, togglePlay, adjustVolume };
}
