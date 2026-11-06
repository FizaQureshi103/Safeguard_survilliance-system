import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboardHeader.css";

function UserDashboardHeader() {
  const navigate = useNavigate();

  return (
    <div className="user-dashboard-header">
      <div>
        <h1>Welcome Back, Security Officer</h1>
        <p>
          Monitor your assigned cameras and manage security incidents.
        </p>
      </div>

      <button onClick={() => navigate("/user/alert")}>
        View All Alerts
      </button>
    </div>
  );
}

export default UserDashboardHeader;