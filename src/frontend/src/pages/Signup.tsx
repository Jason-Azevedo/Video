import React, { useRef } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";

export default function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

  return (
    <form className="form container--500" action="">
      <h2 className="title--18 bold dim">Vidio</h2>
      <h1 className="title--24">Signup</h1>

      {/* Username */}
      {/* <FormInput
        label="Username"
        error="Please fill in field"
        onChange={console.log}
      /> */}

      {/* Email */}
      {/* <FormInput
        label="Email"
        error="Please fill in field"
        onChange={console.log}
      /> */}

      {/* Password */}
      {/* <FormInput
        password
        label="Password"
        error="Please fill in field"
        onChange={console.log}
      /> */}

      {/* Confirm Password */}
      {/* <FormInput
        password
        label="Confirm Password"
        error="Please fill in field"
        onChange={console.log}
      /> */}

      <p className="text--16 form-alt-text">
        Already have an account?{" "}
        <Link className="link" to="/login">
          Log In!
        </Link>
      </p>

      <div className="form-inline center gap16">
        <Link className="link" to="/">
          Go to home
        </Link>
        <button className="button">Sign up</button>
      </div>
    </form>
  );
}
