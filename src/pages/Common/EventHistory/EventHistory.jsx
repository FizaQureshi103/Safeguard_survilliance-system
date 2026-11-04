
import "./EventHistory.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { eventHistoryData } from "../../../data/EventHistory/eventHistoryData";
import AlertPagination from "../../../components/Alerts/AlertPagination/AlertPagination";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

function EventHistory() {
    const location = useLocation();
    const isUser = location.pathname.startsWith("/user");

    // Demo: Officer's assigned cameras
    const assignedCameraIds = ["CAM-01", "CAM-04"];

    // Role-based events
    const roleBasedEvents = isUser
        ? eventHistoryData.filter((item) =>
            assignedCameraIds.includes(item.camera)
          )
        : eventHistoryData;

    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedFloor, setSelectedFloor] = useState("Ground Floor");
    const [selectedDate, setSelectedDate] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredEvents = roleBasedEvents.filter((item) => {

        const matchType =
            selectedType === "All Types" ||
            item.event === selectedType;

        const matchFloor =
            selectedFloor === "All Floors" ||
            item.floor === selectedFloor;

        const matchDate =
            !selectedDate ||
            item.date === selectedDate;

        const query = searchQuery.toLowerCase();

        const matchSearch =
            item.event.toLowerCase().includes(query) ||
            item.camera.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query);

        return (
            matchType &&
            matchFloor &&
            matchDate &&
            matchSearch
        );
    });

    const eventsPerPage = 5;
    const lastIndex = currentPage * eventsPerPage;
    const firstIndex = lastIndex - eventsPerPage;

    const paginatedEvents = filteredEvents.slice(
        firstIndex,
        lastIndex
    );

    return (
        <DashboardLayout>
            <div className="event-history-page">

                {/* Filters */}
                <div className="event-history-filters">

                    <div className="event-search">
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>

                    <select
                        value={selectedType}
                        onChange={(e) => {
                            setSelectedType(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option>All Types</option>
                        <option>Fire Detected</option>
                        <option>Weapon Detected</option>
                        <option>Missing Child</option>
                        <option>Snatching Detected</option>
                    </select>

                    <select
                        value={selectedFloor}
                        onChange={(e) => {
                            setSelectedFloor(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option>All Floors</option>
                        <option>Ground Floor</option>
                        <option>First Floor</option>
                        <option>Second Floor</option>
                    </select>

                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => {
                            setSelectedDate(e.target.value);
                            setCurrentPage(1);
                        }}
                    />

                    <button className="export-btn">
                        Export
                    </button>

                </div>

                {/* Table */}
                <div className="event-history-card">
                    <table className="event-history-table">
                        <thead>
                            <tr>
                                <th>Date & Time</th>
                                <th>Event</th>
                                <th>Camera</th>
                                <th>Location</th>
                                <th>Floor</th>
                                <th>Severity</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedEvents.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="no-events">
                                        <div className="no-events-content">
                                            <h3>No events found</h3>
                                            <p>
                                                Try changing your filters or search query.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                paginatedEvents.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="event-date">
                                                    <strong>{item.date}</strong>
                                                    <span>{item.time}</span>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="event-name">
                                                    <Icon className="event-icon" />
                                                    <span>{item.event}</span>
                                                </div>
                                            </td>

                                            <td>{item.camera}</td>
                                            <td>{item.location}</td>
                                            <td>{item.floor}</td>

                                            <td>
                                                <span
                                                    className={`history-severity ${item.severity.toLowerCase()}`}
                                                >
                                                    {item.severity}
                                                </span>
                                            </td>

                                            <td>
                                                <span
                                                    className={`history-status ${item.status.toLowerCase().replace(" ", "-")}`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

                <AlertPagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    alertsPerPage={eventsPerPage}
                    totalAlerts={filteredEvents.length}
                />

            </div>
        </DashboardLayout>
    );
}

export default EventHistory;
