
import React from "react";
import {
  FaVideo,
  FaBrain,
  FaWifi,
  FaDatabase,
} from "react-icons/fa";

import "./UserSystemHealth.css";

const systemStatus = [
  {
    name: "Assigned Cameras",
    detail: "2 of 2 Online",
    icon: <FaVideo />,
    status: "Online",
  },
  {
    name: "AI Detection",
    detail: "Detection service running",
    icon: <FaBrain />,
    status: "Active",
  },
  {
    name: "Network",
    detail: "Connection stable",
    icon: <FaWifi />,
    status: "Online",
  },
  {
    name: "Database",
    detail: "Data synchronization active",
    icon: <FaDatabase />,
    status: "Online",
  },
];

function UserSystemHealth() {
  const allHealthy = systemStatus.every(
    (item) => item.status === "Online" || item.status === "Active"
  );

  return (
    <section className="user-panel system-health-panel">
      <div className="user-panel-heading">
        <div>
          <h2>System Health</h2>
          <p>Status of your assigned services</p>
        </div>

      </div>

      <div className="system-status-list">
        {systemStatus.map((item) => {
          const isHealthy =
            item.status === "Online" || item.status === "Active";

          return (
            <div className="system-status-item" key={item.name}>
             <div
                className={`system-status-icon ${item.name
                  .toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.icon}
              </div>

              <div className="system-status-info">
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>

              <span
                className={`system-status-badge ${
                  isHealthy ? "status-healthy" : "status-warning"
                }`}
              >
                <span></span>
                {item.status}
              </span>

            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UserSystemHealth;
