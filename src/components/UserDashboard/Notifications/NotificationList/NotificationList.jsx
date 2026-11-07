
import React from "react";
import { FaBell, FaFilter } from "react-icons/fa";

import NotificationItem from "../NotificationItem/NotificationItem";

import './NotificationList.css'
function NotificationList({
  notifications,
  onOpen,
  onDelete,
  onClearFilters,
  totalCount,
}) {
  return (
    <>
      <div className="notification-list">

        {notifications.length === 0 ? (
          <div className="notification-empty">
            <div className="notification-empty-icon">
              <FaBell />
            </div>

            <h3>No notifications found</h3>

            <p>
              There are no notifications matching your selected filter.
            </p>

            <button onClick={onClearFilters}>
              Clear filters
            </button>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onOpen={onOpen}
              onDelete={onDelete}
            />
          ))
        )}

      </div>

      <div className="notification-footer">
        <span>
          Showing {notifications.length} of {totalCount} notifications
        </span>

        <span>
          <FaFilter />
          Assigned camera updates
        </span>
      </div>
    </>
  );
}

export default NotificationList;
