import "./Evacuation.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteControls from "../../components/Evacuation/RouteControls/RouteControls";
import RouteMap from "../../components/Evacuation/RouteMap/RouteMap";
import RouteSummary from "../../components/Evacuation/RouteSummary/RouteSummary";
import Legend from "../../components/Evacuation/Legend/Legend";

import { routes } from "../../data/EvacuationMap/routes";
import DashboardLayout from "../../components/Dashboard/Layout/DashboardLayout";

function Evacuation() {
    const [incident, setIncident] = useState("Food Court");
    const [destination, setDestination] = useState("Main Exit");
    const [routeData, setRouteData] = useState(routes["Food Court-Main Exit"]);

    const generateRoute = () => {
        const key = `${incident}-${destination}`;
        if(routes[key]){
            setRouteData(routes[key]);
        }
    };

    const navigate = useNavigate();

    return (
        <DashboardLayout>
            <div className="evacuation-page">
                {/* Main Layout */}
                <div className="evacuation-layout">
                    {/* Left Panel */}
                    <aside className="left-panel">

                        <RouteControls
                            incident={incident}
                            setIncident={setIncident}
                            destination={destination}
                            setDestination={setDestination}
                            generateRoute={generateRoute}
                        />
                    </aside>

                    {/* Center */}
                    <div className="map-panel">
                        <RouteMap 
                            routeData = {routeData}
                        />
                    </div>

                    {/* Right */}
                    <aside className="right-panel">
                        <RouteSummary 
                            routeData = {routeData}
                        />
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