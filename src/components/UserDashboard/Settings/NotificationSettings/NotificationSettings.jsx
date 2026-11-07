import React from "react";
import {
  FaBell,
  FaEnvelope,
  FaSms,
  FaVolumeUp,
  FaExclamationTriangle,
} from "react-icons/fa";

import SettingsSection from "../SettingsSection/SettingsSection";
import SettingToggle from "../SettingToggle/SettingToggle";

import "./NotificationSettings.css";

function NotificationSettings({ settings, onChange }) {
  const notificationOptions = [
    {
      key: "inAppAlerts",
      title: "In-App Notifications",
      description: "Receive incident and system notifications inside SafeGuard.",
    },
    {
      key: "emailAlerts",
      title: "Email Notifications",
      description: "Receive alert updates through your registered email.",
    },
    {
      key: "smsAlerts",
      title: "SMS Notifications",
      description: "Receive important incident alerts through SMS.",
    },
    {
      key: "alertSound",
      title: "Alert Sound",
      description: "Play a sound when a new alert is received.",
    },
    {
      key: "criticalAlertsOnly",
      title: "Critical Alerts Only",
      description: "Prioritize critical incidents instead of all alert types.",
    },
  ];

  const icons = {
    inAppAlerts: <FaBell />,
    emailAlerts: <FaEnvelope />,
    smsAlerts: <FaSms />,
    alertSound: <FaVolumeUp />,
    criticalAlertsOnly: <FaExclamationTriangle />,
  };

  return (
    <SettingsSection
      icon={<FaBell />}
      title="Notification Preferences"
      description="Choose how you want to receive security alerts."
    >
      <div className="user-notification-settings">
        {notificationOptions.map((item) => (
          <div className="user-notification-setting" key={item.key}>
            <span className="user-notification-option-icon">
              {icons[item.key]}
            </span>

            <div className="user-notification-option-content">
              <SettingToggle
                title={item.title}
                description={item.description}
                checked={settings[item.key]}
                onChange={(value) => onChange(item.key, value)}
              />
            </div>
          </div>
        ))}
      </div>
    </SettingsSection>
  );
}

export default NotificationSettings;