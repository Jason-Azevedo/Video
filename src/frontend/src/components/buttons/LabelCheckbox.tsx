import React from "react";

import Checkbox, { ICheckboxProps } from "./Checkbox";

interface ILabelCheckboxProps extends ICheckboxProps {
  label: string;
}

export default function LabelCheckbox({
  label,
  checked,
  onChange,
}: ILabelCheckboxProps) {
  return (
    <div className="checkbox--label">
      <Checkbox checked={checked} onChange={onChange} />
      <span className="text--14">{label}</span>
    </div>
  );
}
