import React, { useEffect, useState } from "react";
import { getRecruiterJobs } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/recruiterdashboard.css";

export default function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getRecruiterJobs();
      setJobs(data?.jobs || data || []);
    }
    load();
  }, []);

  return (
    <div className="rd-container">
      <div className="rd-header">
        <h1 className="rd-title">Recruiter Dashboard</h1>

        <Link to="/recruiter/post-job" className="rd-post-btn">
          + Post New Job
        </Link>
      </div>

      <div className="rd-job-list">
        {jobs.map((job) => (
          <div key={job._id} className="rd-job-card">
            <h3 className="rd-job-title">{job.title}</h3>

            <Link to={`/edit-job/${job._id}`} className="rd-edit-link">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
