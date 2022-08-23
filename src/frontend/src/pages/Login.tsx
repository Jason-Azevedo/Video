import React, { useRef } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";

export default function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  return (
    <form className="auth-form container--500" action="">
      <h2 className="title--18 bold dim">Vidio</h2>
      <h1 className="title--24">Login</h1>

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

      <p className="text--16">
        Don't have an account?{" "}
        <Link className="link" to="/signup">
          Create one!
        </Link>
      </p>

      <Link className="link" to="/">Go to home</Link>
      <button className="button">Login</button>
    </form>
  );
}
