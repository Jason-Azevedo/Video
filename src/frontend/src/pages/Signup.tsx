import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../components/inputs/FormInput";
import { validateString } from "../validation/stringValidator";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const usernameResult = validateString(
      { notEmpty: true },
      formData.username
    );
    const emailResult = validateString({ notEmpty: true }, formData.email);
    const passwordResult = validateString(
      { notEmpty: true },
      formData.password
    );
    const confirmPasswordResult = validateString(
      { notEmpty: true },
      formData.confirmPassword
    );

    if (
      usernameResult.failed ||
      emailResult.failed ||
      passwordResult.failed ||
      confirmPasswordResult.failed
    ) {
      return setErrors({
        username: usernameResult.message,
        email: emailResult.message,
        password: passwordResult.message,
        confirmPassword: confirmPasswordResult.message,
      });
    }

    if (formData.password !== formData.confirmPassword) {
      return setErrors({
        username: "",
        email: "",
        password: "Passwords don't match",
        confirmPassword: "Passwords don't match",
      });
    }

    // Submit the data
  };

  return (
    <form className="form container--500" onSubmit={onSubmit}>
      <h2 className="title--18 bold dim">Vidio</h2>
      <h1 className="title--24">Signup</h1>

      {/* Username */}
      <FormInput
        label="Username"
        value={formData.username}
        error={errors.username}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, username: e.target.value }))
        }
      />

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

      {/* Confirm Password */}
      <FormInput
        password
        label="Confirm Password"
        value={formData.confirmPassword}
        error={errors.confirmPassword}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))
        }
      />

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
