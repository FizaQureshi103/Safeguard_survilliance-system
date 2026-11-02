import React, { useState } from "react";
import {
  FaMicrochip,
  FaWifi,
  FaBan,
  FaBell,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./IoTDevices.css";
import DeviceModal from "../../components/IoTDevice/DeviceModal";
import DashboardLayout from "../../components/Dashboard/Layout/DashboardLayout";

function IoTDevices() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("add");
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [devices, setDevices] = useState([
        {
        id: "DEV-01",
        name: "Camera A1",
        type: "IP Camera",
        location: "Ground Floor",
        status: "Online",
        ip: "192.168.1.101",
        lastSeen: "1 min ago",
        },
        {
        id: "DEV-02",
        name: "Smoke Sensor",
        type: "IoT Sensor",
        location: "Lobby A",
        status: "Online",
        ip: "192.168.1.110",
        lastSeen: "30 sec ago",
        },
        {
        id: "DEV-03",
        name: "Door Lock",
        type: "Smart Lock",
        location: "Corridor B",
        status: "Offline",
        ip: "192.168.1.115",
        lastSeen: "2 hr ago",
        },
        {
        id: "DEV-04",
        name: "Camera A2",
        type: "IP Camera",
        location: "First Floor",
        status: "Online",
        ip: "192.168.1.120",
        lastSeen: "2 min ago",
        },
        {
        id: "DEV-05",
        name: "Motion Sensor",
        type: "IoT Sensor",
        location: "Main Gate",
        status: "Online",
        ip: "192.168.1.125",
        lastSeen: "45 sec ago",
        },
    ]);

  const onlineDevices = devices.filter(
    (device) => device.status === "Online"
  ).length;

  const offlineDevices = devices.filter(
    (device) => device.status === "Offline"
  ).length;

  const handleDelete = (id) => {
    setDevices((prev) => prev.filter((device) => device.id !== id));
  };

  const handleAddDevice = () => {
    setModalMode("add");
    setSelectedDevice(null);
    setModalOpen(true);
  };

  const handleEdit = (device) => {
    setModalMode("edit");
    setSelectedDevice(device);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDevice(null);
  };

  const handleSaveDevice = (deviceData) => {
    if (modalMode === "add") {
      const newDevice = {
        ...deviceData,
        lastSeen: "Just now",
      };

      setDevices((prev) => [
        ...prev,
        newDevice,
      ]);

    } else {

      setDevices((prev) =>
        prev.map((device) =>
          device.id === deviceData.id
            ? {
                ...deviceData,
                lastSeen: device.lastSeen,
              }
            : device
        )
      );
    }

    handleCloseModal();
  };


  return (

    <DashboardLayout> 
         <div className="iot-devices-page">

      {/*HEADER */} 

      {/*STAT CARDS*/}
      <div className="device-stats">

        <div className="device-stat-card">
          <div className="stat-icon total-icon">
            <FaMicrochip />
          </div>

          <div className="stat-content">
            <h2>{devices.length}</h2>
            <span>Total Devices</span>
          </div>
        </div>

        <div className="device-stat-card">
          <div className="stat-icon online-icon">
            <FaWifi />
          </div>

          <div className="stat-content">
            <h2>{onlineDevices}</h2>
            <span>Online</span>
          </div>
        </div>

        <div className="device-stat-card">
          <div className="stat-icon offline-icon">
            <FaBan />
          </div>

          <div className="stat-content">
            <h2>{offlineDevices}</h2>
            <span>Offline</span>
          </div>
        </div>

        <div className="device-stat-card">
          <div className="stat-icon alert-icon">
            <FaBell />
          </div>

          <div className="stat-content">
            <h2>2</h2>
            <span>Alerts</span>
          </div>
        </div>

      </div>

      {/* DEVICE REGISTRY */}
      <div className="device-registry">

        <div className="registry-header">
          <h2>Device Registry</h2>

          <button
            className="add-device-btn"
            onClick={handleAddDevice}
          >
            <FaPlus />
            <span>Add Device</span>
          </button>
        </div>

        {/* ================= TABLE ================= */}
        <div className="device-table-wrapper">

          <table className="device-table">

            <thead>
              <tr>
                <th>DEVICE<br />ID</th>
                <th>NAME</th>
                <th>TYPE</th>
                <th>LOCATION</th>
                <th>STATUS</th>
                <th>IP ADDRESS</th>
                <th>LAST<br />SEEN</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              {devices.map((device) => (
                <tr key={device.id}>

                  <td>
                    <span className="device-id">
                      {device.id}
                    </span>
                  </td>

                  <td>
                    <span className="device-name">
                      {device.name}
                    </span>
                  </td>

                  <td>
                    <span className="device-type">
                      {device.type}
                    </span>
                  </td>

                  <td>
                    <span className="device-location">
                      {device.location}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`device-status ${
                        device.status.toLowerCase()
                      }`}
                    >
                      <span className="status-dot"></span>
                      {device.status}
                    </span>
                  </td>

                  <td>
                    <span className="ip-address">
                      {device.ip}
                    </span>
                  </td>

                  <td>
                    <span className="last-seen">
                      {device.lastSeen}
                    </span>
                  </td>

                  <td>
                    <div className="device-actions">

                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(device)}
                        title="Edit Device"
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(device.id)
                        }
                        title="Delete Device"
                      >
                        <FaTrash />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

     <DeviceModal
        isOpen={modalOpen}
        mode={modalMode}
        device={selectedDevice}
        onClose={handleCloseModal}
        onSave={handleSaveDevice}
      />

    </div>
    </DashboardLayout>
  );
}

export default IoTDevices;