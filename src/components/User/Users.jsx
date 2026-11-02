import React, { useState } from "react";
import DashboardLayout from "../Dashboard/Layout/DashboardLayout";
import {
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./Users.css";

const initialUsers = [
  {
    id: 1,
    name: "Admin",
    email: "admin@safeguard.com",
    role: "Super Admin",
    status: "Active",
    lastLogin: "May 23, 10:40 AM",
  },
  {
    id: 2,
    name: "Ali Khan",
    email: "ali@safeguard.com",
    role: "Security Head",
    status: "Active",
    lastLogin: "May 22, 11:20 AM",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    email: "sara@safeguard.com",
    role: "Operator",
    status: "Active",
    lastLogin: "May 21, 01:15 AM",
  },
  {
    id: 4,
    name: "Bilal Hussain",
    email: "bilal@safeguard.com",
    role: "Operator",
    status: "Inactive",
    lastLogin: "May 20, 08:40 PM",
  },
  {
    id: 5,
    name: "Zainab Fatima",
    email: "zainab@safeguard.com",
    role: "Viewer",
    status: "Active",
    lastLogin: "May 21, 11:30 AM",
  },

  
];

function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Operator",
    status: "Active",
    lastLogin: "Just now",
  });

  /*ADD USER*/
  const handleAddUser = () => {
    setEditingUser(null);

    setFormData({
      name: "",
      email: "",
      role: "Operator",
      status: "Active",
      lastLogin: "Just now",
    });

    setShowModal(true);
  };

  /*EDIT USER*/

  const handleEdit = (user) => {
    setEditingUser(user);

    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      lastLogin: user.lastLogin,
    });

    setShowModal(true);
  };

  /*DELETE USER */

  const handleDelete = (id) => {
    setUsers((prev) =>
      prev.filter((user) => user.id !== id)
    );
  };

  /* INPUT CHANGE */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* SAVE USER*/

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                ...formData,
              }
            : user
        )
      );
    } else {
      const newUser = {
        id: Date.now(),
        ...formData,
      };

      setUsers((prev) => [
        ...prev,
        newUser,
      ]);
    }

    setShowModal(false);
  };

  return (
    <DashboardLayout>
    <div className="users-page">

      {/* ================= HEADER ================= */}

      <div className="users-header">

        <div>
          <h1>Users</h1>
        </div>

        <button
          className="add-user-btn"
          onClick={handleAddUser}
        >
          <FaPlus />
          <span>Add User</span>
        </button>

      </div>


      {/* ================= USER TABLE ================= */}

      <div className="users-card">

        <div className="users-table-wrapper">

          <table className="users-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  {/* NAME */}

                  <td>
                    <span className="user-name">
                      {user.name}
                    </span>
                  </td>


                  {/* EMAIL */}

                  <td>
                    <span className="user-email">
                      {user.email}
                    </span>
                  </td>


                  {/* ROLE */}

                  <td>
                    <span className="user-role">
                      {user.role}
                    </span>
                  </td>


                  {/* STATUS */}

                  <td>

                    <span
                      className={`user-status ${
                        user.status.toLowerCase()
                      }`}
                    >
                      <span className="status-dot"></span>

                      {user.status}
                    </span>

                  </td>


                  {/* LAST LOGIN */}

                  <td>
                    <span className="last-login">
                      {user.lastLogin}
                    </span>
                  </td>


                  {/* ACTION */}

                  <td>

                    <div className="user-actions">

                      <button
                        className="user-edit-btn"
                        title="Edit User"
                        onClick={() =>
                          handleEdit(user)
                        }
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="user-delete-btn"
                        title="Delete User"
                        onClick={() =>
                          handleDelete(user.id)
                        }
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* ================= MODAL ================= */}

      {showModal && (

        <div
          className="user-modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="user-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="user-modal-header">

              <div>
                <h2>
                  {editingUser
                    ? "Edit User"
                    : "Add New User"}
                </h2>

                <p>
                  {editingUser
                    ? "Update user information."
                    : "Create a new system user."}
                </p>
              </div>

              <button
                className="user-modal-close"
                onClick={() =>
                  setShowModal(false)
                }
              > X
              </button>

            </div>


            <form
              className="user-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="user-form-group">

                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter user name"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="user-form-group">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />

              </div>


              {/* ROLE */}

              <div className="user-form-group">

                <label>Role</label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="Super Admin">
                    Super Admin
                  </option>

                  <option value="Security Head">
                    Security Head
                  </option>

                  <option value="Operator">
                    Operator
                  </option>

                  <option value="Viewer">
                    Viewer
                  </option>
                </select>

              </div>


              {/* STATUS */}

              <div className="user-form-group">

                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </select>

              </div>


              {/* BUTTONS */}

              <div className="user-form-actions">

                <button
                  type="button"
                  className="user-cancel-btn"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="user-save-btn"
                >
                  {editingUser
                    ? "Save Changes"
                    : "Add User"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
    </DashboardLayout>
  );
}

export default Users;