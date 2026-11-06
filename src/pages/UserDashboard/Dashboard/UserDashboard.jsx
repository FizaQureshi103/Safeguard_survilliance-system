import React from "react";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import UserDashboardHeader from "../../../components/UserDashboard/Header/UserDashboardHeader";
import DashboardCards from "../../../components/Dashboard/Cards/DashboardCards";
import AssignedAreas from "../../../components/UserDashboard/AssignedAreas/AssignedAreas";
// import ThreatOverview from "../../../components/Dashboard/ThreatOverview/ThreatOverview";
// import ThreatDistribution from "../../../components/Dashboard/ThreatDistribution/ThreatDistribution";
// import RecentAlerts from "../../../components/Dashboard/RecentAlerts/RecentAlerts";
// import UserSystemHealth from "../../../components/UserDashboard/SystemHealth/UserSystemHealth";

import { userDashboardStats } from "../../../data/UserDashboard/userDashboardStats";

import "./UserDashboard.css";

function UserDashboard() {
  return (
    <DashboardLayout role="user">
      <div className="user-dashboard-page">
        <UserDashboardHeader />

        <DashboardCards stats={userDashboardStats} />

        <AssignedAreas />

        {/* <div className="user-dashboard-charts">
          <ThreatOverview />
          <ThreatDistribution />
        </div>

        <div className="user-dashboard-bottom">
          <RecentAlerts />
          <UserSystemHealth />
        </div> */}
      </div>
    </DashboardLayout>
  );
}

export default UserDashboard;