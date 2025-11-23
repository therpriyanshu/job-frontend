import React, { useState } from "react";
import { loginRecruiter } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function RecruiterLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await loginRecruiter({ email, password, role: "recruiter" });

    if (res.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("userType", "recruiter");

      window.dispatchEvent(new Event("storage"));
      navigate("/recruiter/dashboard");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Recruiter Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  );
}
