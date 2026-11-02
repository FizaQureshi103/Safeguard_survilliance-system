import "./Legend.css";

import { FaRoute, FaFire } from "react-icons/fa";
import { MdBlock } from "react-icons/md";

function Legend() {

  const items = [
    {
      icon: <FaRoute />,
      text: "Safe Route",
      color: "#22C55E",
    },
    {
      icon: <MdBlock />,
      text: "Blocked Area",
      color: "#EF4444",
    },
    {
      icon: <FaFire />,
      text: "Incident Location",
      color: "#F97316",
    },
  ];

  return (

    <div className="evacuation-legend-card">

      <div className="evacuation-legend-list">

        <div className="legend-title">Legend: </div>

        {items.map((item, index) => (

          <div className="evacuation-legend-item" key={index}>

            <div
              className="evacuation-legend-icon"
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

export default Legend;