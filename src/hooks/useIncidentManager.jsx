
import { useNotification } from "../context/NotificationContext";
import { useRecentAlerts } from "../context/RecentAlertContext";

export function useIncidentManager() {

    const { addNotification } = useNotification();
    const { addAlert } = useRecentAlerts();

    // const notification = useNotification();
    // const recentAlerts = useRecentAlerts();

    // it's for debugging
    // console.log("Notification:", notification);
    //  console.log("ResentAlerts:", recentAlerts);


    const createIncident = (incident) => {

        // Notification
        addNotification({
            title: incident.type,
            message: incident.location,
            type: incident.type.toLowerCase(),
        });

        // Recent Alert
        addAlert({
            type: incident.type,
            camera: incident.camera,
            location: incident.location,
            time: incident.time,
            status: incident.status,
        });

    };

    return {
        createIncident,
    };

}