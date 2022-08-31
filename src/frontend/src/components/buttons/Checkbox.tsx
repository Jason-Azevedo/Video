import React from "react";

import { ReactComponent as CheckIcon } from "../../assets/svg/check.svg";

export interface ICheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function Checkbox({ checked, onChange }: ICheckboxProps) {
  return (
    <div
      className={`checkbox ${checked ? "active" : ""}`}
      onClick={() => onChange(!checked)}
    >
      <CheckIcon className={`icon--16 ${checked ? "" : "hide"}`} />
    </div>
  );
}
