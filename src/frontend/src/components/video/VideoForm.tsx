import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../inputs/FormInput";
import FormTextArea from "../inputs/FormTextArea";
import FileUploadButton from "../buttons/FileUploadButton";
import LabelCheckbox from "../buttons/LabelCheckbox";

export interface IVideoFormConfig {
  title: string;
  submitButtonText: string;
  backUrl: string;
}

export interface IVideoFormState {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  thumbnail: File;
  video: File;
  publish: boolean;
  errors: IVideoFormErrors;
}

export interface IVideoFormErrors {
  general?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  video?: string;
  publish?: string;
}

interface IVideoFormProps {
  config: IVideoFormConfig;
  state?: IVideoFormState;
  onSubmit: (data: IVideoFormState) => void;
}

export default function VideoForm({
  config,
  state,
  onSubmit,
}: IVideoFormProps) {
  const [formData, setFormData] = useState(state);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // Pass the data to parent
    // onSubmit(data);
  };

  return (
    <form className="form container--600" onSubmit={submitHandler}>
      <Link className="button" to={config.backUrl}>
        Back
      </Link>
      <h1 className="title--24">{config.title}</h1>

      <FormInput
        label="Title"
        value={formData?.title}
        error={formData?.errors?.title}
        onChange={console.log}
      />

      <FormTextArea
        label="Description"
        value={state?.description}
        error={formData?.errors?.title}
        onChange={console.log}
      />

      <div className="form-inline center apart">
        <h2 className="title--18">Thumbnail</h2>

        <FileUploadButton accepts=".png, .jpg, .webp" onChange={console.log} />
      </div>

      {/* {
        <img
          className="form-thumnail-preview image"
          style={{ width: "100%", maxHeight: "300px" }}
          src={}
        />
      } */}

      <div className="form-inline center apart">
        <h2 className="title--18">Video</h2>

        <FileUploadButton accepts=".mp4" onChange={console.log} />
      </div>

      {/* {
        <video
          className="form-thumnail-preview image"
          style={{ width: "100%", maxHeight: "300px" }}
          src={}
          controls
        />
      } */}

      <LabelCheckbox label="Publish" checked={true} onChange={console.log} />

      <button className="button submit-btn" type="submit">
        {config.submitButtonText}
      </button>
    </form>
  );
}
