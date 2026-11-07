import React, { useEffect, useState } from "react";
import {
  FaCog,
  FaSave,
  FaUndo,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import NotificationSettings from "../../../components/UserDashboard/Settings/NotificationSettings/NotificationSettings";
import DisplaySettings from "../../../components/UserDashboard/Settings/DisplaySettings/DisplaySettings";
import PrivacySettings from "../../../components/UserDashboard/Settings/PrivacySettings/PrivacySettings";

import { defaultUserSettings } from "../../../data/UserDashboard/userSettings";

import "./UserSettings.css";

const STORAGE_KEY = "safeguard_user_settings";

const cloneSettings = (settings) =>
  JSON.parse(JSON.stringify(settings));

const getSavedSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);

      return {
        notifications: {
          ...defaultUserSettings.notifications,
          ...parsed.notifications,
        },
        display: {
          ...defaultUserSettings.display,
          ...parsed.display,
        },
        privacy: {
          ...defaultUserSettings.privacy,
          ...parsed.privacy,
        },
      };
    }
  } catch (error) {
    console.error("Unable to load user settings:", error);
  }

  return cloneSettings(defaultUserSettings);
};

function UserSettings() {
  const [settings, setSettings] = useState(getSavedSettings);

  const [originalSettings, setOriginalSettings] = useState(
    () => getSavedSettings()
  );

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  // Apply display preferences on this page
  useEffect(() => {
    const page = document.querySelector(".user-settings-page");

    if (!page) return;

    page.classList.toggle(
      "settings-compact-mode",
      settings.display.compactMode
    );

    page.classList.toggle(
      "settings-reduce-motion",
      settings.display.reduceMotion
    );

    page.dataset.fontSize = settings.display.fontSize;
  }, [settings.display]);

  // Update a setting
  const handleSettingChange = (section, key, value) => {
    setSettings((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        [key]: value,
      },
    }));

    setMessage("");
  };

  // Save settings
  const handleSave = () => {
    try {
      if (settings.privacy.rememberPreferences) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(settings)
        );
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }

      setOriginalSettings(cloneSettings(settings));

      setMessage("Your settings have been saved successfully.");
      setMessageType("success");
    } catch (error) {
      console.error("Unable to save user settings:", error);

      setMessage("Unable to save settings. Please try again.");
      setMessageType("error");
    }
  };

  // Cancel unsaved changes
  const handleCancel = () => {
    setSettings(cloneSettings(originalSettings));
    setMessage("Unsaved changes have been discarded.");
    setMessageType("success");
  };

  // Reset settings to default
  const handleReset = () => {
    setSettings(cloneSettings(defaultUserSettings));
    setMessage("Default settings loaded. Click Save Changes to apply.");
    setMessageType("success");
  };

  return (
    <DashboardLayout role="user">
      <main className="user-settings-page">

        {/* Page Header */}
        <div className="user-settings-header">
          <div className="user-settings-title">
            <div className="user-settings-title-icon">
              <FaCog />
            </div>

            <div>
              <h1>Settings</h1>
              <p>
                Manage your personal preferences and account settings.
              </p>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="user-settings-content">

          <NotificationSettings
            settings={settings.notifications}
            onChange={(key, value) =>
              handleSettingChange("notifications", key, value)
            }
          />

          <DisplaySettings
            settings={settings.display}
            onChange={(key, value) =>
              handleSettingChange("display", key, value)
            }
          />

          <PrivacySettings
            settings={settings.privacy}
            onChange={(key, value) =>
              handleSettingChange("privacy", key, value)
            }
          />

        </div>

        {/* Feedback Message */}
        {message && (
          <div
            className={`user-settings-message ${messageType}`}
            role="status"
          >
            <FaCheckCircle />
            <span>{message}</span>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="user-settings-footer">

          <button
            type="button"
            className="user-settings-reset-btn"
            onClick={handleReset}
          >
            <FaUndo />
            Reset to Default
          </button>

          <div className="user-settings-footer-actions">
            <button
              type="button"
              className="user-settings-cancel-btn"
              onClick={handleCancel}
            >
              <FaTimes />
              Cancel
            </button>

            <button
              type="button"
              className="user-settings-save-btn"
              onClick={handleSave}
            >
              <FaSave />
              Save Changes
            </button>
          </div>

        </div>

      </main>
    </DashboardLayout>
  );
}

export default UserSettings;