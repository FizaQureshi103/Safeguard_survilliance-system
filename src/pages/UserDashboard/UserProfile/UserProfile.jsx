
import React, { useState } from "react";
import {
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";

import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import ProfileOverview from "../../../components/UserDashboard/UserProfile/ProfileOverview/ProfileOverview";
import ProfileInformation from "../../../components/UserDashboard/UserProfile/ProfileInformation/ProfileInformation";

import { initialUserProfile } from "../../../data/UserDashboard/userProfile";

import "./UserProfile.css";

const STORAGE_KEY = "safeguard_user_profile";

const getSavedProfile = () => {
  try {
    const savedProfile = localStorage.getItem(STORAGE_KEY);

    return savedProfile
      ? {
          ...initialUserProfile,
          ...JSON.parse(savedProfile),
        }
      : initialUserProfile;
  } catch (error) {
    console.error("Unable to load profile:", error);
    return initialUserProfile;
  }
};

function UserProfile() {
  const [profile, setProfile] = useState(getSavedProfile);

  const [originalProfile, setOriginalProfile] = useState(() =>
    JSON.parse(JSON.stringify(getSavedProfile()))
  );

  const [isEditing, setIsEditing] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // Update personal information
  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSaveMessage("");
  };

  // Upload profile image
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setSaveMessage("Please select a valid image.");
      event.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setSaveMessage("Image size must be less than 2 MB.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfile((previous) => ({
        ...previous,
        profileImage: reader.result,
      }));

      setSaveMessage("");
    };

    reader.onerror = () => {
      setSaveMessage("Unable to upload image. Please try again.");
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  // Enable editing
  const handleEdit = () => {
    setOriginalProfile(
      JSON.parse(JSON.stringify(profile))
    );

    setIsEditing(true);
    setSaveMessage("");
  };

  // Save changes
  const handleSave = () => {
    if (!profile.fullName.trim() || !profile.email.trim()) {
      setSaveMessage("Name and email are required.");
      return;
    }

    try {
      const updatedProfile = {
        ...profile,
        fullName: profile.fullName.trim(),
        email: profile.email.trim(),
      };

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedProfile)
      );

      setProfile(updatedProfile);

      setOriginalProfile(
        JSON.parse(JSON.stringify(updatedProfile))
      );

      setIsEditing(false);

      // Notify the reusable Topbar about profile changes
      window.dispatchEvent(
        new Event("safeguard-profile-updated")
      );

      setSaveMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Unable to save profile:", error);

      setSaveMessage(
        "Unable to save changes. Try using a smaller image."
      );
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setProfile(
      JSON.parse(JSON.stringify(originalProfile))
    );

    setIsEditing(false);
    setSaveMessage("");
  };

  return (
    <DashboardLayout role="user">
      <div className="user-profile-page">

        {/* Page Header */}
        <div className="profile-page-header">
          <div>
            <h1>My Profile</h1>
            <p>
              View and manage your personal and professional information.
            </p>
          </div>

          {!isEditing ? (
            <button
              type="button"
              className="profile-edit-btn"
              onClick={handleEdit}
            >
              <FaEdit />
              Edit Profile
            </button>
          ) : (
            <div className="profile-header-actions">
              <button
                type="button"
                className="profile-cancel-btn"
                onClick={handleCancel}
              >
                <FaTimes />
                Cancel
              </button>

              <button
                type="button"
                className="profile-save-btn"
                onClick={handleSave}
              >
                <FaSave />
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Feedback Message */}
        {saveMessage && (
          <div
            className={`profile-message ${
              saveMessage.includes("successfully")
                ? "success"
                : "error"
            }`}
          >
            {saveMessage}
          </div>
        )}

        {/* Profile Content */}
        <div className="user-profile-grid">
          <ProfileOverview
            profile={profile}
            isEditing={isEditing}
            onImageChange={handleImageChange}
          />

          <ProfileInformation
            profile={profile}
            isEditing={isEditing}
            onChange={handleChange}
          />
        </div>

      </div>
    </DashboardLayout>
  );
}

export default UserProfile;
