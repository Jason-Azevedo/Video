import React from "react";

import { ReactComponent as VolumeIcon } from "../../assets/svg/volume.svg";
import SliderBar, { ISliderBarProps } from "./SliderBar";

export default function VolumeSlider({ progress = 50 }: ISliderBarProps) {
  return (
    <div className="volume-slider">
      <VolumeIcon className="icon--18 white" />
      <SliderBar progress={progress} />
    </div>
  );
}
