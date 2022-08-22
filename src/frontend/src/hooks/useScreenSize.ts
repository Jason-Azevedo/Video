import React, { useState, useEffect } from "react";

export interface IScreenSize {
  width: number;
  height: number;
}

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function onResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", onResize);

    // Set the initial screen size
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return screenSize;
}
