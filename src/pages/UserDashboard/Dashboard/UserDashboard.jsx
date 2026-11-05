
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";
import {
  FaVideo,
  FaBell,
  FaExclamationTriangle,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaFire,
  FaShieldAlt,
  FaChild,
  FaRunning,
  FaArrowUp,
  FaArrowRight,
  FaWifi,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import "./UserDashboard.css";

const stats = [
  {
    title: "Assigned Cameras",
    value: "02",
    description: "Cameras under your supervision",
    icon: <FaVideo />,
    color: "blue",
  },
  {
    title: "Active Alerts",
    value: "02",
    description: "Require your attention",
    icon: <FaBell />,
    color: "red",
  },
  {
    title: "Pending Incidents",
    value: "02",
    description: "Awaiting response",
    icon: <FaExclamationTriangle />,
    color: "orange",
  },
  {
    title: "Resolved Incidents",
    value: "18",
    description: "Successfully handled",
    icon: <FaCheckCircle />,
    color: "green",
  },
];

const recentAlerts = [
  {
    id: 1,
    type: "Fire Detected",
    location: "Food Court",
    camera: "CAM-04",
    time: "10:42 AM",
    status: "Active",
    priority: "High",
    icon: <FaFire />,
    color: "red",
  },
  {
    id: 2,
    type: "Suspicious Activity",
    location: "Main Entrance",
    camera: "CAM-01",
    time: "10:15 AM",
    status: "Investigating",
    priority: "Medium",
    icon: <FaShieldAlt />,
    color: "orange",
  },
  {
    id: 3,
    type: "Weapon Detected",
    location: "Main Entrance",
    camera: "CAM-01",
    time: "09:50 AM",
    status: "Resolved",
    priority: "High",
    icon: <FaShieldAlt />,
    color: "red",
  },
];

const weeklyThreats = [
  { day: "Mon", fire: 3, weapon: 2, child: 1, snatching: 1 },
  { day: "Tue", fire: 2, weapon: 3, child: 2, snatching: 1 },
  { day: "Wed", fire: 4, weapon: 1, child: 1, snatching: 2 },
  { day: "Thu", fire: 2, weapon: 2, child: 3, snatching: 1 },
  { day: "Fri", fire: 5, weapon: 3, child: 2, snatching: 2 },
  { day: "Sat", fire: 3, weapon: 2, child: 1, snatching: 3 },
  { day: "Sun", fire: 2, weapon: 1, child: 2, snatching: 1 },
];

const threatDistribution = [
  { name: "Fire", value: 35, color: "#EF4444", icon: <FaFire /> },
  { name: "Weapon", value: 25, color: "#F59E0B", icon: <FaShieldAlt /> },
  { name: "Missing Child", value: 20, color: "#8B5CF6", icon: <FaChild /> },
  { name: "Snatching", value: 20, color: "#3B82F6", icon: <FaRunning /> },
];

const systemStatus = [
  { name: "Assigned Cameras", detail: "2 of 2 Online", icon: <FaVideo />, status: "Online" },
  { name: "AI Detection", detail: "Detection service running", icon: <FaBrain />, status: "Active" },
  { name: "Network", detail: "Connection stable", icon: <FaWifi />, status: "Online" },
  { name: "Database", detail: "Data synchronization active", icon: <FaDatabase />, status: "Online" },
];

function UserDashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout role="user">
      <div className="user-dashboard">

        {/* Page Header */}
        <div className="user-dashboard-header">
          <div>
            <span className="dashboard-eyebrow">OFFICER PANEL</span>
            <h1>Welcome Back, Security Officer</h1>
            <p>Here is an overview of your assigned security operations.</p>
          </div>

          <button
            className="user-view-alerts"
            onClick={() => navigate("/user/alert")}
          >
            View All Alerts <FaArrowRight />
          </button>
        </div>

        {/* Stats */}
        <div className="user-stats-grid">
          {stats.map((item, index) => (
            <div className="user-stat-card" key={index}>
              <div className={`user-stat-icon ${item.color}`}>
                {item.icon}
              </div>

              <div className="user-stat-content">
                <span>{item.title}</span>
                <h2>{item.value}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Assigned Areas */}
        <section className="user-section">
          <div className="user-section-heading">
            <div>
              <h2>My Assigned Areas</h2>
              <p>Locations and cameras assigned to your account</p>
            </div>
            <button onClick={() => navigate("/user/indoormap")}>
              View Indoor Map <FaArrowRight />
            </button>
          </div>

          <div className="assigned-area-grid">
            <div className="assigned-area-card">
              <div className="area-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="area-info">
                <h3>Main Entrance</h3>
                <p>Ground Floor · Main Gate</p>
                <span className="camera-label">CAM-01</span>
              </div>
              <span className="online-status">
                <span /> Online
              </span>
            </div>

            <div className="assigned-area-card">
              <div className="area-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="area-info">
                <h3>Food Court</h3>
                <p>First Floor · Food Zone</p>
                <span className="camera-label">CAM-04</span>
              </div>
              <span className="online-status">
                <span /> Online
              </span>
            </div>
          </div>
        </section>

        {/* Charts */}
        <div className="user-charts-grid">

          {/* Threat Overview */}
          <section className="user-panel threat-overview-panel">
            <div className="user-panel-heading">
              <div>
                <h2>Threat Overview</h2>
                <p>Weekly threat activity</p>
              </div>
              <span className="panel-period">Last 7 Days</span>
            </div>

            <div className="threat-legend">
              <span><i className="legend-fire" /> Fire</span>
              <span><i className="legend-weapon" /> Weapon</span>
              <span><i className="legend-child" /> Missing Child</span>
              <span><i className="legend-snatching" /> Snatching</span>
            </div>

            <div className="weekly-chart">
              {weeklyThreats.map((day) => (
                <div className="chart-day" key={day.day}>
                  <div className="chart-bars">
                    <div className="stacked-bar">
                      <span className="bar-fire" style={{ height: `${day.fire * 9}%` }} />
                      <span className="bar-weapon" style={{ height: `${day.weapon * 9}%` }} />
                      <span className="bar-child" style={{ height: `${day.child * 9}%` }} />
                      <span className="bar-snatching" style={{ height: `${day.snatching * 9}%` }} />
                    </div>
                  </div>
                  <span className="chart-day-label">{day.day}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Threat Distribution */}
          <section className="user-panel distribution-panel">
            <div className="user-panel-heading">
              <div>
                <h2>Threat Distribution</h2>
                <p>Threat category breakdown</p>
              </div>
            </div>

            <div className="distribution-content">
              <div className="donut-chart">
                <div className="donut-center">
                  <strong>100%</strong>
                  <span>Threats</span>
                </div>
              </div>

              <div className="distribution-list">
                {threatDistribution.map((item) => (
                  <div className="distribution-item" key={item.name}>
                    <span
                      className="distribution-dot"
                      style={{ background: item.color }}
                    />
                    <span className="distribution-name">{item.name}</span>
                    <strong>{item.value}%</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Panels */}
        <div className="user-bottom-grid">

          {/* Recent Alerts */}
          <section className="user-panel recent-alerts-panel">
            <div className="user-panel-heading">
              <div>
                <h2>Recent Alerts</h2>
                <p>Incidents from your assigned cameras</p>
              </div>
              <button onClick={() => navigate("/user/alert")}>
                View All <FaArrowRight />
              </button>
            </div>

            <div className="user-alert-list">
              {recentAlerts.map((alert) => (
                <div className="user-alert-item" key={alert.id}>
                  <div className={`alert-type-icon ${alert.color}`}>
                    {alert.icon}
                  </div>

                  <div className="user-alert-details">
                    <h3>{alert.type}</h3>
                    <p>{alert.location} · {alert.camera}</p>
                    <span>{alert.time}</span>
                  </div>

                  <div className="user-alert-meta">
                    <span className={`priority-tag ${alert.priority.toLowerCase()}`}>
                      {alert.priority}
                    </span>
                    <span className={`alert-status ${alert.status.toLowerCase()}`}>
                      {alert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* System Health */}
          <section className="user-panel system-health-panel">
            <div className="user-panel-heading">
              <div>
                <h2>System Health</h2>
                <p>Status of your assigned services</p>
              </div>
              <span className="health-indicator">Healthy</span>
            </div>

            <div className="system-status-list">
              {systemStatus.map((item) => (
                <div className="system-status-item" key={item.name}>
                  <div className="system-status-icon">{item.icon}</div>
                  <div className="system-status-info">
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <span className="system-status-badge">
                    <span /> {item.status}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default UserDashboard;
