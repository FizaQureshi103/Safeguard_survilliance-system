import React from "react";
import "./SettingsSection.css";

function SettingsSection({
  icon,
  title,
  description,
  children,
}) {
  return (
    <section className="user-settings-section">
      <div className="user-settings-section-header">
        <div className="user-settings-section-icon">
          {icon}
        </div>

        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="user-settings-section-content">
        {children}
      </div>
    </section>
  );
}

export default SettingsSection;