import React, { useState } from "react";
import AdminProfile from '../../../assets/admin.png'
import toast from 'react-hot-toast';
import {
  FaLock,
  FaUserCircle,
  FaBell,
  FaShieldAlt,
  FaPen,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import "./Profile.css";
import DashboardLayout from "../Layout/DashboardLayout";



function Profile() {

  const [profile, setProfile] = useState({
    name: "Admin",
    role: "Super Admin",
    email: "admin@system.com",
    phone: "+92 300 1234567",
  });

  const [editMode, setEditMode] = useState(false);

//  PASSWORD STATE

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  /* PROFILE INPUT HANDLER */

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* UPDATE PROFILE*/

  const handleUpdateProfile = () => {
    if (editMode) {
      setEditMode(false);

      toast.success("Profile updated successfully!");
    } else {
      setEditMode(true);
    }
  };
  /*PASSWORD INPUT HANDLE */

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setPasswordError("");
  };

  /*CHANGE PASSWORD*/

  const handleChangePassword = () => {
    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      setPasswordError("Please fill all password fields.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setPasswordError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    toast.success("Password changed successfully!");

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setPasswordError("");

    setShowPasswordModal(false);
  };

  /*ACTIVITY DATA*/

  const activities = [
    {
      id: 1,
      icon: <FaLock />,
      title: "Logged In",
      time: "May 22, 10:30 AM",
    },
    {
      id: 2,
      icon: <FaUserCircle />,
      title: "Viewed Dashboard",
      time: "May 22, 10:41 AM",
    },
    {
      id: 3,
      icon: <FaBell />,
      title: "Checked Alerts",
      time: "May 22, 10:50 AM",
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Set WhatsApp Alert",
      time: "May 22, 11:02 AM",
    },
  ];

  return (

    <DashboardLayout>
         <>
      <main className="profile-page">

        {/* <div className="profile-page-header">
            <h1>My Profile</h1>
        </div> */}

        {/*PROFILE CONTENT*/}
        <div className="profile-content">
          <section className="admin-profile-card">
            {/* Profile Top */}
            <div className="admin-profile-top">
              <div className="admin-avatar-wrapper">
                <img
                  src={AdminProfile}
                  alt="Admin profile"
                  className="admin-avatar"
                />
              </div>
              <div className="admin-info">
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className="profile-edit-input profile-name-input"
                  />
                ) : (
                  <h2>{profile.name}</h2>
                )}

                <p className="admin-role">
                  {profile.role}
                </p>

                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className="profile-edit-input"
                  />
                ) : (
                  <p className="admin-email">
                    {profile.email}
                  </p>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="profile-divider"></div>

            {/* PHONE*/}
            <div className="profile-section">
              <h3>Phone</h3>
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  className="profile-edit-input phone-input"
                />
              ) : (
                <p>{profile.phone}</p>
              )}
            </div>

            {/* Divider */}
            <div className="profile-divider"></div>

            {/* PASSWORD*/}
            <div className="profile-section password-section">
              <div className="password-header">
                <h3>Password</h3>

                <button
                  type="button"
                  className="password-edit-btn"
                  onClick={() =>
                    setShowPasswordModal(true)
                  }
                  aria-label="Edit password"
                >
                  <FaPen />
                </button>
              </div>

              <div className="password-row">
                <span className="password-dots">
                  •••••••••
                </span>

                <button
                  type="button"
                  className="change-password-btn"
                  onClick={() =>
                    setShowPasswordModal(true)
                  }
                >
                  Change Password
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="profile-divider"></div>

            {/* UPDATE PROFILE BUTTON*/}

            <button
              type="button"
              className={`update-profile-btn ${
                editMode ? "save-mode" : ""
              }`}
              onClick={handleUpdateProfile}
            >
              {editMode ? (
                <>
                  <FaCheck /> Save Profile
                </>
              ) : (
                "Update Profile"
              )}
            </button>
          </section>
          
        </div>
      </main>

      {/*CHANGE PASSWORD MODAL*/}

      {showPasswordModal && (
        <div
          className="password-modal-overlay"
          onClick={() =>
            setShowPasswordModal(false)
          }
        >

          <div
            className="password-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* Modal Header */}
            <div className="password-modal-header">
              <h2>Change Password</h2>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() =>
                  setShowPasswordModal(false)
                }
              >
                <FaTimes />
              </button>

            </div>
            {/* Current Password */}
            <div className="password-input-group">
                <label> Current Password </label>

                <input
                    type="password"
                    name="currentPassword"
                    value={
                    passwordData.currentPassword
                    }
                    onChange={handlePasswordChange}
                    placeholder="Enter current password"
                />
            </div>

            {/* New Password */}
            <div className="password-input-group">
                <label> New Password </label>
                <input
                    type="password"
                    name="newPassword"
                    value={
                    passwordData.newPassword
                    }
                    onChange={handlePasswordChange}
                    placeholder="Enter new password"
                />
            </div>

            {/* Confirm Password */}
            <div className="password-input-group">
                <label> Confirm Password </label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={
                    passwordData.confirmPassword
                    }
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                />
            </div>
            {/* Error */}

            {passwordError && (
              <p className="password-error">
                {passwordError}
              </p>
            )}
            {/* Modal Actions */}
            <div className="password-modal-actions">

              <button
                type="button"
                className="cancel-password-btn"
                onClick={() =>
                  setShowPasswordModal(false)
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="save-password-btn"
                onClick={handleChangePassword}
              >
                Change Password
              </button>

            </div>

          </div>

        </div>
      )}
    </>
    </DashboardLayout>
   
  );
};

export default Profile;