import "./IncidentDetailModal.css";

function IncidentInfo({ alert }) {

    return (

        <div className="incident-info">

            {/* Incident ID + Severity */}

            <div className="incident-top">

                <p className="incident-id">
                    Incident ID :
                    <strong> INC-{alert.id}</strong>
                </p>

                <span
                    className={`severity-badge ${alert.severity.toLowerCase()}`}
                >
                    {alert.severity}
                </span>

            </div>

            {/* Details */}

            <div className="info-grid">

                <div className="info-row">
                    <span>Type</span>
                    <p>{alert.type}</p>
                </div>

                <div className="info-row">
                    <span>Camera ID</span>
                    <p>{alert.camera}</p>
                </div>

                <div className="info-row">
                    <span>Location</span>
                    <p>{alert.location}</p>
                </div>

                <div className="info-row">
                    <span>Floor</span>
                    <p>{alert.floor}</p>
                </div>

                <div className="info-row">
                    <span>Time</span>
                    <p>{alert.date} {alert.time}</p>
                </div>

                <div className="info-row">
                    <span>Confidence</span>
                    <p>{alert.confidence}</p>
                </div>

                <div className="info-row">
                    <span>Status</span>
                    <p>{alert.status}</p>
                </div>

            </div>

            {/* Description */}

            <div className="incident-description">
                <h4>Description</h4>
                <p>
                    {alert.description}
                </p>
            </div>

        </div>

    );

}

export default IncidentInfo;