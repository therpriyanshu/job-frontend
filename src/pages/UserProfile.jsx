import React, { useEffect, useState } from "react";
import { getProfile } from "../services/api";
import "../styles/userprofile.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProfile();
        console.log("PROFILE API:", data);

        // 🔥 Safe extraction — backend may return:
        // {user:{...}} OR {...} OR null
        const safeUser = data?.user || data || {};

        setUser(safeUser);
      } catch (err) {
        console.error(err);
        alert("Failed to load profile. Please login.");
      }
    }
    load();
  }, []);

  if (!user) return <p className="loading-text">Loading profile...</p>;

  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>

      <div className="profile-card">
        <p>
          <strong>Name:</strong> {user?.name || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email || "N/A"}
        </p>
        <p>
          <strong>Role:</strong> {user?.role || "N/A"}
        </p>
      </div>
    </div>
  );
}
