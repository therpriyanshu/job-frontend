import React, { useEffect, useState } from "react";
import { getJobById, applyJob } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/jobdetails.css";

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const data = await getJobById(id);
      setJob(data || null);
    }
    load();
  }, [id]);

  if (!job) return <p className="loading">Loading job...</p>;

  const handleApply = async () => {
    const token = localStorage.getItem("token");

    // --------------------------
    // If user is NOT logged in
    // --------------------------
    if (!token) {
      alert("Please register or login before applying.");
      navigate("/register"); // ✅ FIXED
      return;
    }

    try {
      await applyJob(id);
      alert("Applied Successfully!");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Please login again to apply.");
        navigate("/login"); // ✅ FIXED
      } else {
        console.error(error);
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div className="job-details-container">
      <h1 className="job-title">{job.title}</h1>
      <p className="job-company">{job.company}</p>

      <p className="job-location">📍 {job.location}</p>
      <p className="job-salary">💰 ₹ {job.salary}</p>
      <p className="job-experience">🧑‍💻 {job.experience}</p>
      <div className="job-description">
        <p>{job.description}</p>
      </div>

      <button className="apply-btn" onClick={handleApply}>
        Apply Now
      </button>
    </div>
  );
}
