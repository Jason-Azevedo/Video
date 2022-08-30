import React, { useRef } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";

export function Create() {
  const titleRef = useRef<HTMLInputElement>(null);

  return (
    <form className="form container--600">
      <Link className="button" to="/myvideos">
        Back
      </Link>
      <h1 className="title--24">Create Video</h1>

      <p className="text--14">
        <span className="text--14 semi-bold">NOTE:</span> After creating the
        video you must fill in all the required fields on the edit page before
        you can publish it for anyone to see.
      </p>

      <FormInput
        label="Title"
        inputRef={titleRef}
        error={"Please fill in field"}
      />

      <button className="button" type="submit">
        Create
      </button>
    </form>
  );
}

export default Create;
