
import "./Sidebar.css";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

import { MdSensors } from "react-icons/md";

import {
    FaThLarge,
    FaVideo,
    FaBell,
    FaMapMarkedAlt,
    FaRunning,
    FaHistory,
    FaChartBar,
    FaUser,
    FaCog,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const adminMenuItems = [
    { id: 1, title: "Dashboard", icon: <FaThLarge />, path: "/dashboard" },
    { id: 2, title: "Live Monitoring", icon: <FaVideo />, path: "/livemonitoring" },
    { id: 3, title: "Alerts", icon: <FaBell />, path: "/alert" },
    { id: 4, title: "Indoor Map", icon: <FaMapMarkedAlt />, path: "/indoormap" },
    { id: 5, title: "Evacuation", icon: <FaRunning />, path: "/evacuation" },
    { id: 6, title: "Users", icon: <FaUser />, path: "/users" },
    { id: 7, title: "History", icon: <FaHistory />, path: "/history" },
    { id: 8, title: "Analysis", icon: <FaChartBar />, path: "/analysis" },
    { id: 9, title: "IoT Devices", icon: <MdSensors />, path: "/iotdevice" },
    { id: 10, title: "Settings", icon: <FaCog />, path: "/settings" },
];

const userMenuItems = [
    { id: 1, title: "Dashboard", icon: <FaThLarge />, path: "/user/dashboard" },
    { id: 2, title: "Live Monitoring", icon: <FaVideo />, path: "/user/livemonitoring" },
    { id: 3, title: "Alerts", icon: <FaBell />, path: "/user/alert" },
    { id: 4, title: "Indoor Map", icon: <FaMapMarkedAlt />, path: "/user/indoormap" },
    { id: 5, title: "Evacuation", icon: <FaRunning />, path: "/user/evacuation" },
    { id: 6, title: "History", icon: <FaHistory />, path: "/user/history" },
    { id: 7, title: "Notifications", icon: <FaBell />, path: "/user/notifications" },
    { id: 8, title: "Profile", icon: <FaUser />, path: "/user/profile" },
    { id: 9, title: "Settings", icon: <FaCog />, path: "/user/settings" },
];

function Sidebar({
    role = "admin",
    isSidebarOpen,
    setIsSidebarOpen,
    isSidebarCollapsed,
    setIsSidebarCollapsed
}) {

    const menuItems = role === "user" ? userMenuItems : adminMenuItems;

    return (
        <aside className={`sidebar
            ${isSidebarOpen ? "active" : ""}
            ${isSidebarCollapsed ? "collapsed" : ""}
        `}>

            <div className="sidebar-header">

                <div className="logo-section">
                    <img src={Logo} alt="SafeGuard" />

                    <div className="logo-text">
                        <h2>
                            Safe <span>Guard</span>
                        </h2>
                    </div>

                    <button
                        className="sidebar-toggle"
                        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                        aria-label="Toggle Sidebar"
                    >
                        {isSidebarCollapsed ? <FaBars /> : <FaTimes />}
                    </button>
                </div>

            </div>

            <div className="sidebar-scroll">
                <ul className="sidebar-menu">

                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.path}
                                end={item.path === "/dashboard" || item.path === "/user/dashboard"}
                                className={({ isActive }) =>
                                    isActive ? "sidebar-link active" : "sidebar-link"
                                }
                                onClick={() => {
                                    setIsSidebarOpen(false);
                                    setIsSidebarCollapsed(true);
                                }}
                            >
                                <span className="icon">
                                    {item.icon}
                                </span>

                                <span className="sidebar-title">
                                    {item.title}
                                </span>
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </div>

        </aside>
    );
}

export default Sidebar;
