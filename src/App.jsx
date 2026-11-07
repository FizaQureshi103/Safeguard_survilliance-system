
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Public Pages
import LandingPage from './pages/LandingPage/LandingPage';
import LoginForm from './pages/AuthPage/LoginForm';

// Admin Dashboard
import DashBoardPage from './pages/AdminDashboard/DashBoard/DashBoardPage.jsx';
import IoTDevices from './pages/AdminDashboard/IoTdevice/IoTDevices';
import Users from './components/User/Users';
import Settings from './pages/AdminDashboard/Setting/Settings';
import Analysis from './pages/AdminDashboard/Analysis/Analysis.jsx';
import AdminProfile from './pages/AdminDashboard/AdminProfile/AdminProfile.jsx';

// User Dashboard
import UserDashboard from './pages/UserDashboard/Dashboard/UserDashboard';
import UserNotifications from "./pages/UserDashboard/Notifications/UserNotifications";
import UserProfile from './pages/UserDashboard/UserProfile/UserProfile.jsx';
import UserSettings from "./pages/UserDashboard/Settings/UserSettings";

// Common Pages
import LiveMonitoring from './pages/Common/LiveMonitoringPage/LiveMonitoring';
import Alerts from './pages/Common/Alerts/Alerts';
import IndoorMap from './pages/Common/IndoorMap/IndoorMap';
import Evacuation from './pages/Common/Evacuation/Evacuation';
import EventHistory from './pages/Common/EventHistory/EventHistory';


function App() {
  return (
    <>
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#101D33",
            color: "#fff",
            border: "1px solid #3B82F6",
            borderRadius: "12px",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#22C55E",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />


        {/* ADMIN DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<AdminProfile />} />
        <Route path="/iotdevice" element={<IoTDevices />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analysis" element={<Analysis />} />

        {/* ADMIN - COMMON PAGES */}
        <Route path="/livemonitoring" element={<LiveMonitoring />} />
        <Route path="/alert" element={<Alerts />} />
        <Route path="/indoormap" element={<IndoorMap />} />
        <Route path="/evacuation" element={<Evacuation />} />
        <Route path="/history" element={<EventHistory />} />


        {/* USER DASHBOARD ROUTES */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/notifications" element={<UserNotifications />}/>
        <Route path="/user/profile" element={<UserProfile />}/>
        <Route path="/user/settings" element={<UserSettings />}/>
 
        {/* USER - COMMON PAGES */}
        <Route path="/user/livemonitoring" element={<LiveMonitoring />} />
        <Route path="/user/alert" element={<Alerts />} />
        <Route path="/user/indoormap" element={<IndoorMap />} />
        <Route path="/user/evacuation" element={<Evacuation />} />
        <Route path="/user/history" element={<EventHistory />} />

      </Routes>
    </>
  );
}

export default App;
