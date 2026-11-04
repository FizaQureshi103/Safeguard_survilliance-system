
import React from "react";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";
import "./UserDashboard.css";

import {
    FaVideo,
    FaBell,
    FaTasks,
    FaCheckCircle,
    FaMapMarkerAlt,
    FaClock
} from "react-icons/fa";

const stats = [
    {
        title: "Assigned Cameras",
        value: "08",
        description: "Cameras under your supervision",
        icon: <FaVideo />,
        color: "blue"
    },
    {
        title: "Active Alerts",
        value: "03",
        description: "Require your attention",
        icon: <FaBell />,
        color: "red"
    },
    {
        title: "Pending Tasks",
        value: "05",
        description: "Tasks waiting for action",
        icon: <FaTasks />,
        color: "orange"
    },
    {
        title: "Resolved Incidents",
        value: "18",
        description: "Successfully handled",
        icon: <FaCheckCircle />,
        color: "green"
    }
];

const recentAlerts = [
    {
        id: 1,
        type: "Fire Detected",
        location: "Food Court",
        camera: "CAM-04",
        time: "10:42 AM",
        status: "Active",
        priority: "High"
    },
    {
        id: 2,
        type: "Unattended Child",
        location: "Main Entrance",
        camera: "CAM-02",
        time: "10:15 AM",
        status: "Investigating",
        priority: "Medium"
    },
    {
        id: 3,
        type: "Suspicious Activity",
        location: "Parking Area",
        camera: "CAM-08",
        time: "09:50 AM",
        status: "Resolved",
        priority: "Low"
    }
];

function UserDashboard() {
    return (
        <DashboardLayout>

            <div className="user-dashboard">

                {/* Welcome Section */}
                <div className="user-welcome">
                    <div>
                        <h1>Welcome back, Ahmed!</h1>
                        <p>
                            Here's your security monitoring overview
                            for today.
                        </p>
                    </div>

                    <div className="officer-status">
                        <span className="status-dot"></span>
                        On Duty
                    </div>
                </div>


                {/* Statistics Cards */}
                <div className="user-stats-grid">

                    {stats.map((item, index) => (
                        <div className="user-stat-card" key={index}>

                            <div className={`user-stat-icon ${item.color}`}>
                                {item.icon}
                            </div>

                            <div className="user-stat-info">
                                <p>{item.title}</p>
                                <h2>{item.value}</h2>
                                <span>{item.description}</span>
                            </div>

                        </div>
                    ))}

                </div>


                {/* Assigned Area */}
                <div className="assigned-area-card">

                    <div className="area-icon">
                        <FaMapMarkerAlt />
                    </div>

                    <div>
                        <h3>Your Assigned Area</h3>
                        <p>Food Court & Main Entrance</p>
                    </div>

                    <span className="area-badge">
                        08 Cameras Assigned
                    </span>

                </div>


                {/* Dashboard Bottom Section */}
                <div className="user-dashboard-grid">

                    {/* Recent Alerts */}
                    <div className="user-panel alerts-panel">

                        <div className="panel-header">
                            <div>
                                <h3>Recent Alerts</h3>
                                <p>Latest incidents in your assigned area</p>
                            </div>

                            <span className="view-all">View All</span>
                        </div>

                        <div className="user-alert-list">

                            {recentAlerts.map((alert) => (
                                <div className="user-alert-item" key={alert.id}>

                                    <div className="alert-details">
                                        <h4>{alert.type}</h4>
                                        <p>
                                            {alert.location} · {alert.camera}
                                        </p>
                                        <span>
                                            <FaClock /> {alert.time}
                                        </span>
                                    </div>

                                    <div className="alert-status-info">
                                        <span className={`priority ${alert.priority.toLowerCase()}`}>
                                            {alert.priority}
                                        </span>

                                        <span className={`alert-status ${alert.status.toLowerCase().replace(" ", "-")}`}>
                                            {alert.status}
                                        </span>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>


                    {/* My Tasks */}
                    <div className="user-panel tasks-panel">

                        <div className="panel-header">
                            <div>
                                <h3>My Tasks</h3>
                                <p>Your assigned responsibilities</p>
                            </div>
                        </div>

                        <div className="task-item">
                            <div>
                                <h4>Inspect Food Court</h4>
                                <p>Check camera CAM-04</p>
                            </div>
                            <span className="task-pending">Pending</span>
                        </div>

                        <div className="task-item">
                            <div>
                                <h4>Review Active Alert</h4>
                                <p>Investigate fire detection</p>
                            </div>
                            <span className="task-progress">In Progress</span>
                        </div>

                        <div className="task-item">
                            <div>
                                <h4>Security Patrol</h4>
                                <p>Main Entrance</p>
                            </div>
                            <span className="task-completed">Completed</span>
                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}

export default UserDashboard;
