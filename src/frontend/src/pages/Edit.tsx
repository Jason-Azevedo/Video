import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";
import FormTextArea from "../components/inputs/FormTextArea";
import FileUploadButton from "../components/buttons/FileUploadButton";
import Checkbox from "../components/buttons/Checkbox";
import LabelCheckbox from "../components/buttons/LabelCheckbox";

export default function Edit() {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [publishVideo, setPublishVideo] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const file = e.target.files[0];

    setThumbnailUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);

      return URL.createObjectURL(file);
    });
  };

  const onVideoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const file = e.target.files[0];

    setVideoUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);

      return URL.createObjectURL(file);
    });
  };

  return (
    <form className="form container--600" onSubmit={(e) => e.preventDefault()}>
      <Link className="button" to="/myvideos">
        Back
      </Link>
      <h1 className="title--24">Edit Video</h1>

      <FormInput
        label="Title"
        inputRef={titleRef}
        error={"Please fill in field"}
      />

      <FormTextArea
        label="Description"
        inputRef={descRef}
        error={"Please fill in field"}
      />

      <div className="form-inline-heading center apart">
        <h2 className="title--18">Thumbnail</h2>

        <FileUploadButton
          accepts=".png, .jpg, .webp"
          onChange={onChangeHandler}
        />
      </div>

      {thumbnailUrl && (
        <img
          className="form-thumnail-preview image"
          style={{ width: "100%", maxHeight: "300px" }}
          src={thumbnailUrl}
        />
      )}

      <div className="form-inline-heading center apart">
        <h2 className="title--18">Video</h2>

        <FileUploadButton accepts=".mp4" onChange={onVideoChangeHandler} />
      </div>

      {videoUrl && (
        <video
          className="form-thumnail-preview image"
          style={{ width: "100%", maxHeight: "300px" }}
          src={videoUrl}
          controls
        />
      )}

      <LabelCheckbox
        label="Publish"
        checked={publishVideo}
        onChange={(e) => setPublishVideo(e)}
      />

      <button className="button submit-btn" type="submit">
        Save
      </button>
    </form>
  );
}
