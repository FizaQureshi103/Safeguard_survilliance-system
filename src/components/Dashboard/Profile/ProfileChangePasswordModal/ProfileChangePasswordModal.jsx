import React from "react";
import { FaTimes, FaLock } from "react-icons/fa";

import "./ProfileChangePasswordModal.css";

function ChangePasswordModal({
  passwordData,
  passwordError,
  onChange,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className="admin-password-overlay"
      onClick={onClose}
    >
      <div
        className="admin-password-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="admin-password-modal-header">
          <div className="admin-password-title">
            <span>
              <FaLock />
            </span>

            <div>
              <h2>Change Password</h2>
              <p>Update your account password.</p>
            </div>
          </div>

          <button
            type="button"
            className="admin-password-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
        </div>

        <div className="admin-password-fields">
          <div className="admin-password-input-group">
            <label>Current Password</label>

            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={onChange}
              placeholder="Enter current password"
              autoComplete="current-password"
            />
          </div>

          <div className="admin-password-input-group">
            <label>New Password</label>

            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={onChange}
              placeholder="Enter new password"
              autoComplete="new-password"
            />
          </div>

          <div className="admin-password-input-group">
            <label>Confirm New Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={onChange}
              placeholder="Confirm new password"
              autoComplete="new-password"
            />
          </div>
        </div>

        {passwordError && (
          <p className="admin-password-error">
            {passwordError}
          </p>
        )}

        <div className="admin-password-actions">
          <button
            type="button"
            className="admin-password-cancel"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="admin-password-save"
            onClick={onSubmit}
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordModal;