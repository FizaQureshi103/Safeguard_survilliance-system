
import { useState } from "react";
import { useLocation } from "react-router-dom";

import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";
import FilterBar from "../../../components/LiveMonitoring/FilterBar/FilterBar";
import CameraGrid from "../../../components/LiveMonitoring/CameraGrid/CameraGrid";
import SingleCameraView from "../../../components/LiveMonitoring/SingleCameraView/SingleCameraView";

import { cameraData } from "../../../data/LiveMonitoring/cameraData";

import "./LiveMonitoring.css";

function LiveMonitoring() {
    const location = useLocation();

    const isUser = location.pathname.startsWith("/user");

    const [selectedCamera, setSelectedCamera] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFloor, setSelectedFloor] = useState("All Floors");
    const [viewMode, setViewMode] = useState("grid");

    // DEMO: Camera IDs assigned to this security officer
    // Replace these with actual logged-in officer assignments later.
    const assignedCameraIds = ["CAM-01", "CAM-04"];

    // Role-based camera access
    const roleBasedCameras = isUser
        ? cameraData.filter(camera =>
            assignedCameraIds.includes(camera.cameraId)
          )
        : cameraData;

    // Search + Floor Filter
    const filteredCameras = roleBasedCameras.filter((camera) => {
        const search = searchTerm.toLowerCase();

        const matchesSearch =
            camera.cameraId.toLowerCase().includes(search) ||
            camera.title.toLowerCase().includes(search) ||
            camera.location.toLowerCase().includes(search);

        const matchesFloor =
            selectedFloor === "All Floors" ||
            camera.floor === selectedFloor;

        return matchesSearch && matchesFloor;
    });

    const handleCameraClick = (camera) => {
        setSelectedCamera(camera);
    };

    const handleCloseCamera = () => {
        setSelectedCamera(null);
    };

    return (
        <DashboardLayout role={isUser ? "user" : "admin"}>
            <main className="live-monitoring-page">

                <FilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedFloor={selectedFloor}
                    setSelectedFloor={setSelectedFloor}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />

                <section className="live-camera-section">
                    <CameraGrid
                        cameras={filteredCameras}
                        viewMode={viewMode}
                        onCameraClick={handleCameraClick}
                    />
                </section>

                {selectedCamera && (
                    <SingleCameraView
                        camera={selectedCamera}
                        onClose={handleCloseCamera}
                    />
                )}

            </main>
        </DashboardLayout>
    );
}

export default LiveMonitoring;
