import "./IncidentDetailModal.css";
import { useState } from "react";

import {
    FaWhatsapp,
    FaSms,
    FaDownload,
    FaCamera,
} from "react-icons/fa";

function IncidentActions({alert}) {

    const [loading, setLoading] = useState({
        whatsapp:false,
        sms:false,
        download:false,
        snapsot:false,
    });

    const handleWhatsApp = async () => {
        setLoading((prev) => ({
            ...prev,
            whatsapp:true,
        }));

        console.log(alert);

        await new Promise((resolve) => 
            setTimeout(resolve, 2000)
        );

        setLoading((prev) => ({
            ...prev,
            whatsapp:false,
        }));
    }; 

    const handleSMS = async() => {
        setLoading((prev) => ({
            ...prev,
            sms:true,
        }));

        console.log(alert);

        await new Promise((resolve) => 
            setTimeout(resolve, 2000)
        );

        setLoading((prev) => ({
            ...prev,
            sms:false,
        }));
    };

    const handleDownload = async() => {
        setLoading((prev) => ({
            ...prev,
            downloading :true,
        }));

        console.log(alert);

        await new Promise((resolve) => 
            setTimeout(resolve, 2000)
        );

        setLoading((prev) => ({
            ...prev,
            downloading:false,
        }));
    }; 


    const handleSnapshot = async () => {
        setLoading((prev) => ({
            ...prev,
            snapshot:true,
        }));

        console.log(alert);

        await new Promise((resolve) => 
            setTimeout(resolve, 2000)
        );

        setLoading((prev) => ({
            ...prev,
            snapshot:false,
        }));
    }; 

    return (

        <div className="incident-actions">

            <button 
                className="action-btn whatsapp"
                onClick={handleWhatsApp}
                disabled={loading.whatsapp}
            >
                <FaWhatsapp />
                {loading.whatsapp ? "Sending..." : "Send WhatsApp"}
            </button>

            <button 
                className="action-btn sms"
                onClick={handleSMS}
                disabled = {loading.sms}
            >
                <FaSms />
                {loading.sms ? "Sendind..." : "Send SMS"}
            </button>

            <button 
                className="action-btn"
                onClick={handleDownload}
                disabled = {loading.download}
            > 
                <FaDownload />
                {loading.downloading ? "downloading..." : "Download"}
            </button>

            <button 
                className="action-btn"
                onClick={handleSnapshot}
                disabled = {loading.snapsot}
            > 
                <FaCamera />
                {loading.snapshot ? "Capturing..." : "Snapshot"}
            </button>

        </div>

    );

}

export default IncidentActions;