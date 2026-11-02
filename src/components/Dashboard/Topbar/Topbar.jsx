import './Topbar.css'
import {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Admin from "../../../assets/admin.png"

import { useSearch } from '../../../context/SearchContext'
import {useNotification} from '../../../context/NotificationContext.jsx';
import { FaSearch,  FaBell, } from 'react-icons/fa'
import { HiBars3, HiOutlineGlobeAlt } from "react-icons/hi2";

// for demo after it replace with backend
const demoNotifications = [

    {
        title: "Fire Detected",
        message: "Food Court",
        type: "fire",
    },

    {
        title: "Weapon Detected",
        message: "Main Gate",
        type: "weapon",
    },

    {
        title: "Missing Child",
        message: "Kids Zone",
        type: "missing",
    },

    {
        title: "Snatching Alert",
        message: "Parking Area",
        type: "snatching",
    },

    {
        title: "Camera Offline",
        message: "Lobby",
        type: "camera",
    },

];


function Topbar({isSidebarOpen, setIsSidebarOpen}){

    const navigate = useNavigate();
    const {searchQuery, setSearchQuery} = useSearch();  
    const {
        notifications, 
        unreadCount, 
        markAsRead,
        markAllAsRead,
        clearAllNotifications,
        addNotification,
    } = useNotification();

    const [showProfile, setShowProfile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const profileRef = useRef(null);
    const notificationRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (
            profileRef.current &&
            !profileRef.current.contains(e.target)
            ) {
                setShowProfile(false);
            }

            if(notificationRef.current && 
                !notificationRef.current.contains(e.target)
            ) {
                setShowNotifications(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () =>
             document.removeEventListener("mousedown", handleClick);

    }, []);

    const handleLogout = () => {
        navigate("/login");
    };
    // whenever new threat detect it show notification
    // .hr 20 sec mn new notiication automatically show hoga or toast show hoga, notification badge 
    // increase hoga, dropdown mn sbse uper new notification aa jayga
    //  bd mn issy backend sy replace krdy gein

    /*
    useEffect(() => {
        const interval = setInterval(() => {
        const random =
            demoNotifications[
                Math.floor(Math.random() * demoNotifications.length)
            ];
            addNotification(random);
            }, 20000);
    return () => clearInterval(interval);
    }, []);
    */
    

    return(
        <header className="topbar">

            <div className="menu-btn" 
                onClick={()=> setIsSidebarOpen(!isSidebarOpen)}
            >
                <HiBars3  size ={24}/>
            </div>
            {/* searchbar */}

            <div className="search-box">

                <FaSearch  className='search-icon'/>

                <input type='text' placeholder='search...' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

            </div>

            {/* Right-section */}

            <div className="topbar-right">

                <div className="notification" ref={notificationRef}>
                    <FaBell
                        onClick={() => setShowNotifications(!showNotifications)}
                        style={{ cursor: "pointer" }}
                    />
                    {unreadCount > 0 && (
                        <span className="notification-dot">
                            {unreadCount}
                        </span>
                    )}
                    {showNotifications && (
                        <div className="notification-dropdown">
                            
                            <div className="notification-header">
                                <h4>Notifications</h4>

                                <div className="notification-actions">
                                    {unreadCount > 0 && (
                                        <button
                                            className='read-btn'
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                markAllAsRead();
                                            }}
                                        >
                                            Read All
                                        </button>
                                    )}
                                    {notifications.length > 0 && (
                                        <button
                                            className="clear-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                clearAllNotifications();
                                            }}
                                        >
                                            Clear All
                                        </button>
                                    )}

                                </div>
                            </div>

                            {notifications.length === 0 ? (
                                <div className="notification-empty">
                                    No notifications
                                </div>
                            ) : (
                                notifications.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`notification-item ${
                                            item.read ? "" : "unread"
                                        }`}
                                        onClick={() => markAsRead(item.id)}
                                    >
                                        <strong>{item.title}</strong>
                                        <p>{item.message}</p>
                                        <small>{item.time}</small>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>

                <div className="profile"
                    ref={profileRef}
                    onClick={() => setShowProfile(!showProfile)}
                >
                    <img src={Admin} alt='Admin'/>
                    <div>
                        <h4>Admin</h4>
                        <p>Security Officer</p>
                    </div>
                   { showProfile && (
                        <div className="profile-dropdown">

                            <button 
                                onClick={() =>{
                                    setShowProfile(false);
                                    navigate("/profile");
                                }}
                            >
                                My Profile
                            
                            </button>

                            <button>Settings</button>
                            
                            <button 
                                onClick={handleLogout}
                            > Logout
                            </button> 
                        </div>
                    ) }
                </div>
                
            </div>
        </header>
    );
}

export default Topbar;