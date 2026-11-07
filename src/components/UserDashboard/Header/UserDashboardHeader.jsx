import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboardHeader.css";

function UserDashboardHeader() {
  const navigate = useNavigate();

    const today = new Date();

    const date = today.toLocaleDateString('en-GB',{
        weekday: 'long',
        day: 'numeric',
        month:"long",
        year:'numeric'
    });


  return (
    <div className="user-dashboard-header">
      <div>
        <h1>Welcome Back, Security Officer</h1>
        <p>
          Monitor your assigned cameras and manage security incidents.
        </p>
      </div>

        <div className="header-right">
            <div className="date">
                {date}
            </div>
        </div>

      {/* <button onClick={() => navigate("/user/alert")}>
        View All Alerts
      </button> */}
    </div>
  );
}

export default UserDashboardHeader;