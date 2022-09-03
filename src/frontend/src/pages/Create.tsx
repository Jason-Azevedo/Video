import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";
import FormTextArea from "../components/inputs/FormTextArea";
import VideoForm from "../components/video/VideoForm";
import FileUploadButton from "../components/buttons/FileUploadButton";
import { IVideoFormState } from "../components/video/VideoForm";

export function Create() {
  return (
    <>
      <VideoForm
        config={{
          title: "Create Video",
          backUrl: "/myvideos",
          submitButtonText: "create",
        }}
        onSubmit={console.log}
      />
    </>
  );
}

export default Create;
