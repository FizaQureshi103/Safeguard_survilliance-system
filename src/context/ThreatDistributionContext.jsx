import { createContext, useContext, useState } from "react";
import { initialThreatDistribution } from "../data/Dashboardpage/threatDistribution";

const ThreatDistributionContext = createContext();

export function ThreatDistributionProvider({ children }) {

    const [distributionData, setDistributionData] =
        useState(initialThreatDistribution);

    return (
        <ThreatDistributionContext.Provider
            value={{
                distributionData,
                setDistributionData,
            }}
        >
            {children}
        </ThreatDistributionContext.Provider>
    );
}

export const useThreatDistribution = () =>
    useContext(ThreatDistributionContext);