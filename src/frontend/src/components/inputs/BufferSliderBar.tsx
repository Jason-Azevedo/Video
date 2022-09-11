import React, { useRef, useEffect } from "react";
import useSlider from "../../hooks/useSlider";

export interface IBufferSliderBar {
  progressPercent: number;
  bufferPercent: number;
}

export default function BufferSliderBar({
  progressPercent,
  bufferPercent,
}: IBufferSliderBar) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  // setProgress(progressPercent);
  // }, [progressPercent]);

  return (
    <div ref={sliderRef} className="slider-bar-padding">
      <div className="slider-bar">
        <div className="slider-bar-background"></div>
        <div
          className="slider-bar-progress primary"
          style={{ width: `${50}%` }}
        ></div>
        <div
          className="slider-bar-buffer"
          style={{ width: `${bufferPercent}%` }}
        ></div>
      </div>
    </div>
  );
}
