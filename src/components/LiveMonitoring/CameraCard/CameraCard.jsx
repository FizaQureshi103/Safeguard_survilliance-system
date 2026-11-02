import "./CameraCard.css";

function CameraCard({
    camera,
    onClick,
    viewMode = "grid"
}) {

    return (
        <div
            className={`camera-card ${viewMode}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {

                if (e.key === "Enter" || e.key === " ") {
                    onClick();
                }

            }}
        >

            <div className="camera-image">

                <img
                    src={camera.image}
                    alt={camera.title}
                />


                {/* LIVE STATUS */}

                <span
                    className={`live-badge ${
                        camera.status.toLowerCase()
                    }`}
                >
                    {camera.status}
                </span>


                {/* TIME */}

                <span className="camera-time">
                    {camera.lastUpdate}
                </span>


                {/* CAMERA INFO */}

                <div className="camera-overlay-info">

                    <strong>
                        {camera.cameraId}
                    </strong>

                    <span>
                        {camera.title}
                    </span>

                </div>

            </div>

        </div>
    );
}

export default CameraCard;