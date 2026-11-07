import {FaFire} from "react-icons/fa"
import{GiPistolGun} from "react-icons/gi"
import {MdChildCare,  MdWarning} from "react-icons/md"

export const userRecentAlerts = [
  {
    id: 1,
    type: "Fire Detection",
    camera: "CAM-04",
    location: "Food Court",
    time: "10:45 AM",
    date: "06 Nov 2026",
    severity: "High",
    status: "Pending",
    icon: FaFire,
    iconColor:"#ef4444",
    iconBg:"#ef444420"
  },
  {
    id: 2,
    type: "Weapon Detection",
    camera: "CAM-01",
    location: "Main Entrance",
    time: "10:20 AM",
    date: "06 Nov 2026",
    severity: "High",
    status: "Resolved",
    icon: GiPistolGun,
    iconColor:"#F59E0B",
    iconBg:"#f59e0b20"
  },
  {
    id: 3,
    type: "Snatching",
    camera: "CAM-04",
    location: "Food Court",
    time: "09:50 AM",
    date: "06 Nov 2026",
    severity: "Medium",
    status: "Resolved",
    icon: MdWarning,
    iconColor:"#3b82f6",
    iconBg:"#3b82f620"
  },
  {
    id: 4,
    type: "Fire Detection",
    camera: "CAM-01",
    location: "Main Entrance",
    time: "09:15 AM",
    date: "06 Nov 2026",
    severity: "High",
    status: "Resolved",
    icon: FaFire,
    iconColor:"#ef4444",
    iconBg:"#ef444420"
  },
];