import "./RouteMap.css";

import mapImage from "../../../assets/map/evacuation.png";

import { FaFire, FaDoorOpen } from "react-icons/fa";

function RouteMap({routeData}) {

  return (

    <div className="route-map-card">

      <img
        src={mapImage}
        alt="Evacuation Map"
        className="route-map-image"
      />

      {/* Safe Route */}
          <div className="safe-route">
            
          </div>
      {/* Incident */}

      <div
        className="incident-marker"
        style={{
          top: `${routeData.incident.y}%`,
          left: `${routeData.incident.x}%`,
        }}
      >
        <FaFire />
      </div>

      {/* Exit */}

      <div
        className="exit-marker"
        style={{
          top: `${routeData.exit.y}%`,
          left: `${routeData.exit.x}%`,
        }}
      >
        <FaDoorOpen />
      </div>

    </div>

  );

}

export default RouteMap;