import "./Alerts.css";
import DashboardLayout from "../../components/Dashboard/Layout/DashboardLayout";
import { alertData } from "../../data/AlertPage/alertData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

import AlertFilters from "../../components/Alerts/AlertFilter/AlertFilters";
import AlertsTable from "../../components/Alerts/AlertsTable/AlertsTable";
import AlertPagination from "../../components/Alerts/AlertPagination/AlertPagination";
import IncidentDetailModal from "../../components/Alerts/IncidentDetailModal/IncidentDetailModal";

function Alerts() {
    const [selectedType, setSelectedType] = useState("All Types")
    const [selectedSeverity, setSelectedSeverity] = useState("All Severity")
    const [selectedStatus, setSelectedStatus] = useState("All Status");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAlert, setSelectedAlert] = useState(null);

    const navigate = useNavigate();
    
    const filteredAlerts = alertData.filter((alert) => {
        const matchType =
            selectedType === "All Types" ||
            alert.type === selectedType;

        const matchSeverity =
            selectedSeverity === "All Severity" ||
            alert.severity === selectedSeverity;

        const matchStatus =
            selectedStatus === "All Status" ||
            alert.status === selectedStatus;

        return (
            matchType &&
            matchSeverity &&
            matchStatus
        );
    });

    const searchedAlerts = filteredAlerts.filter((alert) => {
        const query = searchQuery.toLowerCase();
        return (
            alert.type.toLowerCase().includes(query) ||
            alert.camera.toLowerCase().includes(query) ||
            alert.location.toLowerCase().includes(query)
        );
    });

    const finalAlerts = searchedAlerts.filter((alert) => {
        if(!selectedDate) return true;
        return alert.date === selectedDate;
    });

    const alertsPerPage = 10;
    const lastIndex = currentPage * alertsPerPage;
    const firstIndex = lastIndex - alertsPerPage;
    const paginatedAlerts = finalAlerts.slice(firstIndex, lastIndex);


  return (

    <DashboardLayout>
        <div className="alerts-page"> 
            {/* Components */}
            <div className="alerts-content">
                <AlertFilters 
                    selectedType = {selectedType}
                    setSelectedType = {setSelectedType}

                    selectedSeverity = {selectedSeverity}
                    setSelectedSeverity = {setSelectedSeverity}

                    selectedStatus = {selectedStatus}
                    setSelectedStatus = {setSelectedStatus}

                    searchQuery = {searchQuery}
                    setSearchQuery = {setSearchQuery}

                    selectedDate = {selectedDate}
                    setSelectedDate = {setSelectedDate}
                />
                <AlertsTable 
                    // selectedType = {selectedType}
                    // selectedSeverity = {selectedSeverity}
                    // selectedStatus = {selectedStatus}

                    // searchQuery = {searchQuery}
                    // selectedDate={selectedDate}

                    alerts = {paginatedAlerts}
                    setSelectedAlert = {setSelectedAlert}
                />
                <AlertPagination 
                    currentPage = {currentPage}
                    setCurrentPage = {setCurrentPage}

                    alertsPerPage = {alertsPerPage}
                    totalAlerts = {finalAlerts.length}
                />

                <IncidentDetailModal 
                    alert={selectedAlert}
                    onClose={() => 
                        setSelectedAlert(null)
                    }
                />
            </div>

        </div>
    </DashboardLayout>
  );
}

export default Alerts;