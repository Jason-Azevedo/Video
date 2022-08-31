import React from "react";

interface IFormInputProps {
  label: string;
  error?: string;
  password?: boolean;
  inputRef: React.Ref<HTMLInputElement>;
}

export default function FormInput({
  label,
  inputRef,
  error,
  password,
}: IFormInputProps) {
  return (
    <div className="input-container">
      <label className="label text--16" htmlFor="">
        {label}
      </label>
      <input
        ref={inputRef}
        className="input"
        type={password ? "password" : "text"}
      />

      {error && <span className="text--14 semi-bold dim">{error}</span>}
    </div>
  );
}
