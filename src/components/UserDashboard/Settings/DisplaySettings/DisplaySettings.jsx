
import React from "react";
import {
  FaDesktop,
  FaCompress,
  FaVideo,
  FaUniversalAccess,
} from "react-icons/fa";

import SettingsSection from "../SettingsSection/SettingsSection";
import SettingToggle from "../SettingToggle/SettingToggle";

import "./DisplaySettings.css";

function DisplaySettings({ settings, onChange }) {
  return (
    <SettingsSection
      icon={<FaDesktop />}
      title="Display Preferences"
      description="Customize how your User Dashboard looks."
    >
      <div className="user-display-settings">

        {/* Compact Mode */}
        <div className="user-display-option">
          <span className="user-display-option-icon">
            <FaCompress />
          </span>

          <div className="user-display-option-content">
            <SettingToggle
              title="Compact Mode"
              description="Reduce spacing between dashboard elements."
              checked={settings.compactMode}
              onChange={(value) => onChange("compactMode", value)}
            />
          </div>
        </div>

        {/* Show Camera IDs */}
        <div className="user-display-option">
          <span className="user-display-option-icon">
            <FaVideo />
          </span>

          <div className="user-display-option-content">
            <SettingToggle
              title="Show Camera IDs"
              description="Display camera identification numbers in assigned areas."
              checked={settings.showCameraIds}
              onChange={(value) => onChange("showCameraIds", value)}
            />
          </div>
        </div>

        {/* Reduce Motion */}
        <div className="user-display-option">
          <span className="user-display-option-icon">
            <FaUniversalAccess />
          </span>

          <div className="user-display-option-content">
            <SettingToggle
              title="Reduce Motion"
              description="Minimize animations and visual transitions."
              checked={settings.reduceMotion}
              onChange={(value) => onChange("reduceMotion", value)}
            />
          </div>
        </div>

      </div>
    </SettingsSection>
  );
}

export default DisplaySettings;
