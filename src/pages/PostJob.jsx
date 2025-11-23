import React, { useState } from "react";
import { createJob } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/postjob.css";

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    salary: "",
    location: "",
    description: "",
    jobType: "",
    experience: "",
    skillsRequired: "",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const res = await createJob(form);

    if (res.success) {
      alert("Job posted successfully!");
      navigate("/recruiter/dashboard");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="postjob-container">
      <h1 className="postjob-title">Post a New Job</h1>

      <form className="postjob-form" onSubmit={submit}>
        <input
          className="postjob-input"
          placeholder="Job Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="postjob-input"
          placeholder="Company"
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <input
          className="postjob-input"
          placeholder="Salary"
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />

        <input
          className="postjob-input"
          placeholder="Location"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <input
          className="postjob-input"
          placeholder="Job Type (Full-time/Part-time)"
          onChange={(e) => setForm({ ...form, jobType: e.target.value })}
        />

        <input
          className="postjob-input"
          placeholder="Experience (Fresher/1 year/2 year)"
          onChange={(e) => setForm({ ...form, experience: e.target.value })}
        />

        <input
          className="postjob-input"
          placeholder="Skills (comma separated)"
          onChange={(e) => setForm({ ...form, skillsRequired: e.target.value })}
        />

        <textarea
          className="postjob-textarea"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="postjob-btn">Submit</button>
      </form>
    </div>
  );
}
