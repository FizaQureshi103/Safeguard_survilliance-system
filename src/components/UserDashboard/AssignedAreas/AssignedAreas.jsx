
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaVideo, FaArrowRight } from "react-icons/fa";

import { assignedAreas } from "../../../data/UserDashboard/assignedAreas";
import "./AssignedAreas.css";

function AssignedAreas() {
  const navigate = useNavigate();

  return (
    <section className="user-assigned-areas">

      <div className="assigned-areas-header">
        <div>
          <h2>My Assigned Areas</h2>
          <p>Locations and cameras under your supervision</p>
        </div>

        <button onClick={() => navigate("/user/indoormap")}>
          View Map <FaArrowRight />
        </button>
      </div>

      <div className="assigned-areas-grid">

        {assignedAreas.map((area) => (
          <div className="assigned-area-card" key={area.id}>

            <div className="assigned-area-top">
              <div className="assigned-area-icon">
                <FaMapMarkerAlt />
              </div>

              <span className="camera-online">
                <span className="online-dot"></span>
                {area.status}
              </span>
            </div>

            <h3>{area.name}</h3>

            <p className="assigned-area-floor">
              {area.floor} · {area.location}
            </p>

            <div className="assigned-area-camera">
              <FaVideo />
              <span>{area.camera}</span>
              <span className="camera-label">Assigned Camera</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default AssignedAreas;
