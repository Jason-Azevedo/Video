import React, { useState, useEffect } from "react";

export default function useSlider(sliderRef: React.RefObject<HTMLDivElement>) {
  const [sliderPercent, setSliderPercent] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    let isSliding = false;

    const updateSlider = (x: number) => {
      if (!sliderRef.current) return;

      const sliderBox = sliderRef.current.getBoundingClientRect();
      const adjustedX = x - sliderBox.left;
      const adjustedSide = sliderBox.right - sliderBox.left;
      const percent = Math.round((adjustedX / adjustedSide) * 100);

      setSliderPercent(percent);
    };

    sliderRef.current.addEventListener("mousedown", (e) => {
      isSliding = true;

      updateSlider(e.x);
    });

    sliderRef.current.addEventListener("mousemove", (e) => {
      if (isSliding) updateSlider(e.x);
    });

    sliderRef.current.addEventListener("mouseup", (e) => {
      isSliding = false;
    });

    sliderRef.current.addEventListener("mouseleave", (e) => {
      isSliding = false;
    });
  }, []);

  return { sliderPercent };
}
