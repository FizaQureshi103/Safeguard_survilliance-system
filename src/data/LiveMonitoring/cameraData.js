import Cam1 from "../../assets/cameras/cam1.png";
import Cam2 from "../../assets/cameras/cam2.png";
import Cam3 from "../../assets/cameras/cam3.png";
import Cam4 from "../../assets/cameras/cam4.png";


export const cameraData = [

    {
        id: 1,
        cameraId: "CAM-01",
        title: "Main Entrance",
        location: "Main Gate",
        floor: "Ground Floor",
        status: "LIVE",
        resolution: "1920 × 1080",
        fps: 30,
        aiModel: "YOLOv8",
        detection: "No Threat",
        confidence: 98,
        lastUpdate: "10:24:18 AM",
        image: Cam1,
    },

    {
        id: 2,
        cameraId: "CAM-02",
        title: "Parking Area",
        location: "North Parking",
        floor: "Ground Floor",
        status: "LIVE",
        resolution: "1920 × 1080",
        fps: 30,
        aiModel: "YOLOv8",
        detection: "Weapon Detected",
        confidence: 94,
        lastUpdate: "10:24:18 AM",
        image: Cam2,
    },

    {
        id: 3,
        cameraId: "CAM-03",
        title: "Food Court",
        location: "Food Court",
        floor: "Floor 1",
        status: "LIVE",
        resolution: "1920 × 1080",
        fps: 30,
        aiModel: "YOLOv8",
        detection: "Fire Detected",
        confidence: 96,
        lastUpdate: "10:24:18 AM",
        image: Cam3,
    },

    {
        id: 4,
        cameraId: "CAM-04",
        title: "Kids Zone",
        location: "East Wing",
        floor: "Floor 1",
        status: "LIVE",
        resolution: "1920 × 1080",
        fps: 30,
        aiModel: "YOLOv8",
        detection: "Missing Child",
        confidence: 91,
        lastUpdate: "10:24:18 AM",
        image: Cam4,
    },

];