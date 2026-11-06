import {
    FaVideo,
    FaFire,
    FaExclamationTriangle,
    FaChild,
    FaShieldAlt,
    FaBullseye,
    FaCheckCircle,
    FaHandPaper,
} from "react-icons/fa";

export const userDashboardStats = [
  {
    id: 1,
    title: "Assigned Cameras",
    value: "02",
    description: "Cameras under your supervision",
    icon: FaVideo,
    color: "#2563EB",
    status: "success",
  },
  {
    id: 2,
    title: "Active threat",
    value: "02",
    description: "Require your attention",
    icon: FaBullseye,
    color: "#EF4444",
    status: "danger",
  },
  {
    id: 3,
    title: "Pending Alerts",
    value: "02",
    description: "Awaiting response",
    icon: FaExclamationTriangle,
    color: "#F59E0B",
    status: "warning",
  },
  {
    id: 4,
    title: "Resolved Alerts",
    value: "18",
    description: "Successfully handled",
    icon: FaCheckCircle,
    color: "#10B981",
    status: "success",
  },
];