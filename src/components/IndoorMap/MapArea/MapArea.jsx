import "./MapArea.css";
import mapImage from "../../../assets/map/indoormap.png";
import { FaVideo } from "react-icons/fa";
import { useState } from "react";


// const cameras = [
//   { id: "CAM-01", top: "12%", left: "32%" },
//   { id: "CAM-02", top: "28%", left: "93%" },
//   { id: "CAM-03", top: "47%", left: "11%" },
//   { id: "CAM-04", top: "38%", left: "55%" },
//   { id: "CAM-05", top: "82%", left: "92%" },
//   { id: "CAM-06", top: "83%", left: "11%" },
//   { id: "CAM-07", top: "84%", left: "40%" }
// ];

function MapArea({mapImage, cameras, onCameraSelect, selectedCamera}) {

  const [zoom, setZoom] = useState(1);

    const zoomIn = () => {
      setZoom((prev) => Math.min(prev + 0.2, 2));
    };

    const zoomOut = () =>{
      setZoom((prev) => Math.max(prev - 0.2, 0.6));
    };

  return (
    <div className="map-card">

      <img
        src={mapImage}
        alt="Indoor Map"
        className="map-image"
        style = {{transform: `scale(${zoom})`}}
      />

       <div className="zoom-controls">
          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>-</button>
       </div>

      {cameras.map((camera) => (
        <button
            key={camera.id}
            className={
              selectedCamera?.id === camera.id
                ? "camera-marker active"
                : "camera-marker"
            }
            onClick={() => onCameraSelect(camera)}
            style={{
              top: `${camera.y}%`,
              left: `${camera.x}%`,
            }}
          >
            <FaVideo />
        </button>
      ))}

    </div>
  );
}

export default MapArea;