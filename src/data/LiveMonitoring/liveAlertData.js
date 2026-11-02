import { FaFire, FaChild } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

export const liveAlertData = [
  {
    id: 1,
    title: "Fire Detected",
    location: "CAM 04 • Food Court",
    time: "10:04 AM",
    bg: "#EF4444",
    icon: FaFire ,
  },

  {
    id: 2,
    title: "Weapon Detected",
    location: "CAM 02 • Main Gate",
    time: "10:16 AM",
    bg: "#F59E0B",
    icon: GiPistolGun ,
  },

  {
    id: 3,
    title: "Missing Child",
    location: "CAM 05 • Kids Zone",
    time: "09:58 AM",
    bg: "#3B82F6",
    icon: FaChild,
  },

  {
    id: 4,
    title: "Suspicious Activity",
    location: "CAM 01 • Parking",
    time: "09:41 AM",
    bg: "#8B5CF6",
    icon: MdOutlineSecurity, 
  }
];