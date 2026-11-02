import "./LiveFeedCamera.css";
import { FaTimes, FaVideo } from "react-icons/fa";
import {useEffect, useState} from 'react'

function LiveFeedCamera({ camera, closeModal }) {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString([],{
                    hour:"2-digit",
                    minute:"2-digit",
                    second:"2-digit"
                })
            );
        },1000);
        return ()=>clearInterval(timer);
    },[]);

  if (!camera) return null;

  return (
    <div className="modal-overlay">

      <div className="live-modal">

        {/* Header */}

        <div className="modal-header">
          <div>
            <h2>{camera.id}</h2>
            <p>{camera.name}</p>
          </div>

          <div className="modal-time">
                {currentTime}
          </div>

          <button
            className="close-btn"
            onClick={closeModal}
          >
            <FaTimes />
          </button>
        </div>

        {/* Dummy Camera Feed */}

        <div className="video-container">

          <FaVideo className="video-icon" />

          <h3>LIVE CAMERA FEED</h3>

          <p>Streaming from {camera.name}</p>

          <span className={
                camera.status === "Online"? "live-badge" : "offline"
            }
          >
             {camera.status}
          </span>

        </div>

        {/* Details */}

        <div className="feed-details">

          <div>
            <span>Status</span>

            <strong className="online">
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
            <span>Detection</span>

            <strong
              className={
                camera.detection === "No Alert"
                  ? "online"
                  : "offline"
              }
            >
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

      </div>

    </div>
  );
}

export default LiveFeedCamera;