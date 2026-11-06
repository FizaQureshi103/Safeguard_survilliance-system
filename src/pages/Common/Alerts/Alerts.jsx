
import "./Alerts.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import { alertData } from "../../../data/AlertPage/alertData";

import AlertFilters from "../../../components/Alerts/AlertFilter/AlertFilters";
import AlertsTable from "../../../components/Alerts/AlertsTable/AlertsTable";
import AlertPagination from "../../../components/Alerts/AlertPagination/AlertPagination";
import IncidentDetailModal from "../../../components/Alerts/IncidentDetailModal/IncidentDetailModal";

function Alerts() {

    const location = useLocation();
    const isUser = location.pathname.startsWith("/user");

    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedSeverity, setSelectedSeverity] = useState("All Severity");
    const [selectedStatus, setSelectedStatus] = useState("All Status");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAlert, setSelectedAlert] = useState(null);

    // Demo assignments for Security Officer
    const assignedCameraIds = ["CAM01", "CAM04"];

    // Normalize camera IDs: CAM 04 and CAM-04 become CAM-04
    const normalizeCameraId = (cameraId) => {
        return cameraId.toUpperCase().replace(/[\s-]/g, "");
    };

    // Admin gets all alerts; Officer gets assigned camera alerts only
    const roleBasedAlerts = isUser
        ? alertData.filter((alert) =>
            assignedCameraIds.includes(
                normalizeCameraId(alert.camera)
            )
        )
        : alertData;

    // Type, Severity and Status filters
    const filteredAlerts = roleBasedAlerts.filter((alert) => {
        const matchType =
            selectedType === "All Types" ||
            alert.type === selectedType;

        const matchSeverity =
            selectedSeverity === "All Severity" ||
            alert.severity === selectedSeverity;

        const matchStatus =
            selectedStatus === "All Status" ||
            alert.status === selectedStatus;

        return matchType && matchSeverity && matchStatus;
    });

    // Search filter
    const searchedAlerts = filteredAlerts.filter((alert) => {
        const query = searchQuery.toLowerCase();

        return (
            alert.type.toLowerCase().includes(query) ||
            alert.camera.toLowerCase().includes(query) ||
            alert.location.toLowerCase().includes(query)
        );
    });

    // Date filter
    const finalAlerts = searchedAlerts.filter((alert) => {
        if (!selectedDate) return true;

        return alert.date === selectedDate;
    });

    // Pagination
    const alertsPerPage = 10;
    const lastIndex = currentPage * alertsPerPage;
    const firstIndex = lastIndex - alertsPerPage;

    const paginatedAlerts = finalAlerts.slice(
        firstIndex,
        lastIndex
    );

    return (
        <DashboardLayout role={isUser ? "user" : "admin"}>

            <div className="alerts-page">

                <div className="alerts-content">

                    <AlertFilters
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}

                        selectedSeverity={selectedSeverity}
                        setSelectedSeverity={setSelectedSeverity}

                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}

                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}

                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />

                    <AlertsTable
                        alerts={paginatedAlerts}
                        setSelectedAlert={setSelectedAlert}
                    />

                    <AlertPagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        alertsPerPage={alertsPerPage}
                        totalAlerts={finalAlerts.length}
                    />

                    <IncidentDetailModal
                        alert={selectedAlert}
                        onClose={() => setSelectedAlert(null)}
                    />

                </div>

            </div>

        </DashboardLayout>
    );
}

export default Alerts;
