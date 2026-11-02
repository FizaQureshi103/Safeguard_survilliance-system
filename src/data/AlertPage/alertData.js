import { FaFire, FaChild } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import FireImage from '../../assets/cameras/cam2.png';
import WeaponImage from '../../assets/cameras/cam4.png';
import SnatchingImage from '../../assets/cameras/cam5.png';
import MissingChildImage from '../../assets/cameras/cam1.png';

export const alertData = [
  {
    id: 1,
    icon: FaFire,
    type: "Fire Detected",
    camera: "CAM 04",
    location: "Food Court",
    confidence: "96%",
    time: "10:04 AM",
    date:"2026-08-05",
    severity: "High",
    status: "Active",
    floor: "Ground Floor",
    description: "Fire detected near food court. Smoke and flames identified.",
    image: FireImage,
  },

  {
    id: 2,
    icon: GiPistolGun,
    type: "Weapon Detected",
    camera: "CAM 02",
    location: "Main Gate",
    confidence: "90%",
    time: "10:16 AM",
    date:"2026-08-05",
    severity: "High",
    status: "Active",
    floor: "Ground Floor",
    description: "Weapon detected near main gate. Smoke and flames identified.",
    image: WeaponImage,
  },

  {
    id: 3,
    icon: FaChild,
    type: "Missing Child",
    camera: "CAM 07",
    location: "Kids Zone",
    confidence: "91%",
    time: "09:56 AM",
    date:"2026-08-03",
    severity: "Medium",
    status: "Active",
    floor: "Ground Floor",
    description: "Fire detected near main food court. Smoke and flames identified.",
    image: MissingChildImage,
  },

  {
    id: 4,
    icon: MdOutlineSecurity,
    type: "Snatching",
    camera: "CAM 12",
    location: "Parking Area",
    confidence: "86%",
    time: "09:40 AM",
    date:"2026-08-02",
    severity: "Medium",
    status: "Active",
    floor: "Ground Floor",
    description: "Fire detected near main food court. Smoke and flames identified.",
    image: SnatchingImage,
  },

  {
    id: 5,
    icon: FaFire,
    type: "Fire Detected",
    camera: "CAM 06",
    location: "Electronic Store",
    confidence: "94%",
    time: "09:15 AM",
    date:"2026-08-05",
    severity: "High",
    status: "Resolved",
     floor: "Ground Floor",
    description: "Fire detected near main Electronic Store. Smoke and flames identified.",
    image: FireImage,
  },

  {
    id: 6,
    icon: GiPistolGun,
    type: "Weapon Detected",
    camera: "CAM 01",
    location: "Main Entrance",
    confidence: "90%",
    time: "09:20 AM",
    date:"2026-08-04",
    severity: "High",
    status: "Resolved",
    floor: "Ground Floor",
    description: "Fire detected near main food court. Smoke and flames identified.",
    image: WeaponImage
  },

  {
    id: 7,
    icon: FaChild,
    type: "Missing Child",
    camera: "CAM 05",
    location: "Clothing Store",
    confidence: "89%",
    time: "08:30 AM",
    date:"2026-08-01",
    severity: "Medium",
    status: "Resolved",
    floor: "Ground Floor",
    description: "Fire detected near main food court. Smoke and flames identified.",
    image: MissingChildImage,
  },

  //   {
  //   id: 1,
  //   icon: FaFire,
  //   type: "Fire Detected",
  //   camera: "CAM 04",
  //   location: "Food Court",
  //   confidence: "96%",
  //   time: "10:04 AM",
  //   date:"2026-08-05",
  //   severity: "High",
  //   status: "Active"
  // },

  // {
  //   id: 2,
  //   icon: GiPistolGun,
  //   type: "Weapon Detected",
  //   camera: "CAM 02",
  //   location: "Main Gate",
  //   confidence: "90%",
  //   time: "10:16 AM",
  //   date:"2026-08-05",
  //   severity: "High",
  //   status: "Active"
  // },

  // {
  //   id: 3,
  //   icon: FaChild,
  //   type: "Missing Child",
  //   camera: "CAM 07",
  //   location: "Kids Zone",
  //   confidence: "91%",
  //   time: "09:56 AM",
  //   date:"2026-08-03",
  //   severity: "Medium",
  //   status: "Active"
  // },

  // {
  //   id: 4,
  //   icon: MdOutlineSecurity,
  //   type: "Snatching",
  //   camera: "CAM 12",
  //   location: "Parking Area",
  //   confidence: "86%",
  //   time: "09:40 AM",
  //   date:"2026-08-02",
  //   severity: "Medium",
  //   status: "Active"
  // },

  // {
  //   id: 5,
  //   icon: FaFire,
  //   type: "Fire Detected",
  //   camera: "CAM 06",
  //   location: "Electronic Store",
  //   confidence: "94%",
  //   time: "09:15 AM",
  //   date:"2026-08-05",
  //   severity: "High",
  //   status: "Resolved"
  // },

  // {
  //   id: 6,
  //   icon: GiPistolGun,
  //   type: "Weapon Detected",
  //   camera: "CAM 01",
  //   location: "Main Entrance",
  //   confidence: "90%",
  //   time: "09:20 AM",
  //   date:"2026-08-04",
  //   severity: "High",
  //   status: "Resolved"
  // },

  // {
  //   id: 7,
  //   icon: FaChild,
  //   type: "Missing Child",
  //   camera: "CAM 05",
  //   location: "Clothing Store",
  //   confidence: "89%",
  //   time: "08:30 AM",
  //   date:"2026-08-01",
  //   severity: "Medium",
  //   status: "Resolved"
  // }
];