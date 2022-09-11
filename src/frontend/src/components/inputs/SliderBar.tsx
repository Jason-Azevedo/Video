import React, { useRef, useEffect } from "react";
import useSlider from "../../hooks/useSlider";

export interface ISliderBarProps {
  progressPercent: number;
}

export default function SliderBar({ progressPercent }: ISliderBarProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { progress, setProgress } = useSlider(sliderRef);

  useEffect(() => {
    setProgress(progressPercent);
  }, [progressPercent]);

  return (
    <div ref={sliderRef} className="slider-bar-padding">
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
