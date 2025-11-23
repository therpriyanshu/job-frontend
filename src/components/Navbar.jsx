import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("userType"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("userType"));
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    window.dispatchEvent(new Event("storage"));
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">JobPortal</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Jobs</Link>
        </li>

        {!token ? (
          <>
            {/* USER AUTH */}
            <li>
              <Link to="/login">User Login</Link>
            </li>
            <li>
              <Link to="/register">User Register</Link>
            </li>

            {/* RECRUITER AUTH */}
            <li>
              <Link to="/recruiter/login">Recruiter Login</Link>
            </li>
            <li>
              <Link to="/recruiter/register">Recruiter Register</Link>
            </li>
          </>
        ) : (
          <>
            {role === "user" && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}

            {role === "recruiter" && (
              <li>
                <Link to="/recruiter/dashboard">Dashboard</Link>
              </li>
            )}

            {role === "admin" && (
              <li>
                <Link to="/admin/dashboard">Admin Panel</Link>
              </li>
            )}

            <li>
              <span
                onClick={handleLogout}
                style={{ cursor: "pointer", color: "white" }}
              >
                Logout
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
