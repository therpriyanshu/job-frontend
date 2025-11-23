import React, { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../services/api";
import "../styles/admindashboard.css"; // external css

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAllUsers();
      setUsers(data.users);
    }
    load();
  }, []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button
                  onClick={() => deleteUser(u._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
