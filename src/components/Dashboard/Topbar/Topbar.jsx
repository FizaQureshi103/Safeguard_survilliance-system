
import './Topbar.css';

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Admin from "../../../assets/admin.png";

import { useSearch } from '../../../context/SearchContext';
import { useNotification } from '../../../context/NotificationContext.jsx';

import { FaSearch, FaBell } from 'react-icons/fa';
import { HiBars3 } from "react-icons/hi2";

function Topbar({ role = "admin", isSidebarOpen, setIsSidebarOpen }) {

    const navigate = useNavigate();

    const isUser = role === "user";

    const profilePath = isUser ? "/user/profile" : "/profile";
    const settingsPath = isUser ? "/user/settings" : "/settings";

    const { searchQuery, setSearchQuery } = useSearch();

    const {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearAllNotifications
    } = useNotification();

    const [showProfile, setShowProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const profileRef = useRef(null);
    const notificationRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setShowProfile(false);
            }

            if (notificationRef.current && !notificationRef.current.contains(e.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <header className="topbar">

            <div
                className="menu-btn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <HiBars3 size={24} />
            </div>

            <div className="search-box">
                <FaSearch className="search-icon" />

                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="topbar-right">

                <div className="notification" ref={notificationRef}>

                    <FaBell
                        onClick={() => setShowNotifications(!showNotifications)}
                        style={{ cursor: "pointer" }}
                    />

                    {unreadCount > 0 && (
                        <span className="notification-dot">
                            {unreadCount}
                        </span>
                    )}

                    {showNotifications && (
                        <div className="notification-dropdown">

                            <div className="notification-header">
                                <h4>Notifications</h4>

                                <div className="notification-actions">

                                    {unreadCount > 0 && (
                                        <button
                                            className="read-btn"
                                            onClick={markAllAsRead}
                                        >
                                            Read All
                                        </button>
                                    )}

                                    {notifications.length > 0 && (
                                        <button
                                            className="clear-btn"
                                            onClick={clearAllNotifications}
                                        >
                                            Clear All
                                        </button>
                                    )}

                                </div>
                            </div>

                            {notifications.length === 0 ? (
                                <div className="notification-empty">
                                    No notifications
                                </div>
                            ) : (
                                notifications.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`notification-item ${item.read ? "" : "unread"}`}
                                        onClick={() => markAsRead(item.id)}
                                    >
                                        <strong>{item.title}</strong>
                                        <p>{item.message}</p>
                                        <small>{item.time}</small>
                                    </div>
                                ))
                            )}

                        </div>
                    )}

                </div>

                <div
                    className="profile"
                    ref={profileRef}
                    onClick={() => setShowProfile(!showProfile)}
                >

                    <img src={Admin} alt="Profile" />

                    <div>
                        <h4>{isUser ? "Security Officer" : "Admin"}</h4>
                        <p>{isUser ? "Officer Account" : "Administrator"}</p>
                    </div>

                    {showProfile && (
                        <div className="profile-dropdown">

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowProfile(false);
                                    navigate(profilePath);
                                }}
                            >
                                My Profile
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowProfile(false);
                                    navigate(settingsPath);
                                }}
                            >
                                Settings
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLogout();
                                }}
                            >
                                Logout
                            </button>

                        </div>
                    )}

                </div>

            </div>

        </header>
    );
}

export default Topbar;
