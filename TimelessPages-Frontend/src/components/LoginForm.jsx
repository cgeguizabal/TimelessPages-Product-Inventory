import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/services/auth";
import useAuthStore from "../store/auth";

function LoginForm() {
  const navigate = useNavigate();

  //Zustand login
  const loginUser = useAuthStore((state) => state.login);

  //Form State
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: null });
  };

  const validate = () => {
    const newErrors = {};

    //Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    //Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    //Return the new errors object from above
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({}); //Clear previous errors
    const frontendErrors = validate(); // Validate form fields
    if (Object.keys(frontendErrors).length > 0) {
      setError(frontendErrors);
      return;
    }

    setLoading(true);
    try {
      const result = await login(formData);

      loginUser(result.user, result.token); // Update Zustand store

      alert("Login successful!");

      setFormData({
        email: "",
        password: "",
      });

      navigate("/home");
    } catch (error) {
      if (error?.message) {
        try {
          const backendErrors = JSON.parse(error.message);
          setError(backendErrors);
        } catch (error) {
          setError({ general: error.message });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const renderError = (field) =>
    error[field] ? (
      <p className="text-red-600 text-sm mt-1">{error[field]}</p>
    ) : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>
        {error.general && (
          <p className="text-red-600 text-center mb-4">{error.general}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                error.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                error.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {renderError("password")}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
