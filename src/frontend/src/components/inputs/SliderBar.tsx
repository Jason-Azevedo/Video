import React, { useRef } from "react";
import useSlider from "../../hooks/useSlider";

export interface ISliderBarProps {
  progress: number;
}

export default function SliderBar({ progress }: ISliderBarProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { sliderPercent } = useSlider(sliderRef);

  return (
    <div ref={sliderRef} className="slider-bar-padding">
      <div className="slider-bar">
        <div className="slider-bar-background"></div>
        <div
          className="slider-bar-progress"
          style={{ width: `${sliderPercent}%` }}
        ></div>
      </div>
    </div>
  );
}
