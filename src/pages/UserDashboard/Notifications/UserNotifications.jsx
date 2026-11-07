
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import NotificationSummary from "../../../components/UserDashboard/Notifications/NotificationSummary/NotificationSummary";
import NotificationToolbar from "../../../components/UserDashboard/Notifications/NotificationToolbar/NotificationToolbar";
import NotificationList from "../../../components/UserDashboard/Notifications/NotificationList/NotificationList";

import { initialNotifications } from "../../../data/UserDashboard/userNotifications";

import "./UserNotifications.css";

function UserNotifications() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  // Search and filter notifications
  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "unread" && !notification.read) ||
        notification.type === activeFilter;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        notification.title.toLowerCase().includes(query) ||
        notification.message.toLowerCase().includes(query) ||
        notification.camera.toLowerCase().includes(query) ||
        notification.location.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [notifications, activeFilter, searchQuery]);

  // Open notification and mark it as read
  const handleOpenNotification = (notification) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === notification.id
          ? { ...item, read: true }
          : item
      )
    );

    navigate(notification.path);
  };

  // Delete individual notification
  const handleDeleteNotification = (id) => {
    setNotifications((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Clear all notifications
  const handleClearAll = () => {
    setNotifications([]);
  };

  // Reset search and filters
  const handleClearFilters = () => {
    setActiveFilter("all");
    setSearchQuery("");
  };

  return (
    <DashboardLayout role="user">
      <div className="user-notifications-page">

        {/* Page Header */}
        <div className="notifications-page-header">
          <div>
            <h1>Notifications</h1>
            <p>
              Stay updated with alerts and activities from your assigned areas.
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <NotificationSummary notifications={notifications} />

        {/* Notification Panel */}
        <section className="notification-panel">

          <div className="notification-panel-header">
            <div>
              <h2>Recent Notifications</h2>
              <p>
                {unreadCount} unread notifications from your assigned cameras
              </p>
            </div>

            {notifications.length > 0 && (
              <button
                className="clear-notifications-btn"
                onClick={handleClearAll}
              >
                <FaTrash />
                Clear All
              </button>
            )}
          </div>

          {/* Search and Filters */}
          <NotificationToolbar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            unreadCount={unreadCount}
          />

          {/* Notification Items */}
          <NotificationList
            notifications={filteredNotifications}
            totalCount={notifications.length}
            onOpen={handleOpenNotification}
            onDelete={handleDeleteNotification}
            onClearFilters={handleClearFilters}
          />

        </section>
      </div>
    </DashboardLayout>
  );
}

export default UserNotifications;
