import React, { useState, useEffect } from "react";

export default function useSlider(
  sliderRef: React.RefObject<HTMLDivElement>,
  setProgress: (percent: number) => void
) {
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    let isSliding = false;

    const updateSlider = (x: number) => {
      if (!slider) return;

      const sliderBox = slider.getBoundingClientRect();
      const adjustedX = x - sliderBox.left;
      const adjustedSide = sliderBox.right - sliderBox.left;
      const percent = Math.round((adjustedX / adjustedSide) * 100);

      setProgress(percent);
    };

    slider.addEventListener("mousedown", (e) => {
      isSliding = true;

      updateSlider(e.x);
    });

    slider.addEventListener("mousemove", (e) => {
      if (isSliding) updateSlider(e.x);
    });

    slider.addEventListener("mouseup", (e) => {
      isSliding = false;
    });

    slider.addEventListener("mouseleave", (e) => {
      isSliding = false;
    });
  }, []);
}
