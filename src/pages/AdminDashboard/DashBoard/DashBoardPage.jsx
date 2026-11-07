import DashboardLayout from '../../../components/Dashboard/Layout/DashboardLayout.jsx';
import DashboardHeader from '../../../components/Dashboard/DashboardHeader/DashboardHeader.jsx';
import DashboardCards from '../../../components/Dashboard/Cards/DashboardCards.jsx';
import ThreatOverview from '../../../components/Dashboard/ThreatOverview/ThreatOverview.jsx';
import ThreatDistribution from '../../../components/Dashboard/ThreatDistribution/ThreatDistribution.jsx';
import RecentAlerts from '../../../components/Dashboard/RecentAlert/RecentAlerts.jsx'
import './DashBoardPage.css'
import SystemHealth from '../../../components/Dashboard/SystemHealth/SystemHealth.jsx';

function DashBoardPage(){
    return(
        <DashboardLayout role = "admin">
            
            <DashboardHeader />
            
            <DashboardCards />
                {/* Charts */}
                <div className="charts-grid">
                        <ThreatOverview />
                        <ThreatDistribution />
                </div>

                {/* Bottom-Section */}

                <div className="bottom-grid">
                    <RecentAlerts/>
                    <SystemHealth />
                    </div>

        </DashboardLayout>

    );
}

export default DashBoardPage;