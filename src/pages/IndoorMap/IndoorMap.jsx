import "./IndoorMap.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MapToolbar from "../../components/IndoorMap/MapToolbar/MapToolbar";
import MapArea from "../../components/IndoorMap/MapArea/MapArea";
import LegendPanel from "../../components/IndoorMap/LegendPanel/LegendPanel";
import CameraInfo from "../../components/IndoorMap/CameraInfo/CameraInfo";
import { cameras } from "../../data/Indoormap/cameras";
import FloorMap from "../../assets/map/indoormap.png";
import LiveFeedCamera from "../../components/IndoorMap/LiveFeedCamera/LiveFeedCamera";
import DashboardLayout from "../../components/Dashboard/Layout/DashboardLayout";

function IndoorMap() {
      const [selectedFloor, setSelectedFloor] = useState("Ground Floor");
      const [searchLocation, setSearchLocation] = useState('');
      const [selectedCamera, setSelectedCamera] = useState(cameras[0]);
      const [showModal, setShowModal] = useState(false);

      const today = new Date();
      const date = today.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      const filteredCameras = cameras.filter((camera) =>
        camera.name.toLowerCase().includes(searchLocation.toLowerCase())
      );

       const navigate = useNavigate();

    return (
      <DashboardLayout>
        <div className="indoor-map-page">
          {/* Toolbar */}
          <MapToolbar
            selectedFloor={selectedFloor}
            setSelectedFloor={setSelectedFloor}
            searchLocation = {searchLocation}
            setSearchLocation = {setSearchLocation}
          />

          {/* Main Layout */}
          <div className="indoor-layout">
            {/* Map */}
            <div className="map-wrapper">
              <MapArea 
                    mapImage={FloorMap} 
                    cameras = {filteredCameras}
                    selectedCamera={ selectedCamera}
                    onCameraSelect = {setSelectedCamera}
              />
            </div>

            {/* Right Panel */}
            <aside className="right-panel">
                <CameraInfo 
                    camera = {selectedCamera}
                    openModal = {() => setShowModal(true)}
                />
                <LegendPanel />
            </aside>
          </div>

          { showModal && (
            <LiveFeedCamera 
              camera = {selectedCamera}
              closeModal={() => setShowModal(false)}
            />
          )

          }
        </div>
      </DashboardLayout>
    );
}

export default IndoorMap;