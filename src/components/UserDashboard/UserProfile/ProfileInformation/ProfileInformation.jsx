
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaClock,
  FaIdBadge,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./ProfileInformation.css";

function ProfileInformation({
  profile,
  isEditing,
  onChange,
}) {
  const personalFields = [
    {
      name: "fullName",
      label: "Full Name",
      icon: <FaUser />,
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      icon: <FaEnvelope />,
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      icon: <FaPhone />,
      type: "tel",
    },
    {
      name: "emergencyContact",
      label: "Emergency Contact",
      icon: <FaPhone />,
      type: "tel",
    },
  ];

  return (
    <div className="profile-information">

      {/* Personal Information */}
      <section className="profile-info-section">

        <div className="profile-section-heading">
          <div>
            <h2>Personal Information</h2>
            <p>Manage your personal contact details</p>
          </div>
        </div>

        <div className="profile-fields-grid">
          {personalFields.map((field) => (
            <div className="profile-field" key={field.name}>
              <label htmlFor={field.name}>
                {field.label}
              </label>

              <div className={`profile-input-wrapper ${
                isEditing ? "editing" : ""
              }`}>
                <span className="profile-field-icon">
                  {field.icon}
                </span>

                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={profile[field.name] || ""}
                  onChange={onChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Information */}
      <section className="profile-info-section">

        <div className="profile-section-heading">
          <div>
            <h2>Work Information</h2>
            <p>Your account and employment details</p>
          </div>
          <span className="readonly-label">Admin Managed</span>
        </div>

        <div className="profile-fields-grid">

          <div className="profile-field">
            <label>Employee ID</label>
            <div className="profile-readonly-field">
              <FaIdBadge />
              <span>{profile.employeeId}</span>
            </div>
          </div>

          <div className="profile-field">
            <label>Department</label>
            <div className="profile-readonly-field">
              <FaBuilding />
              <span>{profile.department}</span>
            </div>
          </div>

          <div className="profile-field">
            <label>Role</label>
            <div className="profile-readonly-field">
              <FaUser />
              <span>{profile.role}</span>
            </div>
          </div>

          <div className="profile-field">
            <label>Work Shift</label>
            <div className="profile-readonly-field">
              <FaClock />
              <span>{profile.shift}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Assigned Areas */}
      <section className="profile-info-section">

        <div className="profile-section-heading">
          <div>
            <h2>Assigned Areas</h2>
            <p>Locations currently under your supervision</p>
          </div>
        </div>

        <div className="profile-assigned-areas">
          {profile.assignedAreas.map((area) => (
            <div className="profile-area-item" key={area.id}>
              <div className="profile-area-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="profile-area-info">
                <h3>{area.name}</h3>
                <p>{area.floor} · {area.camera}</p>
              </div>

              <span className="profile-area-status">
                Assigned
              </span>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default ProfileInformation;
