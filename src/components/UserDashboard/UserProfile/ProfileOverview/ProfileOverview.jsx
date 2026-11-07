
import React from "react";
import {
  FaUserShield,
  FaEnvelope,
  FaPhone,
  FaIdBadge,
  FaMapMarkerAlt,
  FaCamera,
} from "react-icons/fa";

import "./ProfileOverview.css";

function ProfileOverview({
  profile,
  isEditing,
  onImageChange,
}) {
  const initials = profile.fullName
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section className="profile-overview">

      <div className="profile-avatar-wrapper">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt="Profile"
            className="profile-avatar-image"
          />
        ) : (
          <div className="profile-avatar">
            {initials || <FaUserShield />}
          </div>
        )}

        {isEditing && (
          <label
            className="profile-image-edit"
            title="Change profile picture"
          >
            <FaCamera />
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
              hidden
            />
          </label>
        )}
      </div>

      {isEditing && (
        <p className="profile-image-hint">
          Click camera icon to change photo
        </p>
      )}

      <h2>{profile.fullName}</h2>
      <p className="profile-role">{profile.role}</p>

      <span className="profile-account-status">
        <span></span>
        {profile.accountStatus}
      </span>

      <div className="profile-overview-divider"></div>

      <div className="profile-overview-details">

        <div className="profile-overview-item">
          <FaIdBadge />
          <div>
            <span>Employee ID</span>
            <strong>{profile.employeeId}</strong>
          </div>
        </div>

        <div className="profile-overview-item">
          <FaEnvelope />
          <div>
            <span>Email Address</span>
            <strong>{profile.email}</strong>
          </div>
        </div>

        <div className="profile-overview-item">
          <FaPhone />
          <div>
            <span>Phone Number</span>
            <strong>{profile.phone}</strong>
          </div>
        </div>

        <div className="profile-overview-item">
          <FaMapMarkerAlt />
          <div>
            <span>Assigned Locations</span>
            <strong>{profile.assignedAreas.length} Areas</strong>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProfileOverview;
