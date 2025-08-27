import React, { useState } from "react";
import { registerUser } from "../api/services/auth.js";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth.js";
import regStyles from "../styles/components/registration.module.scss";

function RegistrationForm() {
  const navigate = useNavigate();

  // Get the login function from the auth store
  const login = useAuthStore((state) => state.login);

  //form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  // Form validation method
  const validate = () => {
    // new errors object
    const newErrors = {};

    //name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    else if (formData.name.length > 50)
      newErrors.name = "Name cannot exceed 50 characters";

    // email validation
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email is invalid";
    else if (formData.email.length > 100)
      newErrors.email = "Email cannot exceed 100 characters";

    // password validation
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    else if (formData.password.length > 50)
      newErrors.password = "Password cannot exceed 50 characters";
    else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password))
      newErrors.password =
        "Password must include at least one letter and one number";

    // password confirmation validation
    if (formData.password !== formData.password_confirmation)
      newErrors.password_confirmation = "Passwords do not match";

    return newErrors;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); //resets form errors
    const frontendErrors = validate();
    if (Object.keys(frontendErrors).length > 0) {
      setErrors(frontendErrors);
      return;
    }

    setLoading(true);
    try {
      // Call the registerUser API function
      const result = await registerUser(formData);

      // If registration is successful, log in the user
      login(result.user, result.token);

      // Redirect to the home page
      navigate("/home");
    } catch (error) {
      if (error?.errors) {
        // Laravel validation errors
        setErrors(
          Object.fromEntries(
            Object.entries(error.errors).map(([field, msgs]) => [
              field,
              msgs[0],
            ])
          )
        );
      } else if (error?.message) {
        setErrors({ general: error.message });
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    } finally {
      setLoading(false);
    }
  };

  // Error rendering method
  const renderError = (field) =>
    errors[field] ? <p className={regStyles.error}>{errors[field]}</p> : null;

  return (
    /*  // Registration Form alternative
    <div className={regStyles.page_wrapper}>
      <div className={regStyles.form_container}>
        <h2 className={regStyles.title}>Create Account</h2>
        {errors.general && (
          <p className={regStyles.error_general}>{errors.general}</p>
        )}
        <form onSubmit={handleSubmit} className={regStyles.form}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`${regStyles.input} ${
                errors.name ? regStyles.inputError : ""
              }`}
            />
            {renderError("name")}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${regStyles.input} ${
                errors.email ? regStyles.inputError : ""
              }`}
            />
            {renderError("email")}
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`${regStyles.input} ${
                errors.password ? regStyles.inputError : ""
              }`}
            />
            {renderError("password")}
          </div>

          <div>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`${regStyles.input} ${
                errors.password_confirmation ? regStyles.inputError : ""
              }`}
            />
            {renderError("password_confirmation")}
          </div>

          <button type="submit" disabled={loading} className={regStyles.button}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className={regStyles.register_text}>
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>*/

    // New Registration Form
    <div className={regStyles.page_wrapper_v2}>
      <div className={regStyles.form_container_v2}>
        <div className={regStyles.leftside}>
          <div className={regStyles.image_container}>
            <img
              className={regStyles.cover_image}
              src="coverImage3.jpg"
              alt="Cover Image"
            />
            <div className={regStyles.logo_container}>
              <img src="timelessPages.png" alt="Timeless Pages logo " />
            </div>
          </div>
        </div>
        <div className={regStyles.rightside}>
          <h2 className={regStyles.title}>Create Account</h2>
          {errors.general && (
            <p className={regStyles.error_general}>{errors.general}</p>
          )}
          <form onSubmit={handleSubmit} className={regStyles.form}>
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`${regStyles.input} ${
                  errors.name ? regStyles.inputError : ""
                }`}
              />
              {renderError("name")}
            </div>
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`${regStyles.input} ${
                  errors.email ? regStyles.inputError : ""
                }`}
              />
              {renderError("email")}
            </div>
            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`${regStyles.input} ${
                  errors.password ? regStyles.inputError : ""
                }`}
              />
              {renderError("password")}
            </div>

            {/* password_confirmation */}
            <div>
              <input
                type="password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleChange}
                placeholder="Confirm Password"
                className={`${regStyles.input} ${
                  errors.password_confirmation ? regStyles.inputError : ""
                }`}
              />
              {renderError("password_confirmation")}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={regStyles.button}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <p className={regStyles.register_text}>
            Already registered? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
