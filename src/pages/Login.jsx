import React, { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });

      if (response.token) {
        // Save token & role
        localStorage.setItem("token", response.token);
        localStorage.setItem("userType", response.role);

        // Force Navbar update
        window.dispatchEvent(new Event("storage"));

        // Redirect based on role
        if (response.role === "admin") navigate("/admin/dashboard");
        else if (response.role === "recruiter")
          navigate("/recruiter/dashboard");
        else navigate("/profile"); // normal user
      } else {
        alert(response.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
