import React from "react";

interface IFormTextAreaProps {
  label: string;
  error?: string;
  inputRef: React.Ref<HTMLTextAreaElement>;
}

export default function FormTextArea({
  label,
  inputRef,
  error,
}: IFormTextAreaProps) {
  return (
    <div className="input-container">
      <label className="label text--16" htmlFor="">
        {label}
      </label>

      <textarea ref={inputRef} className="input-area" />

      {error && <span className="text--14 semi-bold dim">{error}</span>}
    </div>
  );
}
