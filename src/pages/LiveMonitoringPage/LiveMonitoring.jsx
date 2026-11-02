import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/Dashboard/Layout/DashboardLayout";
import FilterBar from "../../components/LiveMonitoring/FilterBar/FilterBar";
import CameraGrid from "../../components/LiveMonitoring/CameraGrid/CameraGrid";
import SingleCameraView from "../../components/LiveMonitoring/SingleCameraView/SingleCameraView";

import { cameraData } from "../../data/LiveMonitoring/cameraData";

import "./LiveMonitoring.css";

function LiveMonitoring() {

    const navigate = useNavigate();

    const [selectedCamera, setSelectedCamera] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFloor, setSelectedFloor] = useState("All Floors");
    const [viewMode, setViewMode] = useState("grid");

    // Search + Floor Filter
    const filteredCameras = cameraData.filter((camera) => {

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
        <DashboardLayout>
            <main className="live-monitoring-page">
                {/* FILTER BAR  */}
                <FilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedFloor={selectedFloor}
                    setSelectedFloor={setSelectedFloor}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                />

                {/* CAMERAS ONLY*/}
                <section className="live-camera-section">

                    <CameraGrid
                        cameras={filteredCameras}
                        viewMode={viewMode}
                        onCameraClick={handleCameraClick}
                    />
                </section>

                {/* SINGLE CAMERA */}
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