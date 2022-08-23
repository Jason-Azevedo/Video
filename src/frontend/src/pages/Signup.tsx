import React, { useRef } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";

export default function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

  return (
    <form className="auth-form container--500" action="">
      <h2 className="title--18 bold dim">Vidio</h2>
      <h1 className="title--24">Signup</h1>

      {/* Username */}
      <FormInput
        label="Username"
        error="Please fill in field"
        inputRef={nameRef}
      />

      {/* Email */}
      <FormInput
        label="Email"
        error="Please fill in field"
        inputRef={emailRef}
      />

      {/* Password */}
      <FormInput
        password
        label="Password"
        error="Please fill in field"
        inputRef={passRef}
      />

      {/* Confirm Password */}
      <FormInput
        password
        label="Confirm Password"
        error="Please fill in field"
        inputRef={confirmPassRef}
      />

      <p className="text--16">
        Already have an account?{" "}
        <Link className="link" to="/login">
          Log In!
        </Link>
      </p>

      <Link className="link" to="/">
        Go to home
      </Link>
      <button className="button">Sign up</button>
    </form>
  );
}
