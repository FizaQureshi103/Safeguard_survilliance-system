import React from "react";
import {
  FaCamera,
  FaEnvelope,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

import "./ProfileCard.css";

function ProfileCard({
  profile,
  editMode,
  onImageChange,
}) {
  const initials = profile.name
    ?.trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="admin-profile-identity-card">
      <div className="identity-card-top">
        <span className="identity-status">
          <span className="status-dot"></span>
          {profile.accountStatus}
        </span>

        <span className="identity-shield">
          <FaShieldAlt />
        </span>
      </div>

      <div className="admin-profile-avatar-area">
        <div className="admin-profile-avatar">
          {profile.profileImage ? (
            <img
              src={profile.profileImage}
              alt="Admin profile"
            />
          ) : (
            <span>{initials || "AD"}</span>
          )}
        </div>

        {editMode && (
          <label
            className="admin-avatar-upload"
            title="Change profile picture"
          >
            <FaCamera />

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={onImageChange}
              hidden
            />
          </label>
        )}
      </div>

      {editMode && (
        <p className="avatar-upload-hint">
          Click the camera icon to change your photo
        </p>
      )}

      <div className="admin-identity-info">
        <span className="identity-role-label">
          <FaUserShield />
          Administrator Account
        </span>

        <h2>{profile.name || "Admin"}</h2>

        <p className="identity-role">
          {profile.role}
        </p>

        <div className="identity-email">
          <FaEnvelope />
          <span>{profile.email}</span>
        </div>
      </div>

      <div className="identity-card-footer">
        <div>
          <span className="identity-footer-label">
            Account Type
          </span>
          <strong>Administrator</strong>
        </div>

        <div className="identity-footer-icon">
          <FaShieldAlt />
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;