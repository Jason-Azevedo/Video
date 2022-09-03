import React, { useRef } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";

export default function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  return (
    <form className="form container--500" action="">
      <h2 className="title--18 bold dim">Vidio</h2>
      <h1 className="title--24">Login</h1>

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

      <p className="text--16 form-alt-text">
        Don't have an account?{" "}
        <Link className="link" to="/signup">
          Create one!
        </Link>
      </p>

      <div className="form-inline center gap16">
        <Link className="link" to="/">
          Go to home
        </Link>
        <button className="button">Login</button>
      </div>
    </form>
  );
}
