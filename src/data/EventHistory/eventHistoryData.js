import { FaFire, FaChild, FaUserSecret } from "react-icons/fa";
import { GiPistolGun} from 'react-icons/gi'

export const eventHistoryData = [
    {
        id: 1,
        icon: FaFire,
        event: "Fire Detected",
        camera: "CAM-01",
        location: "Main Entrance",
        floor: "Ground Floor",
         date:"2026-08-01",
        time: "10:04 AM",
        severity: "High",
        status: "Resolved",
    },

    {
        id: 2,
        icon: GiPistolGun,
        event: "Weapon Detected",
        camera: "CAM-07",
        location: "Corridor 1",
        floor: "First Floor",
        date:"2026-08-02",
        time: "10:09 AM",
        severity: "High",
        status: "In Progress",
    },

    {
        id: 3,
        icon: FaUserSecret,
        event: "Snatching Detected",
        camera: "CAM-12",
        location: "Parking Area",
        floor: "Ground Floor",
        date:"2026-08-01",
        time: "10:17 AM",
        severity: "Medium",
        status: "Resolved",
    },

    {
        id: 4,
        icon: FaChild,
        event: "Missing Child",
        camera: "CAM-04",
        location: "Food Court",
        floor: "Ground Floor",
        date:"2026-08-03",
        time: "10:26 AM",
        severity: "Low",
        status: "Resolved",
    },

    {
        id: 5,
        icon: FaFire,
        event: "Fire Detected",
        camera: "CAM-09",
        location: "Gate 1",
        floor: "Ground Floor",
        date:"2026-08-04",
        time: "09:42 AM",
        severity: "High",
        status: "Resolved",
    },

    {
        id: 6,
        icon: GiPistolGun,
        event: "Weapon Detected",
        camera: "CAM-03",
        location: "Main Hall",
        floor: "First Floor",
        date:"2026-08-05",
        time: "11:15 AM",
        severity: "High",
        status: "Resolved",
    },
];