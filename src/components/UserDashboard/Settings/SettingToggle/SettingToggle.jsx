import React from "react";
import "./SettingToggle.css";

function SettingToggle({
  title,
  description,
  checked,
  onChange,
  disabled = false,
}) {
  return (
    <div className="user-setting-toggle-row">
      <div className="user-setting-toggle-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <label className="user-setting-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />

        <span className="user-setting-slider"></span>
      </label>
    </div>
  );
}

export default SettingToggle;