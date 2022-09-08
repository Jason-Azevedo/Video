import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../inputs/FormInput";
import FormTextArea from "../inputs/FormTextArea";
import FileUploadButton from "../buttons/FileUploadButton";
import LabelCheckbox from "../buttons/LabelCheckbox";
import { validateString } from "../../validation/stringValidator";
import VideoPlayer from "./VideoPlayer";

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
  thumbnail?: File;
  video?: File;
  publish: boolean;
}

export interface IVideoFormErrors {
  general?: string;
  title?: string;
  description?: string;
}

interface IVideoFormProps {
  config: IVideoFormConfig;
  state?: IVideoFormState;
  error?: IVideoFormErrors;
  onSubmit: (data: IVideoFormState) => void;
}

const initialState: IVideoFormState = {
  title: "",
  description: "",
  thumbnailUrl: "",
  videoUrl: "",
  publish: false,
};

const initialErrorState: IVideoFormErrors = {
  general: "",
  description: "",
  title: "",
};

export default function VideoForm({
  config,
  state = initialState,
  error = initialErrorState,
  onSubmit,
}: IVideoFormProps) {
  const [formData, setFormData] = useState(state);
  const [errors, setErrors] = useState(error);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const titleResult = validateString(
      { maxLength: 100, notEmpty: true },
      formData.title
    );
    const descriptionResult = validateString(
      { maxLength: 500 },
      formData.description
    );

    if (titleResult.failed || descriptionResult.failed) {
      setErrors((prev) => ({
        ...prev,
        general: "Resolve the errors below to continue",
        title: titleResult.message,
        description: descriptionResult.message,
      }));
      return;
    }

    if (formData.publish && !formData.thumbnailUrl && !formData.videoUrl) {
      setErrors((prev) => ({
        ...prev,
        general:
          "Cannot publish video if the title, thumbnail and video fields have not been completed.",
      }));
      return;
    }

    // Submit
    onSubmit(formData);
  };

  const onFileChange = (name: "thumbnail" | "video", payload: File | null) => {
    if (!payload) return;

    let url = URL.createObjectURL(payload);

    // Cleanup to prevent memory leaks
    if (formData[name]) URL.revokeObjectURL(formData.thumbnailUrl);

    setFormData((prev) => ({
      ...prev,
      [name + "Url"]: url,
      [name]: payload,
    }));
  };

  return (
    <form className="form container--600" onSubmit={submitHandler}>
      <Link className="button" to={config.backUrl}>
        Back
      </Link>
      <h1 className="title--24">{config.title}</h1>

      {errors.general && (
        <span className="text--16 dim semi-bold">{errors.general}</span>
      )}

      <FormInput
        label={`Title (${100 - formData.title?.length || 0})`}
        value={formData.title}
        error={errors?.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <FormTextArea
        label={`Description (${500 - (formData?.description?.length || 0)})`}
        value={formData.description}
        error={errors?.description}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, description: e.target.value }))
        }
      />

      <div className="form-inline center apart">
        <h2 className="title--18">Thumbnail</h2>

        <FileUploadButton
          accepts=".png, .jpg, .webp"
          onChange={(e) =>
            onFileChange("thumbnail", e.target.files && e.target.files[0])
          }
        />
      </div>

      {formData.thumbnailUrl && (
        <img
          className="form-thumnail-preview image"
          style={{ width: "100%", maxHeight: "300px" }}
          src={formData.thumbnailUrl}
        />
      )}

      <div className="form-inline center apart">
        <h2 className="title--18">Video</h2>

        <FileUploadButton
          accepts=".mp4"
          onChange={(e) =>
            onFileChange("video", e.target.files && e.target.files[0])
          }
        />
      </div>

      {formData.videoUrl && (
        <VideoPlayer url={formData.videoUrl} width="100%" height="300px" />
      )}

      <LabelCheckbox
        label="Publish"
        checked={formData.publish}
        onChange={(e) => setFormData((prev) => ({ ...prev, publish: e }))}
      />

      <button className="button submit-btn" type="submit">
        {config.submitButtonText}
      </button>
    </form>
  );
}
