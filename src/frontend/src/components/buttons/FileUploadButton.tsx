import React from "react";

interface IFileUploadProps {
  accepts: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function FileUpload({ accepts, onChange }: IFileUploadProps) {
  return (
    <div className="file-upload-btn">
      <button className="button">Upload</button>
      <input type="file" accept={accepts} onChange={(e) => onChange(e)} />
    </div>
  );
}
