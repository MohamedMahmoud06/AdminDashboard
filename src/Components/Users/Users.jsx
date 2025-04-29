import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Users() {
  const userData = [
    {
      id: 1,
      name: "Mohamed Ali",
      email: "mohamed.ali@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      email: "sarah.ahmed@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Ali Hassan",
      email: "ali.hassan@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 4,
      name: "Mona Khaled",
      email: "mona.khaled@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Youssef Karim",
      email: "youssef.karim@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 6,
      name: "Nadia Tarek",
      email: "nadia.tarek@example.com",
      role: "User",
      status: "Pending",
    },
    {
      id: 7,
      name: "Omar Rami",
      email: "omar.rami@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 8,
      name: "Layla Mostafa",
      email: "layla.mostafa@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 9,
      name: "Fady Magdy",
      email: "fady.magdy@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 10,
      name: "Khaled Fawzy",
      email: "khaled.fawzy@example.com",
      role: "User",
      status: "Active",
    },
  ];

  const [users, setUsers] = useState(userData);

  const deleteUser = (userId) => {
    const updatedData = users.filter((user) => user.id !== userId);
    setUsers(updatedData);
  };

  const stopFuctionality = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
          : user
      )
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Users List</h2>
      {users.length === 0 ? (
        <p className="text-muted">No users found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      className={`badge ${
                        user.status === "Active"
                          ? "bg-success"
                          : user.status === "Inactive"
                          ? "bg-secondary"
                          : "bg-warning"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-outline-danger me-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-sm btn-outline-warning"
                      onClick={() => stopFuctionality(user.id)}
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
