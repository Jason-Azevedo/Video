import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";
import { validateString } from "../validation/stringValidator";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const emailResult = validateString({ notEmpty: true }, formData.email);
    const passwordResult = validateString(
      { notEmpty: true },
      formData.password
    );

    if (emailResult.failed || passwordResult.failed) {
      setErrors({
        email: emailResult.message,
        password: passwordResult.message,
      });
      return;
    }

    // clear errors
    setErrors({ email: "", password: "" });

    // Make the login request
  };

  return (
    <form className="form container--500" onSubmit={onSubmit}>
      <h2 className="title--18 bold dim">Vidio</h2>
      <h1 className="title--24">Login</h1>

      {/* Email */}
      <FormInput
        label="Email"
        value={formData.email}
        error={errors.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />

      {/* Password */}
      <FormInput
        password
        label="Password"
        value={formData.password}
        error={errors.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
      />

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
