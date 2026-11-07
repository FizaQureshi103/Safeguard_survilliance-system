
import React from "react";
import './NotificationToolbar.css'
import { FaSearch } from "react-icons/fa";

const filters = [
  { label: "All", value: "all" },
  { label: "Unread", value: "unread" },
  { label: "Threats", value: "threat" },
  { label: "System", value: "system" },
];

function NotificationToolbar({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
  unreadCount,
}) {
  return (
    <div className="notification-toolbar">

      <div className="notification-filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`notification-filter ${
              activeFilter === filter.value ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}

            {filter.value === "unread" && unreadCount > 0 && (
              <span className="filter-count">{unreadCount}</span>
            )}
          </button>
        ))}
      </div>

      <div className="notification-search">
        <FaSearch />

        <input
          type="text"
          placeholder="Search notifications..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

    </div>
  );
}

export default NotificationToolbar;
