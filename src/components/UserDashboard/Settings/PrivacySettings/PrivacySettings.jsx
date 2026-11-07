import React from "react";
import {
  FaUserShield,
  FaEye,
  FaAddressCard,
  FaSave,
} from "react-icons/fa";

import SettingsSection from "../SettingsSection/SettingsSection";
import SettingToggle from "../SettingToggle/SettingToggle";

import "./PrivacySettings.css";

function PrivacySettings({ settings, onChange }) {
  return (
    <SettingsSection
      icon={<FaUserShield />}
      title="Privacy & Preferences"
      description="Control your personal account visibility and preferences."
    >
      <div className="user-privacy-settings">
        <div className="user-privacy-option">
          <span className="user-privacy-option-icon">
            <FaEye />
          </span>

          <div className="user-privacy-option-content">
            <SettingToggle
              title="Show Online Status"
              description="Allow authorized team members to see when you are online."
              checked={settings.showOnlineStatus}
              onChange={(value) => onChange("showOnlineStatus", value)}
            />
          </div>
        </div>

        <div className="user-privacy-option">
          <span className="user-privacy-option-icon">
            <FaAddressCard />
          </span>

          <div className="user-privacy-option-content">
            <SettingToggle
              title="Share Contact Details"
              description="Allow authorized team members to view your contact details."
              checked={settings.shareContactDetails}
              onChange={(value) => onChange("shareContactDetails", value)}
            />
          </div>
        </div>

        <div className="user-privacy-option">
          <span className="user-privacy-option-icon">
            <FaSave />
          </span>

          <div className="user-privacy-option-content">
            <SettingToggle
              title="Remember My Preferences"
              description="Keep your saved settings when you return to SafeGuard."
              checked={settings.rememberPreferences}
              onChange={(value) => onChange("rememberPreferences", value)}
            />
          </div>
        </div>
      </div>
    </SettingsSection>
  );
}

export default PrivacySettings;