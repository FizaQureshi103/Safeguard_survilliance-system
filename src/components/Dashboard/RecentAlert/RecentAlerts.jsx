import "./RecentAlerts.css";
import { useNavigate } from "react-router-dom";
import { useRecentAlerts } from "../../../context/RecentAlertContext";
import { useSearch } from "../../../context/SearchContext";



function RecentAlerts() {
  const navigate = useNavigate();

  const { alerts } = useRecentAlerts();
  const { searchQuery } = useSearch();

  const latestAlerts = alerts.slice(0, 4);

  console.log("Total Alerts:", alerts.length);
  console.log("Latest Alerts:", latestAlerts.length);

  const filteredAlerts = latestAlerts.filter((alert) =>
    alert.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alert.camera.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alert.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="recent-alerts">

      <div className="alerts-header">
            <h2>Recent Alerts</h2>

            <button 
                className="view-all-btn"
                onClick={() => navigate("/alert")}
              >
                view all
            </button>
      </div>

        <div className="table-wrapper">
            <table className="alerts-table">

                <thead>

                  <tr>
                    <th>Alert Type</th>
                    <th>Camera ID</th>
                    <th>Location</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Severity</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredAlerts.length === 0 ? (
                      <tr>
                          <td colSpan="7" style={{ textAlign: "center" }}>
                              No alerts found
                          </td>
                      </tr>

                    ) : (

                    filteredAlerts.map((alert) => {
                        const Icon = alert.icon;
                        return (
                            <tr
                                key={alert.id}
                                onClick={() => navigate("/alert")}
                                style={{ cursor: "pointer" }}
                            >
                                <td>
                                    <div className="alert-type">
                                        <div
                                            className="alert-icon"
                                            style={{ background: alert.iconBg }}
                                        >
                                            <Icon
                                                size={18}
                                                color={alert.iconColor}
                                            />
                                        </div>
                                        <span>{alert.type}</span>
                                    </div>
                                </td>
                                <td>{alert.camera}</td>
                                <td>{alert.location}</td>
                                <td>{alert.time}</td>
                                <td>{alert.date}</td>
                                <td>
                                    <span className={`severity ${alert.severity.toLowerCase()}`}>
                                        {alert.severity}
                                    </span>
                                </td>
                                <td>
                                    <span
                                        className={`status-badge ${alert.status.toLowerCase()}`}
                                    > {alert.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })
                    )}
                </tbody>
              </table>
        </div>

    </div>
  );
}

export default RecentAlerts;