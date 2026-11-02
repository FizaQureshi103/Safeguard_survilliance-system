import { createContext, useContext, useState } from "react";
import { initialAlerts } from "../data/DashboardPage/recentAlerts";

const RecentAlertContext = createContext();

export function RecentAlertProvider({ children }) {

    const [alerts, setAlerts] = useState(initialAlerts);

    // Add new alerts
    const addAlert = (alert) => {
        const newAlert = {
            id:Date.now(),
            ...alert,
        }

        setAlerts(prev => [
            newAlert,
            ...prev,
        ]);
    };

    //remove alert
    const removeAlert = (id) => {
        setAlerts(prev => 
            prev.filter(alert => alert.id !== id)
        );
    };

    //clear all
    const clearAlerts = () => {
        setAlerts([]);
    };

    return (
        <RecentAlertContext.Provider
            value={{
                alerts,
                addAlert,
                removeAlert,
                clearAlerts,
            }}
        >
            {children}
        </RecentAlertContext.Provider>
    );
}

export const useRecentAlerts = () => useContext(RecentAlertContext);