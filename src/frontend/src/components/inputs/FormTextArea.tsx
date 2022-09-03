import React from "react";

interface IFormTextAreaProps {
  label: string;
  name?: string;
  value?: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function FormTextArea({
  label,
  name,
  value,
  error,
  onChange,
}: IFormTextAreaProps) {
  return (
    <div className="input-container">
      <label className="label text--16" htmlFor="">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        className="input-area"
        onChange={onChange}
      />

      {error && <span className="text--14 semi-bold dim">{error}</span>}
    </div>
  );
}
