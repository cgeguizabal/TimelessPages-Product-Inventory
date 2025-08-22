import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/services/auth";
import useAuthStore from "../store/auth";
import loginStyles from "../styles/components/login.module.scss";

function LoginForm() {
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.login);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: null });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    const frontendErrors = validate();
    if (Object.keys(frontendErrors).length > 0) {
      setError(frontendErrors);
      return;
    }

    setLoading(true);
    try {
      const result = await login(formData);
      loginUser(result.user, result.token);
      navigate("/home");
    } catch (err) {
      if (err?.message) {
        try {
          const backendErrors = JSON.parse(err.message);
          setError(backendErrors);
        } catch {
          setError({ general: err.message });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const renderError = (field) =>
    error[field] ? <p className={loginStyles.error}>{error[field]}</p> : null;

  return (
    <div className={loginStyles.page_wrapper}>
      <div className={loginStyles.form_container}>
        <h2 className={loginStyles.title}>Log In</h2>
        {error.general && (
          <p className={loginStyles.error_general}>{error.general}</p>
        )}
        <form onSubmit={handleSubmit} className={loginStyles.form}>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${loginStyles.input} ${
                error.email ? loginStyles.inputError : ""
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
              className={`${loginStyles.input} ${
                error.password ? loginStyles.inputError : ""
              }`}
            />
            {renderError("password")}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={loginStyles.button}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className={loginStyles.register_text}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
