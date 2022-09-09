import React from "react";

export interface ISliderBarProps {
  progress: number;
}

export default function SliderBar({ progress }: ISliderBarProps) {
  return (
    <div className="slider-bar-padding">
      <div className="slider-bar">
        <div className="slider-bar-background"></div>
        <div
          className="slider-bar-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
