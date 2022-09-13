import React, { useReducer, useEffect } from "react";

enum VideoPlayerActions {
  togglePlay = "togglePlay",
  currentTime = "currentTime",
  duration = "duration",
  volume = "volume",
}

interface IVideoPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
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
      let volume = (action.payload as number) / 100;

      if (volume > 1) volume = 1;
      if (volume < 0) volume = 0;

      return { ...state, volume: volume };

    case VideoPlayerActions.currentTime:
      const currentTime = action.payload as number;

      return { ...state, currentTime: currentTime };

    case VideoPlayerActions.duration:
      return { ...state, duration: action.payload as number };

    default:
      return state;
  }
}

const initialState = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 50,
};

export default function useVideoPlayer(
  videoRef: React.RefObject<HTMLVideoElement>
) {
  const [state, dispatch] = useReducer(playerReducer, initialState);
  const video = videoRef.current;

  /* VIDEO LOADED */
  useEffect(() => {
    if (!video) return;
    console.log(video);

    /* DURATION */
    video.addEventListener("durationchange", () => {
      dispatch({
        type: VideoPlayerActions.duration,
        payload: video.duration,
      });
    });

    /* CURRENT TIME */
    video.addEventListener("timeupdate", () =>
      dispatch({
        type: VideoPlayerActions.currentTime,
        payload: video.currentTime,
      })
    );

    /* ENDED */
    video.addEventListener("ended", () => {
      dispatch({
        type: VideoPlayerActions.togglePlay,
      });
    });
  }, [video]);

  /* PLAY */
  const togglePlay = () => {
    dispatch({ type: VideoPlayerActions.togglePlay });
  };

  useEffect(() => {
    if (!video) return;
    state.isPlaying ? video.play() : video.pause();

    // Pause the video on unmount
    return () => video.pause();
  }, [state.isPlaying]);

  /* VOLUME */
  const adjustVolume = (volume: number) => {
    // Dont update if the value hasn't changed
    // This method is mean't to be used with a volume slider
    if (volume === state.volume) return;

    dispatch({ type: VideoPlayerActions.volume, payload: volume });
  };

  useEffect(() => {
    if (!video) return;
    video.volume = state.volume;
  }, [state.volume]);

  return { ...state, togglePlay, adjustVolume };
}
