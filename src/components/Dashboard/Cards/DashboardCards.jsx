import "./DashboardCards.css";

import { useSearch } from "../../../context/SearchContext";
import { useDashboard } from "../../../context/DashboardContext";

import StatCard from "../StatCard/StatCard";

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


function DashboardCards({stats}) {

    // Dashboard context
    const { dashboardStats } = useDashboard();
    // Search context
    const { searchQuery } = useSearch();

    const cards = stats || [
        {
            id: 1,
            title: "Total Cameras",
            value: dashboardStats.totalCameras,
            icon: <FaVideo />,
            color: "#2563EB",
            description: "+12 Added Today",
            status: "success",
        },
        {
            id: 2,
            title: "Active Threats",
            value: dashboardStats.activeThreats,
            icon: <FaBullseye />,
            color: "#EF4444",
            description: "High Priority",
            status: "danger",
        },
        {
            id: 3,
            title: "Resolved Today",
            value: dashboardStats.resolvedToday,
            icon: <FaCheckCircle />,
            color: "#10B981",
            description: "Successfuly Resolved",
            status: "success",
        },
        {
            id: 4,
            title: "Fire Alerts",
            value: dashboardStats.fireAlerts,
            icon: <FaFire />,
            color: "#F59E0B",
            description: "Under Control",
            status: "warning",
        },
        {
            id: 5,
            title: "Weapon Detection",
            value: dashboardStats.weaponDetections,
            icon: <FaExclamationTriangle />,
            color: "#DC2626",
            description: "Immediate Action",
            status: "danger",
        },
        {
            id: 6,
            title: "Snatching",
            value: dashboardStats.snatching,
            icon: <FaHandPaper />,
            color: "#8B5CF6",
            description: "Under Investigation",
            status: "warning",
        },
        {
            id: 7,
            title: "Missing Children",
            value: dashboardStats.missingChildren,
            icon: <FaChild />,
            color: "#8B5CF6",
            description: "Searching....",
            status: "warning",
        },
        {
            id: 8,
            title: "System Health",
            value: `${dashboardStats.systemAccuracy}%`,
            icon: <FaShieldAlt />,
            color: "#10B981",
            description: "Running Smoothly",
            status: "success",
        },
    ];

    return (

        <section className="dashboard-cards">
            {/* {cards.map((card) => {
                const isMatched =
                    searchQuery &&
                    card.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                return (
                    <StatCard
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        value={card.value}
                        color={card.color}
                        description={card.description}
                        status={card.status}
                        highlighted={isMatched}
                    />
                );
            })} */}

            
            {cards.map((card) => {
                const isMatched =
                    searchQuery &&
                    card.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());

                // Convert icon component into JSX
                const Icon = card.icon;

            return (
                <StatCard
                    key={card.id}
                    icon={
                        typeof Icon === "function" ? <Icon /> : Icon
                    }
                    title={card.title}
                    value={card.value}
                    color={card.color}
                    description={card.description}
                    status={card.status}
                    highlighted={isMatched}
                />
            );
            })}
        </section>
    );
}

export default DashboardCards;