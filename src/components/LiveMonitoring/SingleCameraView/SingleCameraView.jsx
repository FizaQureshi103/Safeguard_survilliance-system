import { useEffect, useState } from "react";
import {
    FaCamera,
    FaCircle,
    FaBell,
    FaSearchPlus,
    FaExpand,
    FaVideo,
    FaFire,
    FaMicrophone,
    FaCrosshairs,
    FaChild,
    FaShieldAlt,
    FaTimes
} from "react-icons/fa";

import "./SingleCameraView.css";

function SingleCameraView({ camera, onClose }) {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [zoomed, setZoomed] = useState(false);

        /* Current Date / Time*/
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);

    }, []);

    const formattedDate = currentTime.toLocaleDateString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric"
        }
    );

    const formattedTime = currentTime.toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );

    if (!camera) return null;

    /* Detection Data*/
    const detection = camera.detection || {
        type: "Fire",
        confidence: 96
    };

    const detectionConfig = {

        Fire: {
            icon: FaFire,
            color: "#EF4444"
        },

        Weapon: {
            icon: FaCrosshairs,
            color: "#F59E0B"
        },

        Snatching: {
            icon: FaShieldAlt,
            color: "#8B5CF6"
        },

        "Missing Child": {
            icon: FaChild,
            color: "#3B82F6"
        },

        None: {
            icon: FaShieldAlt,
            color: "#22C55E"
        }

    };

    const currentDetection =
        detectionConfig[detection.type] ||
        detectionConfig.None;

    const DetectionIcon = currentDetection.icon;


    /* Actions*/
    // const handleRecord = () => {
    //     setIsRecording((prev) => !prev);
    // };

    // const handleTalk = () => {
    //     setIsTalking((prev) => !prev);
    // };

    const handleZoom = () => {
        setZoomed((prev) => !prev);
    };

    const handleFullscreen = async () => {

        const element =
            document.querySelector(".single-camera-modal");

        if (!document.fullscreenElement) {

            try {
                await element.requestFullscreen();
                setIsFullscreen(true);
            } catch (error) {
                console.log("Fullscreen not supported");
            }

        } else {

            await document.exitFullscreen();
            setIsFullscreen(false);

        }
    };

    return (

        <div
            className="single-camera-overlay"
            onClick={onClose}
        >

            <div
                className="single-camera-modal"
                onClick={(e) => e.stopPropagation()}
            >

                {/*TOP HEADEr */}

                <div className="single-camera-header">

                    <div className="single-camera-title">
                        <h2>
                            <strong>{camera.cameraId}</strong>
                            <span>|</span>
                            {camera.title}
                        </h2>
                    </div>

                    <div className="single-camera-header-right">

                        <span className="single-camera-date">
                            {formattedDate} {formattedTime}
                        </span>

                        <span className="single-live-badge">
                            <span className="live-dot"></span>
                            LIVE
                        </span>

                        <button
                            className="close-camera-btn"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <FaTimes />
                        </button>

                    </div>

                </div>

                {/* CAMERA FEED */}

                <div
                    className={`single-camera-feed ${
                        zoomed ? "zoomed" : ""
                    }`}
                >

                    <img
                        src={camera.image}
                        alt={camera.title}
                    />

                    <div className="feed-overlay"></div>

                    <span className="feed-time">
                        {formattedDate} {formattedTime}
                    </span>

                    {/* Image Actions */}
                    <div className="feed-actions">

                        <button
                            className={`feed-action-btn ${
                                zoomed ? "active-feed-action" : ""
                            }`}
                            onClick={handleZoom}
                            title="Zoom"
                        >
                            <FaSearchPlus />
                        </button>

                        <button
                            className="feed-action-btn"
                            onClick={handleFullscreen}
                            title="Full Screen"
                        >
                            <FaExpand />
                        </button>

                    </div>
                </div>

                {/*CAMERA CONTROl*/}
               {/* <div className="camera-controls">
                    <button
                        className="camera-control"
                        onClick={handleSnapshot}
                    >
                        <FaCamera />
                        <span> Snapshot </span>
                    </button>

                    <button
                        className={`camera-control ${
                            isRecording ? "active-control" : ""
                        }`}
                        onClick={handleRecord}
                    >

                        <span
                            className={`record-icon ${
                                isRecording ? "recording" : ""
                            }`}
                        >
                            <FaCircle />
                        </span>

                        <span>
                            {isRecording
                                ? "Stop Record"
                                : "Record"}
                        </span>

                    </button>
                </div> */}

                {/* SINGLE INFORMATION */}
                <div className="single-camera-bottom">

                    <div className="ai-detection-card">
                        <h3> AI Detections</h3>
                        <div
                            className="detection-box"
                            style={{
                                "--detection-color":
                                    currentDetection.color
                            }}
                        >
                            <div
                                className="detection-icon"
                                style={{
                                    color:
                                        currentDetection.color,
                                    borderColor:
                                        currentDetection.color
                                }}
                            >
                                <DetectionIcon />
                            </div>

                            <div className="detection-content">
                                <h4
                                    style={{
                                        color:
                                            currentDetection.color
                                    }}
                                >
                                    {detection.type}
                                </h4>
                                <p>
                                    Confidence:{" "}
                                    {detection.confidence}%
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="camera-info-card">
                        <h3> Camera Info</h3>

                        <div className="camera-info-list">
                            <div className="info-row">
                                <span>
                                    Camera ID
                                    <FaVideo />
                                </span>

                                <strong>
                                    {camera.cameraId}
                                </strong>
                            </div>

                            <div className="info-row">
                                <span> Location</span>
                                <strong>{camera.title}</strong>
                            </div>

                            <div className="info-row">
                                <span>Floor</span>
                                <strong> {camera.floor || "Ground Floor"}</strong>
                            </div>

                            <div className="info-row">
                                <span>Status</span>
                                <strong className="online-status">
                                    <span className="status-dot"></span> Online
                                </strong>
                            </div>

                            <div className="info-row">
                                <span>Resolution</span>
                                <strong className="blue-value">1920 × 1080</strong>
                            </div>

                            <div className="info-row">
                                <span>AI Model</span>
                                <strong className="blue-value">YOLOv8</strong>
                            </div>

                            <div className="info-row">
                                <span>Last Updated</span>
                                <strong className="green-value">{formattedTime}</strong>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCameraView;