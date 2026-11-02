import "./LegendPanel.css";
import {
  FaVideo,
  FaFire,
  FaChild,
  FaRunning,
} from "react-icons/fa";

import { GiPistolGun } from "react-icons/gi";
import { MdExitToApp } from "react-icons/md";

function LegendPanel() {

  const items = [
    { icon: <FaVideo />, text: "Cameras", color: "#2563EB" },
    { icon: <FaFire />, text: "Fire Detected", color: "#EF4444" },
    { icon: <GiPistolGun />, text: "Weapon Detected", color: "#F59E0B" },
    { icon: <FaChild />, text: "Missing Child", color: "#8B5CF6" },
    { icon: <FaRunning />, text: "Snatching", color: "#06B6D4" },
    { icon: <MdExitToApp />, text: "Exit", color: "#22C55E" },
  ];

  return (

    <div className="indoor-legend-card">

      <h3>Legend</h3>

      <div className="indoor-legend-list">

        {items.map((item, index) => (

          <div className="indoor-legend-item" key={index}>

            <div
              className="indoor-legend-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <span>{item.text}</span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default LegendPanel;