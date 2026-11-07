import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaPen,
  FaShieldAlt,
} from "react-icons/fa";

import "./ProfileDetails.css";

function ProfileDetails({
  profile,
  editMode,
  onChange,
  onChangePassword,
}) {
  const fields = [
    {
      name: "name",
      label: "Full Name",
      icon: <FaUser />,
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email Address",
      icon: <FaEnvelope />,
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "phone",
      label: "Phone Number",
      icon: <FaPhone />,
      type: "tel",
      placeholder: "Enter your phone number",
    },
  ];

  return (
    <section className="admin-profile-details-card">
      <div className="profile-details-heading">
        <div>
          <h2>Personal Information</h2>
          <p>Manage your administrator account details.</p>
        </div>

        <span className="details-heading-icon">
          <FaUser />
        </span>
      </div>

      <div className="profile-details-fields">
        {fields.map((field) => (
          <div className="profile-detail-field" key={field.name}>
            <label htmlFor={`admin-${field.name}`}>
              {field.label}
            </label>

            <div
              className={`profile-detail-input-wrapper ${
                editMode ? "is-editing" : ""
              }`}
            >
              <span className="profile-detail-field-icon">
                {field.icon}
              </span>

              <input
                id={`admin-${field.name}`}
                type={field.type}
                name={field.name}
                value={profile[field.name] || ""}
                onChange={onChange}
                placeholder={field.placeholder}
                readOnly={!editMode}
              />

              {editMode && (
                <span className="field-edit-indicator">
                  <FaPen />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="profile-details-divider"></div>

      <div className="profile-security-heading">
        <div className="security-heading-icon">
          <FaLock />
        </div>

        <div>
          <h3>Account Security</h3>
          <p>Keep your administrator account secure.</p>
        </div>
      </div>

      <div className="password-detail-row">
        <div className="password-detail-info">
          <div className="password-detail-icon">
            <FaLock />
          </div>

          <div>
            <strong>Password</strong>
            <span>••••••••••</span>
          </div>
        </div>

        <button
          type="button"
          className="change-password-action"
          onClick={onChangePassword}
        >
          Change Password
        </button>
      </div>

      <div className="profile-security-note">
        <FaShieldAlt />
        <span>
          Your account information should be kept up to date.
        </span>
      </div>
    </section>
  );
}

export default ProfileDetails;