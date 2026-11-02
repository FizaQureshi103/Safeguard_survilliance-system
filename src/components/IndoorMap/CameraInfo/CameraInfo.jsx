import "./CameraInfo.css";

function CameraInfo({camera, openModal}) {

  return (

    <div className="camera-info">
        <h3>Camera Details</h3>

        <h4>
            {camera.id} . {camera.name}
        </h4>
      <div className="camera-data">
        
        <div>
          <span>Status</span>
          <strong className={
            camera.status === "Online" ? "online" : "offline"
          }>
            {camera.status}
          </strong>
        </div>

        <div>
          <span>Resolution</span>
          <strong>
            {camera.resolution}
          </strong>
        </div>

        <div>
          <span>Last Detection</span>
          <strong className={
            camera.detection === "No Alert" ? "online" : "offline"
          }>
            {camera.detection}
          </strong>
        </div>

        <div>
          <span>Time</span>
          <strong>
              {camera.time}
          </strong>
        </div>

      </div>

      <button onClick={openModal}> View Live Feed </button>

    </div>

  );

}

export default CameraInfo;