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


function DashboardCards() {

    // Dashboard context
    const { dashboardStats } = useDashboard();

    // Search context
    const { searchQuery } = useSearch();


    const cards = [

        // 1. Total Cameras
        {
            id: 1,
            title: "Total Cameras",
            value: dashboardStats.totalCameras,
            icon: <FaVideo />,
            color: "#2563EB",
            change: "+12 Added Today",
            status: "success",
        },


        // 2. Active Threats
        {
            id: 2,
            title: "Active Threats",
            value: dashboardStats.activeThreats,
            icon: <FaBullseye />,
            color: "#EF4444",
            change: "High Priority",
            status: "danger",
        },


        // 3. Resolved Today
        {
            id: 3,
            title: "Resolved Today",
            value: dashboardStats.resolvedToday,
            icon: <FaCheckCircle />,
            color: "#10B981",
            change: "Successfully Resolved",
            status: "success",
        },


        // 4. Fire Alerts
        {
            id: 4,
            title: "Fire Alerts",
            value: dashboardStats.fireAlerts,
            icon: <FaFire />,
            color: "#F59E0B",
            change: "Under Control",
            status: "warning",
        },


        // 5. Weapon Detection
        {
            id: 5,
            title: "Weapon Detection",
            value: dashboardStats.weaponDetections,
            icon: <FaExclamationTriangle />,
            color: "#DC2626",
            change: "Immediate Action",
            status: "danger",
        },


        // 6. Snatching
        {
            id: 6,
            title: "Snatching",
            value: dashboardStats.snatching,
            icon: <FaHandPaper />,
            color: "#8B5CF6",
            change: "Under Investigation",
            status: "warning",
        },


        // 7. Missing Children
        {
            id: 7,
            title: "Missing Children",
            value: dashboardStats.missingChildren,
            icon: <FaChild />,
            color: "#8B5CF6",
            change: "Searching...",
            status: "warning",
        },


        // 8. System Health
        {
            id: 8,
            title: "System Health",
            value: `${dashboardStats.systemAccuracy}%`,
            icon: <FaShieldAlt />,
            color: "#10B981",
            change: "Running Smoothly",
            status: "success",
        },

    ];


    return (

        <section className="dashboard-cards">

            {cards.map((card) => {

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
                        change={card.change}
                        status={card.status}
                        highlighted={isMatched}
                    />
                );

            })}

        </section>

    );
}


export default DashboardCards;