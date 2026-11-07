
import React from "react";
import {
  FaBell,
  FaExclamationTriangle,
  FaFire,
} from "react-icons/fa";

import './NotificationSummary.css'

function NotificationSummary({ notifications }) {
  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  const threatCount = notifications.filter(
    (item) => item.type === "threat"
  ).length;

  const summaryItems = [
    {
      title: "Total Notifications",
      value: notifications.length,
      icon: <FaBell />,
      color: "total",
    },
    {
      title: "Unread Notifications",
      value: unreadCount,
      icon: <FaExclamationTriangle />,
      color: "unread",
    },
    {
      title: "Threat Notifications",
      value: threatCount,
      icon: <FaFire />,
      color: "threats",
    },
  ];

  return (
    <div className="notification-summary">
      {summaryItems.map((item) => (
        <div className="notification-summary-card" key={item.title}>
          <div className={`notification-summary-icon ${item.color}`}>
            {item.icon}
          </div>

          <div>
            <span>{item.title}</span>
            <h3>{item.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotificationSummary;
