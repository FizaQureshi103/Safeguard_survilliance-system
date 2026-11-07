import "./Topbar.css";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Admin from "../../../assets/admin.png";

import { useSearch } from "../../../context/SearchContext";
import { useNotification } from "../../../context/NotificationContext.jsx";

import { FaSearch, FaBell } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

// Separate profile storage for Admin and User
const PROFILE_STORAGE = {
  admin: "safeguard_admin_profile",
  user: "safeguard_user_profile",
};

// Get profile from localStorage
const getProfileFromStorage = (role) => {
  const storageKey = PROFILE_STORAGE[role];

  try {
    const savedProfile = localStorage.getItem(storageKey);

    return savedProfile ? JSON.parse(savedProfile) : {};
  } catch (error) {
    console.error("Unable to load profile:", error);
    return {};
  }
};

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
    clearAllNotifications,
  } = useNotification();

  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [profile, setProfile] = useState(() =>
    getProfileFromStorage(isUser ? "user" : "admin")
  );

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  // Load the correct profile and listen for profile updates
  useEffect(() => {
    const storageKey = PROFILE_STORAGE[isUser ? "user" : "admin"];

    const updateProfile = () => {
      setProfile(getProfileFromStorage(isUser ? "user" : "admin"));
    };

    updateProfile();

    // Custom event handles updates from the same browser tab
    window.addEventListener("safeguard-profile-updated", updateProfile);

    // Storage event handles updates from another browser tab
    window.addEventListener("storage", updateProfile);

    return () => {
      window.removeEventListener(
        "safeguard-profile-updated",
        updateProfile
      );

      window.removeEventListener("storage", updateProfile);
    };
  }, [isUser]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
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

  // Dynamic profile information
  const profileName =
    profile.fullName ||
    profile.name ||
    (isUser ? "Security Officer" : "Admin");

  const profileRole =
    profile.role ||
    (isUser ? "Officer Account" : "Administrator");

  const profileImage =
    profile.profileImage ||
    profile.avatar ||
    Admin;

  return (
    <header className="topbar">
      <div
        className="menu-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <HiBars3 size={24} />
      </div>

      {/* Search */}
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

        {/* Notifications */}
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
                    className={`notification-item ${
                      item.read ? "" : "unread"
                    }`}
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

        {/* Dynamic Profile */}
        <div
          className="profile"
          ref={profileRef}
          onClick={() => setShowProfile(!showProfile)}
        >
          <img
            src={profileImage}
            alt={profileName}
            onError={(e) => {
              e.currentTarget.src = Admin;
            }}
          />

          <div className="topbar-profile-info">
            <h4>{profileName}</h4>
            <p>{profileRole}</p>
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