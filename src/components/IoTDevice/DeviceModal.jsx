import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./DeviceModal.css";

function DeviceModal({
  isOpen,
  mode = "add",
  device = null,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "IP Camera",
    location: "",
    status: "Online",
    ip: "",
    lastSeen: "Just now",
  });

  useEffect(() => {
    if (!isOpen) return;

    if (mode === "edit" && device) {
      setFormData({
        ...device,
      });
    } else {
      setFormData({
        id: "",
        name: "",
        type: "IP Camera",
        location: "",
        status: "Online",
        ip: "",
        lastSeen: "Just now",
      });
    }
  }, [isOpen, mode, device]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };

  return (
    <div
      className="device-modal-overlay"
      onClick={onClose}
    >
      <div
        className="device-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ================= HEADER ================= */}

        <div className="device-modal-header">

          <div>
            <h2>
              {mode === "add"
                ? "Add New Device"
                : "Edit Device"}
            </h2>

            <p>
              {mode === "add"
                ? "Add a new surveillance device to the system."
                : "Update the selected device information."}
            </p>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
          >
            <FaTimes />
          </button>

        </div>


        {/* ================= FORM ================= */}

        <form
          className="device-form"
          onSubmit={handleSubmit}
        >

          {/* Device ID */}

          <div className="form-group">
            <label>Device ID</label>

            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="DEV-01"
              disabled={mode === "edit"}
              required
            />
          </div>


          {/* Device Name */}

          <div className="form-group">
            <label>Device Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Camera A1"
              required
            />
          </div>


          {/* Device Type */}

          <div className="form-group">
            <label>Device Type</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="IP Camera">
                IP Camera
              </option>

              <option value="IoT Sensor">
                IoT Sensor
              </option>

              <option value="Smart Lock">
                Smart Lock
              </option>

              <option value="Motion Sensor">
                Motion Sensor
              </option>

              <option value="Smoke Sensor">
                Smoke Sensor
              </option>
            </select>
          </div>


          {/* Location */}

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Ground Floor"
              required
            />
          </div>


          {/* IP Address */}

          <div className="form-group">
            <label>IP Address</label>

            <input
              type="text"
              name="ip"
              value={formData.ip}
              onChange={handleChange}
              placeholder="192.168.1.101"
              required
            />
          </div>


          {/* Status */}

          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Online">
                Online
              </option>

              <option value="Offline">
                Offline
              </option>
            </select>
          </div>


          {/* Buttons */}

          <div className="device-form-actions">

            <button
              type="button"
              className="cancel-device-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-device-btn"
            >
              {mode === "add"
                ? "Add Device"
                : "Save Changes"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default DeviceModal;