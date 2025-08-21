import React, { useState } from "react";
import { registerUser } from "../api/services/auth.js";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth.js";

function RegistrationForm() {
  const navigate = useNavigate();

  //Zustand login method
  const login = useAuthStore((state) => state.login);

  //Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  //Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    else if (formData.name.length > 50)
      newErrors.name = "Name cannot exceed 50 characters";

    // Email validation
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email is invalid";
    else if (formData.email.length > 100)
      newErrors.email = "Email cannot exceed 100 characters";

    // Password validation
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    else if (formData.password.length > 50)
      newErrors.password = "Password cannot exceed 50 characters";
    else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(formData.password))
      newErrors.password =
        "Password must include at least one letter and one number";

    // Password confirmation
    if (formData.password !== formData.password_confirmation)
      newErrors.password_confirmation = "Passwords do not match";

    //Return the new errors object from above
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const frontendErrors = validate(); // Validate form fields
    if (Object.keys(frontendErrors).length > 0) {
      setErrors(frontendErrors);
      return;
    }

    setLoading(true);
    try {
      const result = await registerUser(formData);

      // Save token in localStorage and update Zustand store
      login(result.user, result.token);

      alert("Registration successful! You can now log in.");
      setFormData({
        // This resets the form
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
      navigate("/home");
    } catch (error) {
      // Backend errors
      if (error?.message) {
        try {
          const backendErrors = JSON.parse(error.message);
          setErrors(backendErrors);
        } catch {
          setErrors({ general: error.message });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Render error messages
  const renderError = (field) =>
    errors[field] ? (
      <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
    ) : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        {errors.general && (
          <p className="text-red-600 text-center mb-4">{errors.general}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
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
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password_confirmation
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {renderError("password_confirmation")}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already registered?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
