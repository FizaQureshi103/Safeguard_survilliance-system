import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({children}){
 
    const [dashboardStats, setDashboardStats] = useState({
        totalCameras: 30,
        activeThreats: 18,
        resolvedToday: 12,
        fireAlerts: 9,
        weaponDetections: 5,
        snatching: 7,
        missingChildren: 2,
        systemAccuracy: 98.7,
});
        const increaseFireAlerts = () => {
            setDashboardStats(prev => ({
                ...prev,
                    fireAlerts: prev.fireAlerts + 1,
                    activeThreats: prev.activeThreats + 1,
                }));
            };

        const increaseWeaponDetection = () => {
            setDashboardStats(prev => ({
                ...prev,
                weaponDetections: prev.weaponDetections + 1,
                activeThreats: prev.activeThreats + 1,
            }));
        };

        const addCamera = () => {
            setDashboardStats(prev => ({
                ...prev,
                totalCameras: prev.totalCameras + 1,
            }));
        };


    return(
        <DashboardContext.Provider
            value={{
                dashboardStats,
                setDashboardStats,
                increaseFireAlerts,
                increaseWeaponDetection,
                addCamera,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
}

export const useDashboard = () => useContext(DashboardContext);