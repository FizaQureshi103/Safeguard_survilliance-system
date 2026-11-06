
import "./StatCard.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import AnimatedNumber from "../../Common/AnimatedNumber.jsx";

function StatCard({
  title,
  value,
  icon,
  color,
  description,
  status,
  highlighted,
}) {
  const isDanger = status === "danger";

  return (
    <div className={`stat-card ${highlighted ? "highlighted" : ""}`}
        style={{
            borderLeft: `4px solid ${color}`,
        }}
    >

      {/* LEFT SECTION - ICON */}
      <div
        className="stat-icon"
        style={{
          backgroundColor: `${color}20`,
          color: color,
        }}
      >
        {icon}
      </div>

      {/* RIGHT SECTION - DETAILS */}
      <div className="stat-details">

        <h4>{title}</h4>

        <h2>
          {typeof value === "number" ? (
            <AnimatedNumber value={value} />
          ) : (
            value
          )}
        </h2>

        <div className={`card-status ${status}`}>
          {/* {isDanger ? <FaArrowUp /> : <FaArrowDown />} */}

          <span>{description}</span>
        </div>

      </div>

    </div>
  );
}

export default StatCard;