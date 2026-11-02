import { FaCamera } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { BsDatabase } from "react-icons/bs";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";

export const systemHealth = [
  {
    id: 1,
    name: "Cameras",
    value: "124/124",
    status: "Online",
    icon: FaCamera,
    iconColor: "#3B82F6",
    iconBg: "rgba(59,130,246,.15)",
    statusColor: "#22C55E",
  },

  {
    id: 2,
    name: "AI Services",
    status: "Operational",
    icon: GiBrain,
    iconColor: "#8B5CF6",
    iconBg: "rgba(139,92,246,.15)",
    statusColor: "#22C55E",
  },

  {
    id: 3,
    name: "Database",
    status: "Operational",
    icon: BsDatabase,
    iconColor: "#F59E0B",
    iconBg: "rgba(245,158,11,.15)",
    statusColor: "#22C55E",
  },

  {
    id: 4,
    name: "Storage",
    status: "Operational",
    icon: HiOutlineServerStack,
    iconColor: "#06B6D4",
    iconBg: "rgba(6,182,212,.15)",
    statusColor: "#22C55E",
  },

  {
    id: 5,
    name: "Network",
    status: "Operational",
    icon: TbWorld,
    iconColor: "#10B981",
    iconBg: "rgba(16,185,129,.15)",
    statusColor: "#22C55E",
  },
];