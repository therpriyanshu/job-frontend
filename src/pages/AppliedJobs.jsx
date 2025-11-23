import React, { useEffect, useState } from "react";
import { getAppliedJobs } from "../services/api";
import "../styles/appliedjobs.css";

export default function AppliedJobs() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAppliedJobs();
      setApps(data.applications || []);
    }
    load();
  }, []);

  return (
    <div className="applied-container">
      <h1 className="applied-title">Jobs I've Applied To</h1>

      {apps.length === 0 ? (
        <p className="no-jobs">You haven't applied for any jobs yet.</p>
      ) : (
        <ul className="applied-list">
          {apps.map((a) => (
            <li key={a._id} className="applied-item">
              <span className="job-title">{a.job?.title}</span>
              <span className="job-status">{a.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
