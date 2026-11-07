import React from "react";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import UserDashboardHeader from "../../../components/UserDashboard/Header/UserDashboardHeader";
import DashboardCards from "../../../components/Dashboard/Cards/DashboardCards";
import AssignedAreas from "../../../components/UserDashboard/AssignedAreas/AssignedAreas";
import ThreatOverview from "../../../components/Dashboard/ThreatOverview/ThreatOverview";
import ThreatDistribution from "../../../components/Dashboard/ThreatDistribution/ThreatDistribution";
import RecentAlerts from "../../../components/Dashboard/RecentAlert/RecentAlerts";
import UserSystemHealth from "../../../components/UserDashboard/UserSystemHealth/UserSystemHealth";

import { userDashboardStats } from "../../../data/UserDashboard/userDashboardStats";
import { userThreatDistribution } from "../../../data/UserDashboard/userThreatDistribution";
import { userThreatOverview } from "../../../data/UserDashboard/userThreatOverview";
import { userRecentAlerts } from "../../../data/UserDashboard/userRecentAlerts";

import "./UserDashboard.css";


function UserDashboard() {

  return (
    <DashboardLayout role="user">
      <div className="user-dashboard-page">
        <UserDashboardHeader />

        <DashboardCards stats={userDashboardStats} />

        <AssignedAreas />

        <div className="user-dashboard-charts">
          <ThreatOverview data = {userThreatOverview}/>
          <ThreatDistribution data={userThreatDistribution} />
        </div>

       <div className="user-dashboard-bottom">
          <RecentAlerts 
              alerts={userRecentAlerts}
              alertPath="/user/alert"
          />
          <UserSystemHealth />
        </div> 
      </div>

    </DashboardLayout>
  );
}

export default UserDashboard;