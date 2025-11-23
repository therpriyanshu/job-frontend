import React, { useEffect, useState } from "react";
import { getJobById, updateJob } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/editjob.css";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", company: "", description: "" });

  useEffect(() => {
    async function load() {
      const data = await getJobById(id);
      setForm(data.job);
    }
    load();
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const res = await updateJob(id, form);
    if (res.success) navigate("/recruiter-dashboard");
    else alert(res.message);
  };

  return (
    <div className="edit-container">
      <h1 className="edit-title">Edit Job</h1>

      <form className="edit-form" onSubmit={submit}>
        <input
          className="edit-input"
          placeholder="Job Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="edit-input"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <textarea
          className="edit-textarea"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="edit-btn">Save Changes</button>
      </form>
    </div>
  );
}
