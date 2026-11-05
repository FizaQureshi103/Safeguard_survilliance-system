import "./IndoorMap.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import MapToolbar from "../../../components/IndoorMap/MapToolbar/MapToolbar";
import MapArea from "../../../components/IndoorMap/MapArea/MapArea";
import LegendPanel from "../../../components/IndoorMap/LegendPanel/LegendPanel";
import CameraInfo from "../../../components/IndoorMap/CameraInfo/CameraInfo";
import LiveFeedCamera from "../../../components/IndoorMap/LiveFeedCamera/LiveFeedCamera";

import { cameras } from "../../../data/Indoormap/cameras";
import FloorMap from "../../../assets/map/indoormap.png";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

function IndoorMap() {

    const location = useLocation();
    const isUser = location.pathname.startsWith("/user");

    // Officer's assigned cameras
    const assignedCameraIds = ["CAM-01", "CAM-04"];

    // Role-based camera filtering
    const roleBasedCameras = isUser
        ? cameras.filter((camera) =>
            assignedCameraIds.includes(camera.id)
          )
        : cameras;

    const [selectedFloor, setSelectedFloor] = useState("Ground Floor");
    const [searchLocation, setSearchLocation] = useState("");
    const [selectedCamera, setSelectedCamera] = useState(cameras[0]);
    const [showModal, setShowModal] = useState(false);

    const today = new Date();

    const date = today.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    // Search within role-based cameras
    const filteredCameras = roleBasedCameras.filter((camera) =>
        camera.name.toLowerCase().includes(searchLocation.toLowerCase())
    );

    return (
        <DashboardLayout  role={isUser ? "user" : "admin"}>

            <div className="indoor-map-page">

                <MapToolbar
                    selectedFloor={selectedFloor}
                    setSelectedFloor={setSelectedFloor}
                    searchLocation={searchLocation}
                    setSearchLocation={setSearchLocation}
                />

                <div className="indoor-layout">

                    <div className="map-wrapper">
                        <MapArea
                            mapImage={FloorMap}
                            cameras={filteredCameras}
                            selectedCamera={selectedCamera}
                            onCameraSelect={setSelectedCamera}
                        />
                    </div>

                    <aside className="right-panel">

                        <CameraInfo
                            camera={selectedCamera}
                            openModal={() => setShowModal(true)}
                        />

                        <LegendPanel />

                    </aside>

                </div>

                {showModal && selectedCamera && (
                    <LiveFeedCamera
                        camera={selectedCamera}
                        closeModal={() => setShowModal(false)}
                    />
                )}

            </div>

        </DashboardLayout>
    );
}

export default IndoorMap;