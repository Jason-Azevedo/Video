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
  thumbnail?: File;
  video?: File;
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

const initialState: IVideoFormState = {
  title: "",
  description: "",
  thumbnailUrl: "",
  videoUrl: "",
  publish: false,
  errors: {},
};

export default function VideoForm({
  config,
  state = initialState,
  onSubmit,
}: IVideoFormProps) {
  const [formData, setFormData] = useState(state);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (validateChanges()) return;

    onSubmit(formData);
  };

  const validateChanges = () => {
    // Validate title
    if (formData.title?.length > 100) {
      setFormData((prev) => ({
        ...prev,
        errors: { title: "Title length cannot exceed 100 characters" },
      }));
      return false;
    }

    if (formData.title?.trim() === "") {
      setFormData((prev) => ({
        ...prev,
        errors: { title: "Video must have a title" },
      }));

      return false;
    }

    // Validate description
    if (formData.description?.length > 500) {
      setFormData((prev) => ({
        ...prev,
        errors: { title: "Description length cannot exceed 500 characters" },
      }));
      return false;
    }
  };

  const onFileChange = (type: string, payload: File | null) => {
    if (!payload) return;

    let url = "";

    switch (type) {
      case "thumbnail":
        url = URL.createObjectURL(payload);

        // Cleanup to prevent memory leaks
        if (formData.thumbnail) URL.revokeObjectURL(formData.thumbnailUrl);

        setFormData((prev) => ({
          ...prev,
          thumbnailUrl: url,
          thumbnail: payload,
        }));
        break;

      case "video":
        url = URL.createObjectURL(payload);

        // Cleanup to prevent memory leaks
        if (formData.video) URL.revokeObjectURL(formData.videoUrl);

        setFormData((prev) => ({
          ...prev,
          videoUrl: url,
          video: payload,
        }));
        break;
    }
  };

  return (
    <form className="form container--600" onSubmit={submitHandler}>
      <Link className="button" to={config.backUrl}>
        Back
      </Link>
      <h1 className="title--24">{config.title}</h1>

      <FormInput
        label={`Title (${100 - (formData.title?.length || 0)})`}
        value={formData.title}
        error={formData.errors?.title}
        onChange={(e) =>
          formData.title?.length < 100 &&
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <FormTextArea
        label={`Description (${500 - (formData?.description?.length || 0)})`}
        value={formData.description}
        error={formData.errors?.description}
        onChange={(e) =>
          formData.description?.length < 500 &&
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
        <video
          className="form-thumnail-preview image"
          style={{ width: "100%", maxHeight: "300px" }}
          src={formData.videoUrl}
          controls
        />
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
