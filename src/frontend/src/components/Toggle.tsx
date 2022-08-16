import React, { useState } from "react";

interface IToggleProps {
  toggled: Boolean;
  onToggle: React.MouseEventHandler<HTMLDivElement>;
}

export default function Toggle({ toggled, onToggle }: IToggleProps) {
  return (
    <div className={`toggle ${toggled ? "toggled" : ""}`} onClick={onToggle}>
      <div className="toggle-circle"></div>
    </div>
  );
}
