import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import LandingPage from './pages/LandingPage/LandingPage'
import LoginForm from './pages/AuthPage/LoginForm'
import DashBoardPage from './pages/DashBoard/DashBoardPage'
import Profile from './components/Dashboard/Profile/Profile'
import LiveMonitoring from './pages/LiveMonitoringPage/LiveMonitoring'
import Alerts from './pages/Alerts/Alerts'
import IndoorMap from './pages/IndoorMap/IndoorMap'
import Evacuation from './pages/Evacuation/Evacuation'
import EventHistory from './pages/EventHistory/EventHistory'
import IoTDevices from './pages/IoTdevice/IoTDevices'
import Users from './components/User/Users'
import Settings from './pages/Setting/Settings'
import Analysis from './pages/Analysis/Analysis.jsx'



function App() {

  return (
    <>
      {/* Toast Notification */}

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
        <Route path='/' element = {<LandingPage />}/>
        <Route path="/login" element = {<LoginForm />} />
        <Route path = "/dashboard" element = {<DashBoardPage />} />
        <Route path ="/livemonitoring" element = { <LiveMonitoring />} />
        <Route path = "/alert" element ={ <Alerts  />} />
        <Route path='/indoormap' element = { < IndoorMap/>}/>
        <Route path='/evacuation'element ={ <Evacuation />} />
        <Route path='/history' element ={ <EventHistory />} />
        <Route path='/users' element={<Users />}/>
        <Route  path='/profile' element={<Profile /> }/>
        <Route path='/iotdevice' element = {<IoTDevices/>}/>
        <Route path='/settings' element={<Settings /> } />
        <Route path="/analysis" element={<Analysis />}/>
      </Routes>
    </>
  )
}

export default App
