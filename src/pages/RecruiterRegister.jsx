import React, { useState } from "react";
import { registerRecruiter } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "../styles/recruiterRegister.css";

export default function RecruiterRegister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "recruiter",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerRecruiter(form);

    if (res.message === "Registration successful") {
      navigate("/recruiter/login");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Recruiter Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button>Create Recruiter Account</button>
      </form>
    </div>
  );
}
