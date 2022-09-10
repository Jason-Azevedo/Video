import React, { useRef } from "react";
import useSlider from "../../hooks/useSlider";

export interface IBufferSliderBar {
  progress: number;
  buffer: number;
}

export default function BufferSliderBar({
  progress,
  buffer,
}: IBufferSliderBar) {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sliderRef} className="slider-bar-padding">
      <div className="slider-bar">
        <div className="slider-bar-background"></div>
        <div
          className="slider-bar-progress primary"
          style={{ width: `${progress}%` }}
        ></div>
        <div
          className="slider-bar-buffer"
          style={{ width: `${buffer}%` }}
        ></div>
      </div>
    </div>
  );
}
