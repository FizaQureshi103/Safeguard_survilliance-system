
import "./Evacuation.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import RouteControls from "../../../components/Evacuation/RouteControls/RouteControls";
import RouteMap from "../../../components/Evacuation/RouteMap/RouteMap";
import RouteSummary from "../../../components/Evacuation/RouteSummary/RouteSummary";
import Legend from "../../../components/Evacuation/Legend/Legend";

import { routes } from "../../../data/EvacuationMap/routes";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

function Evacuation() {
    const location = useLocation();
    const isUser = location.pathname.startsWith("/user");

    // Demo: Officer's assigned incident areas
    const assignedAreas = ["Food Court"];

    // Filter routes according to role
    const availableRoutes = Object.fromEntries(
        Object.entries(routes).filter(([key]) => {
            if (!isUser) return true;

            const incidentArea = key.split("-")[0];
            return assignedAreas.includes(incidentArea);
        })
    );

    const [incident, setIncident] = useState(
        isUser ? "Food Court" : "Food Court"
    );

    const [destination, setDestination] = useState("Main Exit");

    const [routeData, setRouteData] = useState(
        availableRoutes["Food Court-Main Exit"]
    );

    const generateRoute = () => {
        const key = `${incident}-${destination}`;

        if (availableRoutes[key]) {
            setRouteData(availableRoutes[key]);
        }
    };

    return (
        <DashboardLayout  role={isUser ? "user" : "admin"}>
            <div className="evacuation-page">
                <div className="evacuation-layout">

                    <aside className="left-panel">
                        <RouteControls
                            incident={incident}
                            setIncident={setIncident}
                            destination={destination}
                            setDestination={setDestination}
                            generateRoute={generateRoute}
                            availableIncidents={
                                isUser ? assignedAreas : undefined
                            }
                        />
                    </aside>

                    <div className="map-panel">
                        <RouteMap routeData={routeData} />
                    </div>

                    <aside className="right-panel">
                        <RouteSummary routeData={routeData} />
                    </aside>

                    <div className="legend-panel">
                        <Legend />
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
}

export default Evacuation;
