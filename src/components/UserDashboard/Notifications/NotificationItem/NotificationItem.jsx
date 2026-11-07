
import React from "react";
import {
  FaFire,
  FaExclamationTriangle,
  FaCheckCircle,
  FaVideo,
  FaBell,
  FaTrash,
  FaArrowRight,
} from "react-icons/fa";

import './NotificationItem.css'

function NotificationItem({
  notification,
  onOpen,
  onDelete,
}) {
  const getIcon = () => {
    switch (notification.icon) {
      case "fire":
        return <FaFire />;

      case "warning":
        return <FaExclamationTriangle />;

      case "success":
        return <FaCheckCircle />;

      case "camera":
        return <FaVideo />;

      default:
        return <FaBell />;
    }
  };

  const getIconClass = () => {
    switch (notification.icon) {
      case "fire":
        return "notification-icon-fire";

      case "warning":
        return "notification-icon-warning";

      case "success":
        return "notification-icon-success";

      case "camera":
        return "notification-icon-camera";

      default:
        return "notification-icon-default";
    }
  };

  return (
    <div
      className={`notification-item ${
        !notification.read ? "unread" : ""
      }`}
    >
      <div className={`notification-item-icon ${getIconClass()}`}>
        {getIcon()}
      </div>

      <div className="notification-content">
        <button
          className="notification-main"
          onClick={() => onOpen(notification)}
        >
          <div className="notification-title-row">
            <h3>{notification.title}</h3>

            {!notification.read && (
              <span className="unread-label">New</span>
            )}
          </div>

          <p>{notification.message}</p>

          <div className="notification-meta">
            <span>
              <FaVideo />
              {notification.camera}
            </span>

            <span>{notification.location}</span>

            <span>
              {notification.date} · {notification.time}
            </span>
          </div>
        </button>
      </div>

      <div className="notification-item-actions">
        <button
          className="notification-action-btn delete"
          title="Delete notification"
          onClick={() => onDelete(notification.id)}
        >
          <FaTrash />
        </button>

        <button
          className="notification-open-btn"
          title="Open notification"
          onClick={() => onOpen(notification)}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default NotificationItem;
