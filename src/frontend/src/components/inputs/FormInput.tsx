import React from "react";

interface IFormInputProps {
  label: string;
  name?: string;
  value?: string;
  error?: string;
  password?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function FormInput({
  label,
  name,
  value,
  error,
  password,
  onChange,
}: IFormInputProps) {
  return (
    <div className="input-container">
      <label className="label text--16" htmlFor="">
        {label}
      </label>
      <input
        name={name}
        value={value}
        className="input"
        type={password ? "password" : "text"}
        onChange={onChange}
      />

      {error && <span className="text--14 semi-bold dim">{error}</span>}
    </div>
  );
}
