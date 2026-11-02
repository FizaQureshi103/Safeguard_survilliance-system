import "./AlertsTable.css";
import { alertData } from "../../../data/AlertPage/alertData";


function AlertsTable({ alerts, setSelectedAlert}) {

    return (
        <div className="alerts-table-wrapper">
            <table className="alerts-table">

                <thead>
                    <tr>
                        <th>Alert Type</th>
                        <th>Camera ID</th>
                        <th>Location</th>
                        <th>Confidence</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Severity</th>
                        <th>Status</th>
                    </tr>
                </thead>


                {/* Dynamic Rows */}
                <tbody>
                    {alerts.map((alert) => {
                        const Icon = alert.icon;
                        return (
                        <tr 
                            key={alert.id}
                            onClick={() => setSelectedAlert(alert)}
                            style={{cursor:"pointer"}}
                        >

                            <td className="alert-type">
                                <Icon className="alert-icon" />
                                {alert.type}
                            </td>
                            <td>{alert.camera}</td>
                            <td>{alert.location}</td>
                            <td>{alert.confidence}</td>
                            <td>{alert.time}</td>
                            <td>{alert.date}</td>
                            <td>
                                <span className={`severity ${alert.severity.toLowerCase()}`}>
                                    {alert.severity}
                                </span>
                            </td>
                            <td>
                                <span className={`status ${alert.status.toLowerCase()}`}>
                                    {alert.status}
                                </span>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AlertsTable;