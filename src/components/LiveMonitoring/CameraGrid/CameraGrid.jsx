import "./CameraGrid.css";
import CameraCard from "../CameraCard/CameraCard";

function CameraGrid({
    cameras,
    viewMode = "grid",
    onCameraClick
}) {

    return (
        <div className={`camera-grid ${viewMode}`}>

            {cameras.length > 0 ? (

                cameras.map((camera) => (

                    <CameraCard
                        key={camera.id}
                        camera={camera}
                        viewMode={viewMode}
                        onClick={() => onCameraClick(camera)}
                    />

                ))

            ) : (

                <div className="no-cameras">
                    <h3>No Cameras Found</h3>
                    <p>
                        Try changing your search or floor filter.
                    </p>
                </div>

            )}

        </div>
    );
}

export default CameraGrid;