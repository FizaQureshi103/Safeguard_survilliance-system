
import { useState } from 'react';
import './DashboardLayout.css';

import { SearchProvider } from '../../../context/SearchContext.jsx';
import { NotificationProvider } from '../../../context/NotificationContext.jsx';
import { DashboardProvider } from '../../../context/DashboardContext.jsx';
import { ThreatOverviewProvider } from '../../../context/ThreatOverviewContext.jsx';
import { ThreatDistributionProvider } from '../../../context/ThreatDistributionContext.jsx';
import { RecentAlertProvider } from '../../../context/RecentAlertContext.jsx';

import Sidebar from '../Sidebar/Sidebar.jsx';
import Topbar from '../Topbar/Topbar.jsx';

function DashboardLayout({ children, role = "admin" }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    return (
        <RecentAlertProvider>
            <ThreatDistributionProvider>
                <ThreatOverviewProvider>
                    <DashboardProvider>
                        <SearchProvider>
                            <NotificationProvider>

                                <div className={`dashboard-layout ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`}>

                                    <Sidebar
                                        role={role}
                                        isSidebarOpen={isSidebarOpen}
                                        setIsSidebarOpen={setIsSidebarOpen}
                                        isSidebarCollapsed={isSidebarCollapsed}
                                        setIsSidebarCollapsed={setIsSidebarCollapsed}
                                    />

                                    {isSidebarOpen && (
                                        <div
                                            className="sidebar-overlay"
                                            onClick={() => setIsSidebarOpen(false)}
                                        />
                                    )}

                                    <div className="dashboard-content">

                                        <Topbar
                                            role={role}
                                            isSidebarOpen={isSidebarOpen}
                                            setIsSidebarOpen={setIsSidebarOpen}
                                        />

                                        <main className="dashboard-main">
                                            {children}
                                        </main>

                                    </div>
                                </div>

                            </NotificationProvider>
                        </SearchProvider>
                    </DashboardProvider>
                </ThreatOverviewProvider>
            </ThreatDistributionProvider>
        </RecentAlertProvider>
    );
}

export default DashboardLayout;
