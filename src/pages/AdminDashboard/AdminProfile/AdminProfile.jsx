
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaEdit,
  FaCheck,
  FaTimes,
  FaUserCog,
} from "react-icons/fa";

import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import ProfileCard from "../../../components/Dashboard/Profile/ProfileCard/ProfileCard";
import ProfileDetails from "../../../components/Dashboard/Profile/ProfileDetails/ProfileDetails";
import ChangePasswordModal from "../../../components/Dashboard/Profile/ProfileChangePasswordModal/ProfileChangePasswordModal";

import { initialAdminProfile } from "../../../data/adminProfile";

import "./AdminProfile.css";

const STORAGE_KEY = "safeguard_admin_profile";

const initialPasswordData = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const getSavedProfile = () => {
  try {
    const savedProfile = localStorage.getItem(STORAGE_KEY);

    if (savedProfile) {
      return {
        ...initialAdminProfile,
        ...JSON.parse(savedProfile),
      };
    }
  } catch (error) {
    console.error("Unable to load admin profile:", error);
  }

  return initialAdminProfile;
};

function AdminProfile() {
  const [profile, setProfile] = useState(getSavedProfile);

  const [originalProfile, setOriginalProfile] = useState(
    () => ({ ...getSavedProfile() })
  );

  const [editMode, setEditMode] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [passwordData, setPasswordData] = useState(
    initialPasswordData
  );

  const [passwordError, setPasswordError] = useState("");

  // Update profile fields
  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Upload and preview profile image
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      e.target.value = "";
      return;
    }

    if (file.size > 1.5 * 1024 * 1024) {
      toast.error("Image size must be less than 1.5 MB.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfile((previous) => ({
        ...previous,
        profileImage: reader.result,
      }));

      toast.success("Profile picture preview updated.");
      e.target.value = "";
    };

    reader.onerror = () => {
      toast.error("Unable to read this image.");
      e.target.value = "";
    };

    reader.readAsDataURL(file);
  };

  // Enter edit mode
  const handleEdit = () => {
    setOriginalProfile({ ...profile });
    setEditMode(true);
  };

  // Save profile
  const handleSave = () => {
    const trimmedName = profile.name?.trim() || "";
    const trimmedEmail = profile.email?.trim() || "";
    const trimmedPhone = profile.phone?.trim() || "";

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      toast.error("Please fill in all profile fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const updatedProfile = {
      ...profile,
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
    };

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedProfile)
      );

      setProfile(updatedProfile);
      setOriginalProfile({ ...updatedProfile });
      setEditMode(false);

      // Notify the reusable Topbar about profile changes
      window.dispatchEvent(
        new Event("safeguard-profile-updated")
      );

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Unable to save profile:", error);

      toast.error(
        "Unable to save profile. Try using a smaller image."
      );
    }
  };

  // Cancel edit and restore previous data
  const handleCancel = () => {
    setProfile({ ...originalProfile });
    setEditMode(false);

    toast.success("Changes discarded.");
  };

  // Password input handler
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswordData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setPasswordError("");
  };

  // Close password modal
  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordData({ ...initialPasswordData });
    setPasswordError("");
  };

  // Validate password form
  const handleChangePassword = () => {
    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = passwordData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Please fill in all password fields.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError(
        "New password must contain at least 8 characters."
      );
      return;
    }

    if (newPassword === currentPassword) {
      setPasswordError(
        "New password must be different from the current password."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    // Demo validation only. Backend API is required
    // to securely verify and update the actual password.
    toast.success("Password form validated successfully.");

    handleClosePasswordModal();
  };

  return (
    <DashboardLayout role="admin">
      <main className="admin-profile-page">

        {/* Page Header */}
        <div className="admin-profile-page-header">
          <div className="admin-profile-page-title">
            <span className="admin-profile-page-icon">
              <FaUserCog />
            </span>

            <div>
              <h1>My Profile</h1>
              <p>
                Manage your personal information and account security.
              </p>
            </div>
          </div>

          {!editMode ? (
            <button
              type="button"
              className="admin-profile-edit-btn"
              onClick={handleEdit}
            >
              <FaEdit />
              Edit Profile
            </button>
          ) : (
            <div className="admin-profile-header-actions">
              <button
                type="button"
                className="admin-profile-cancel-btn"
                onClick={handleCancel}
              >
                <FaTimes />
                Cancel
              </button>

              <button
                type="button"
                className="admin-profile-save-btn"
                onClick={handleSave}
              >
                <FaCheck />
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Profile Layout */}
        <div className="admin-profile-layout">
          <ProfileCard
            profile={profile}
            editMode={editMode}
            onImageChange={handleImageChange}
          />

          <ProfileDetails
            profile={profile}
            editMode={editMode}
            onChange={handleProfileChange}
            onChangePassword={() => setShowPasswordModal(true)}
          />
        </div>

        {/* Edit Mode Information */}
        {editMode && (
          <div className="admin-profile-edit-notice">
            <FaEdit />
            <span>
              You are editing your profile. Save your changes or
              cancel to restore the previous information.
            </span>
          </div>
        )}

        {/* Password Modal */}
        {showPasswordModal && (
          <ChangePasswordModal
            passwordData={passwordData}
            passwordError={passwordError}
            onChange={handlePasswordChange}
            onClose={handleClosePasswordModal}
            onSubmit={handleChangePassword}
          />
        )}

      </main>
    </DashboardLayout>
  );
}

export default AdminProfile;
