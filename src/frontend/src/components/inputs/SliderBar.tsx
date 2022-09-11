import React, { useRef, useEffect } from "react";
import useSlider from "../../hooks/useSlider";

export interface ISliderBarProps {
  progressPercent: number;
  setProgress: (percent: number) => void;
}

export default function SliderBar({
  progressPercent,
  setProgress,
}: ISliderBarProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  useSlider(sliderRef, setProgress);

  useEffect(() => {
    setProgress(progressPercent);
  }, [progressPercent]);

  return (
    <div ref={sliderRef} className="slider-bar-padding">
      <div className="slider-bar">
        <div className="slider-bar-background"></div>
        <div
          className="slider-bar-progress"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
}
