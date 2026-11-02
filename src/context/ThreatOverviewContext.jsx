import { createContext, useContext, useState } from "react";
import { initialThreatOverview } from "../data/Dashboardpage/threatsOverview";

const ThreatOverviewContext = createContext();

export function ThreatOverviewProvider({ children }) {

    const [overviewData, setOverviewData] = useState(initialThreatOverview);

    return (

        <ThreatOverviewContext.Provider
            value={{
                overviewData,
                setOverviewData,
            }}
        >
            {children}
        </ThreatOverviewContext.Provider>

    );
}

export const useThreatOverview = () => useContext(ThreatOverviewContext);