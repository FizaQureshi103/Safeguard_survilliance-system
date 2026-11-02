import "./IncidentDetailModal.css";
import { useEffect } from "react";

import IncidentInfo from './IncidentInfo';
import IncidentImage from './IncidentImage';
import IncidentActions from './IncidentActions';

function IncidentDetailModal({ alert, onClose }) {

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape"){
                onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

//    useEffect(() => {
//        const layout = document.querySelector(".dashborad-layout")

//        if(layout && alert){
//         layout.classList.add("modal-open");
//        }

//        return () => {
//         if(layout) {
//             layout.classList.remove("modal-open");
//         }
//        };

//     }, [alert]);

    if (!alert) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="incident-modal"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="modal-header">
                    <h2>Incident Details</h2>
                    <button 
                        className="close-btn"
                        onClick={onClose}>
                        ✕
                    </button>
                </div>

                {/* MAIN CONTENT */}
                <div className="incident-content">
                    <IncidentInfo 
                        alert = {alert}
                    />
                    <IncidentImage 
                        alert = {alert}
                    />
                </div>

                {/* BOTTOM BUTTON */}
                <IncidentActions 
                    alert = {alert}
                />
            </div>
        </div>
    );
}

export default IncidentDetailModal;