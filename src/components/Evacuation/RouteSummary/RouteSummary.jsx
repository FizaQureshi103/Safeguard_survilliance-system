import "./RouteSummary.css";
import { FaRoute, FaClock, FaUsers, FaRobot } from "react-icons/fa";

function RouteSummary({routeData}) {

  return (
        <div className="route-summary">

            <h3>Route Summary</h3>
            <div className="summary-item">
                <FaRoute />
                <div>
                    <span>Distance</span>
                    <p>{routeData.distance}</p>
                </div>
            </div>

            <div className="summary-item">
                <FaClock />
                <div>
                    <span>Estimated Time</span>
                    <p>{routeData.time}</p>
                </div>
            </div>

            <div className="summary-item">
                <FaUsers />
                <div>
                    <span>Last Detection</span>
                    <p>{routeData.detection}</p>
                </div>
            </div>

            <div className="summary-item">
                <FaRobot />
                <div>
                    <span>AI Recommendation</span>
                    <p>{routeData.recommendation}</p>
                </div>
            </div>

            <div className="safe-path-msg">
                <p>
                    <i>"Stay calm and follow the highlighted route to reach the safe location!"</i>
                </p>
            </div>

            <button className="start-btn">
                Start Navigation
            </button>
        </div>
  );

}

export default RouteSummary;