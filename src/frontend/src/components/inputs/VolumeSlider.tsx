import React from "react";

import { ReactComponent as VolumeIcon } from "../../assets/svg/volume.svg";
import SliderBar, { ISliderBarProps } from "./SliderBar";

export default function VolumeSlider({
  progressPercent = 50,
  setProgress,
}: ISliderBarProps) {
  return (
    <div className="volume-slider">
      <VolumeIcon className="icon--18 white" onClick={() => setProgress(0)} />
      <SliderBar progressPercent={progressPercent} setProgress={setProgress} />
    </div>
  );
}
