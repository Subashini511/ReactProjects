import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!formData.username || !formData.password) {
      setError("Both fields are required.");
      setSuccess(false);
      return;
    }

    // Clear errors and show success message
    setError("");
    setSuccess(true);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        {/* Username Field */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "10px", fontSize: "16px" }}
        />

        {/* Password Field */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ margin: "10px 0", padding: "10px", fontSize: "16px" }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            margin: "20px 0",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>

      {/* Error or Success Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Sign in successful!</p>}
    </div>
  );
};

export default SignIn;
