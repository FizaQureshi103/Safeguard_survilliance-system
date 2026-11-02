import { createContext, useContext, useState } from "react";
import { initialNotifications } from "../data/Dashboardpage/notification";
import toast from "react-hot-toast";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {

    const [notifications, setNotifications] = useState(initialNotifications);
    const unreadCount = notifications.filter(
        item => !item.read
    ).length;

    // Mark One Notification Read

    const markAsRead = (id) => {

        setNotifications(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, read: true }
                    : item
            )
        );

    };

    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(item => ({
                ...item,
                read:true,
            }))
        );

        // toast.success("All notifications marked as read");
    };

    // Clear All
    const clearAllNotifications = () => {

        setNotifications([]);

        toast.success("All notifications cleared");

    };

    // Add New Notification
    const addNotification = (notification) => {

        const newNotification = {               
            id:notification.id || Date.now(),   
            title:notification.title,
            message: notification.message,
            type: notification.type,
            icon: notification.icon,
            time:notification.time || "just now",
            read:false,
        }
        setNotifications(prev => [
            newNotification,
            ...prev,
        ]);

        toast.success(
            `${notification.title} . ${notification.message}`
        );
    };

    return (

        <NotificationContext.Provider
            value={{
                notifications,
                unreadCount,
                markAsRead,
                markAllAsRead,
                clearAllNotifications,
                addNotification,

            }}
        >

            {children}

        </NotificationContext.Provider>

    );

}

export const useNotification = () => useContext(NotificationContext);