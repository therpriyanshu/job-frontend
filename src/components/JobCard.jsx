import "../styles/jobcard.css";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>

      <p className="location">📍 {job.location || "Not Provided"}</p>
      <p className="salary">💰 ₹ {job.salary || "Not Provided"}</p>
      <p className="experience">🧑‍💻 {job.experience || "Fresher / NA"}</p>

      <Link className="view-btn" to={`/job/${job._id}`}>
        View Details
      </Link>
    </div>
  );
}
