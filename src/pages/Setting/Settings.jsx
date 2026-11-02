import { useState } from "react";
import {
    FaCog,
    FaBell,
    FaRobot,
    FaShieldAlt,
    FaServer,
    FaSave,
    FaUndo,
    FaChevronRight,
    FaCheckCircle
} from "react-icons/fa";

import { toast } from "react-hot-toast";
import DashboardLayout from "../../components/Dashboard/Layout/DashboardLayout";
import "./Settings.css";

function Settings() {

    const [activeSection, setActiveSection] = useState("general");
    const [settings, setSettings] = useState({

        // General
        systemName: "SafeGuard",
        timezone: "Asia/Karachi",
        dateFormat: "DD/MM/YYYY",
        timeFormat: "12-hour",
        language: "English",

        // Notifications
        emailAlerts: true,
        smsAlerts: true,
        emergencyAlerts: true,
        detectionAlerts: true,
        systemNotifications: false,

        // AI
        aiModel: "YOLOv8",
        confidenceThreshold: 80,
        fireDetection: true,
        weaponDetection: true,
        snatchingDetection: true,
        missingChildDetection: true,

        // Security
        autoLogout: true,
        logoutTime: "30",
        loginNotifications: true,

        // System
        systemStatus: true,
        maintenanceMode: false

    });

    const settingSections = [
        {
            id: "general",
            title: "General",
            description: "Basic system preferences",
            icon: FaCog
        },

        {
            id: "notifications",
            title: "Notifications",
            description: "Alert and notification preferences",
            icon: FaBell
        },

        {
            id: "ai",
            title: "AI Model",
            description: "Detection and AI preferences",
            icon: FaRobot
        },

        {
            id: "security",
            title: "Security",
            description: "Security and session settings",
            icon: FaShieldAlt
        },

        {
            id: "system",
            title: "System",
            description: "System configuration",
            icon: FaServer
        }

    ];

// INPUT HANDLER
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value 
        }));
    };

        // SAVE
    const handleSave = () => {
        localStorage.setItem(
            "safeguardSettings",
            JSON.stringify(settings)
        );
        toast.success("Settings saved successfully!");
    };

    // RESET
    const handleReset = () => {
        const defaultSettings = {
            systemName: "SafeGuard",
            timezone: "Asia/Karachi",
            dateFormat: "DD/MM/YYYY",
            timeFormat: "12-hour",
            language: "English",

            emailAlerts: true,
            smsAlerts: true,
            emergencyAlerts: true,
            detectionAlerts: true,
            systemNotifications: false,

            aiModel: "YOLOv8",
            confidenceThreshold: 80,
            fireDetection: true,
            weaponDetection: true,
            snatchingDetection: true,
            missingChildDetection: true,

            autoLogout: true,
            logoutTime: "30",
            loginNotifications: true,

            systemStatus: true,
            maintenanceMode: false
        };
        setSettings(defaultSettings);
        toast.info("Settings reset successfully!");
    };


    // TOOGLE COMPONENTS
    const Toggle = ({ name, checked }) => {
        return (
            <label className="settings-toggle">
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={handleChange}
                />
                <span className="toggle-slider"></span>
            </label>
        );
    };


    return (
        <DashboardLayout>
            <div className="settings-page">

                <div className="settings-layout">

                    <aside className="settings-sidebar">
                        <div className="settings-sidebar-title">
                            <span>Settings</span>
                        </div>

                        <div className="settings-menu">
                            {settingSections.map((section) => {
                                const Icon = section.icon;
                                return (
                                    <button
                                        key={section.id}
                                        className={`settings-menu-item ${
                                            activeSection === section.id ? "active" : ""
                                        }`}
                                        onClick={() =>
                                            setActiveSection(section.id)
                                        }
                                    >
                                        <span className="settings-menu-icon">
                                            <Icon />
                                        </span>

                                        <span className="settings-menu-content">
                                            <strong>
                                                {section.title}
                                            </strong>
                                            <small>
                                                {section.description}
                                            </small>
                                        </span>
                                        <FaChevronRight className="menu-arrow" />
                                    </button>
                                );
                            })}
                        </div>
                    </aside>


                    <main className="settings-content">

                        {activeSection === "general" && (
                            <section className="settings-card">
                                <div className="section-heading">
                                    <div className="section-icon"> <FaCog /> </div>

                                    <div>
                                        <h2> General Settings</h2>
                                        <p> Configure basic system preferences.</p>
                                    </div>
                                </div>

                                <div className="settings-form">

                                    <div className="form-group">

                                        <label> System Name</label>
                                        <input
                                            type="text"
                                            name="systemName"
                                            value={settings.systemName}
                                            onChange={handleChange}
                                            placeholder="Enter system name"
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label> Time Zone</label>
                                            <select
                                                name="timezone"
                                                value={settings.timezone}
                                                onChange={handleChange}
                                            >

                                                <option value="Asia/Karachi">
                                                    (GMT+05:00) Islamabad, Karachi
                                                </option>

                                                <option value="Asia/Dubai">
                                                    (GMT+04:00) Dubai
                                                </option>

                                                <option value="Europe/London">
                                                    (GMT+00:00) London
                                                </option>

                                                <option value="America/New_York">
                                                    (GMT-05:00) New York
                                                </option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label> Language</label>

                                            <select
                                                name="language"
                                                value={settings.language}
                                                onChange={handleChange}
                                            >

                                                <option value="English">
                                                    English
                                                </option>

                                                <option value="Urdu">
                                                    Urdu
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">

                                            <label> Date Format</label>

                                            <select
                                                name="dateFormat"
                                                value={settings.dateFormat}
                                                onChange={handleChange}
                                            >
                                                <option value="DD/MM/YYYY">
                                                    DD/MM/YYYY
                                                </option>
                                                <option value="MM/DD/YYYY">
                                                    MM/DD/YYYY
                                                </option>
                                                <option value="YYYY-MM-DD">
                                                    YYYY-MM-DD
                                                </option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label> Time Format</label>

                                            <select
                                                name="timeFormat"
                                                value={settings.timeFormat}
                                                onChange={handleChange}
                                            >
                                                <option value="12-hour">
                                                    12 Hour
                                                </option>

                                                <option value="24-hour">
                                                    24 Hour
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}


                        {/* =================================================
                            NOTIFICATIONS
                        ================================================= */}

                        {activeSection === "notifications" && (

                            <section className="settings-card">

                                <div className="section-heading">

                                    <div className="section-icon">
                                        <FaBell />
                                    </div>

                                    <div>

                                        <h2>
                                            Notification Settings
                                        </h2>

                                        <p>
                                            Manage how SafeGuard sends alerts.
                                        </p>

                                    </div>

                                </div>


                                <div className="settings-options">


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                Email Notifications
                                            </h4>

                                            <p>
                                                Receive system alerts through email.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="emailAlerts"
                                            checked={settings.emailAlerts}
                                        />

                                    </div>


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                SMS Alerts
                                            </h4>

                                            <p>
                                                Send emergency alerts through SMS.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="smsAlerts"
                                            checked={settings.smsAlerts}
                                        />

                                    </div>


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                Emergency Alerts
                                            </h4>

                                            <p>
                                                Receive immediate emergency notifications.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="emergencyAlerts"
                                            checked={settings.emergencyAlerts}
                                        />

                                    </div>


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                AI Detection Alerts
                                            </h4>

                                            <p>
                                                Get notified when AI detects a threat.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="detectionAlerts"
                                            checked={settings.detectionAlerts}
                                        />

                                    </div>


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                System Notifications
                                            </h4>

                                            <p>
                                                Receive general system notifications.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="systemNotifications"
                                            checked={settings.systemNotifications}
                                        />

                                    </div>

                                </div>

                            </section>

                        )}


                        {/* =================================================
                            AI MODEL
                        ================================================= */}

                        {activeSection === "ai" && (

                            <section className="settings-card">

                                <div className="section-heading">

                                    <div className="section-icon">
                                        <FaRobot />
                                    </div>

                                    <div>

                                        <h2>
                                            AI Model Settings
                                        </h2>

                                        <p>
                                            Configure AI detection preferences.
                                        </p>

                                    </div>

                                </div>


                                <div className="settings-form">


                                    <div className="form-group">

                                        <label>
                                            AI Detection Model
                                        </label>

                                        <select
                                            name="aiModel"
                                            value={settings.aiModel}
                                            onChange={handleChange}
                                        >

                                            <option value="YOLOv8">
                                                YOLOv8
                                            </option>

                                            <option value="YOLOv9">
                                                YOLOv9
                                            </option>

                                        </select>

                                    </div>


                                    <div className="confidence-section">

                                        <div className="confidence-header">

                                            <label>
                                                Confidence Threshold
                                            </label>

                                            <strong>
                                                {settings.confidenceThreshold}%
                                            </strong>

                                        </div>


                                        <input
                                            type="range"
                                            min="50"
                                            max="100"
                                            step="1"
                                            name="confidenceThreshold"
                                            value={settings.confidenceThreshold}
                                            onChange={handleChange}
                                            className="confidence-slider"
                                        />

                                        <div className="range-labels">

                                            <span>
                                                50%
                                            </span>

                                            <span>
                                                100%
                                            </span>

                                        </div>

                                    </div>


                                    <div className="settings-options ai-options">


                                        <div className="setting-option">

                                            <div>

                                                <h4>
                                                    Fire Detection
                                                </h4>

                                                <p>
                                                    Detect fire and smoke incidents.
                                                </p>

                                            </div>

                                            <Toggle
                                                name="fireDetection"
                                                checked={
                                                    settings.fireDetection
                                                }
                                            />

                                        </div>


                                        <div className="setting-option">

                                            <div>

                                                <h4>
                                                    Weapon Detection
                                                </h4>

                                                <p>
                                                    Detect weapons in monitored areas.
                                                </p>

                                            </div>

                                            <Toggle
                                                name="weaponDetection"
                                                checked={
                                                    settings.weaponDetection
                                                }
                                            />

                                        </div>


                                        <div className="setting-option">

                                            <div>

                                                <h4>
                                                    Snatching Detection
                                                </h4>

                                                <p>
                                                    Detect suspicious snatching activities.
                                                </p>

                                            </div>

                                            <Toggle
                                                name="snatchingDetection"
                                                checked={
                                                    settings.snatchingDetection
                                                }
                                            />

                                        </div>


                                        <div className="setting-option">

                                            <div>

                                                <h4>
                                                    Missing Child Detection
                                                </h4>

                                                <p>
                                                    Detect and monitor missing children.
                                                </p>

                                            </div>

                                            <Toggle
                                                name="missingChildDetection"
                                                checked={
                                                    settings.missingChildDetection
                                                }
                                            />

                                        </div>

                                    </div>

                                </div>

                            </section>

                        )}


                        {/* =================================================
                            SECURITY
                        ================================================= */}

                        {activeSection === "security" && (

                            <section className="settings-card">

                                <div className="section-heading">

                                    <div className="section-icon">
                                        <FaShieldAlt />
                                    </div>

                                    <div>

                                        <h2>
                                            Security Settings
                                        </h2>

                                        <p>
                                            Manage system access and security.
                                        </p>

                                    </div>

                                </div>


                                <div className="settings-options">


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                Automatic Logout
                                            </h4>

                                            <p>
                                                Automatically logout inactive users.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="autoLogout"
                                            checked={settings.autoLogout}
                                        />

                                    </div>


                                    <div className="form-group security-select">

                                        <label>
                                            Logout After Inactivity
                                        </label>

                                        <select
                                            name="logoutTime"
                                            value={settings.logoutTime}
                                            onChange={handleChange}
                                            disabled={!settings.autoLogout}
                                        >

                                            <option value="15">
                                                15 Minutes
                                            </option>

                                            <option value="30">
                                                30 Minutes
                                            </option>

                                            <option value="60">
                                                1 Hour
                                            </option>

                                            <option value="120">
                                                2 Hours
                                            </option>

                                        </select>

                                    </div>


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                Login Notifications
                                            </h4>

                                            <p>
                                                Notify administrators about new logins.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="loginNotifications"
                                            checked={
                                                settings.loginNotifications
                                            }
                                        />

                                    </div>

                                </div>

                            </section>

                        )}


                        {/* =================================================
                            SYSTEM
                        ================================================= */}

                        {activeSection === "system" && (

                            <section className="settings-card">

                                <div className="section-heading">

                                    <div className="section-icon">
                                        <FaServer />
                                    </div>

                                    <div>

                                        <h2>
                                            System Settings
                                        </h2>

                                        <p>
                                            Manage SafeGuard system status.
                                        </p>

                                    </div>

                                </div>


                                <div className="settings-options">


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                System Status
                                            </h4>

                                            <p>
                                                Enable or disable system monitoring.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="systemStatus"
                                            checked={settings.systemStatus}
                                        />

                                    </div>


                                    <div className="setting-option">

                                        <div>

                                            <h4>
                                                Maintenance Mode
                                            </h4>

                                            <p>
                                                Temporarily pause system monitoring.
                                            </p>

                                        </div>

                                        <Toggle
                                            name="maintenanceMode"
                                            checked={settings.maintenanceMode}
                                        />

                                    </div>


                                    <div className="system-status-box">

                                        <FaCheckCircle />

                                        <div>

                                            <strong>
                                                System Operational
                                            </strong>

                                            <span>
                                                All SafeGuard services are running normally.
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </section>

                        )}


                        {/* =================================================
                            FOOTER ACTIONS
                        ================================================= */}

                        <div className="settings-actions">

                            <button
                                className="reset-btn"
                                onClick={handleReset}
                            >
                                <FaUndo />
                                Reset
                            </button>


                            <button
                                className="save-btn"
                                onClick={handleSave}
                            >
                                <FaSave />
                                Save Changes
                            </button>

                        </div>

                    </main>

                </div>

            </div>
        </DashboardLayout>
        
    );
}

export default Settings;