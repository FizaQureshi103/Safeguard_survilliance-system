import "./SystemHealth.css";
import { systemHealth } from "../../../data/Dashboardpage/systemHealthData";

function SystemHealth() {
  return (
    <div className="system-health">

      <div className="health-header">
        <h2>System Health</h2>
      </div>

      <div className="health-list">

        {systemHealth.map((item) => {

          const Icon = item.icon;

          return (

            <div
              className="health-item"
              key={item.id}
            >

              {/* Left */}

              <div className="health-left">

                <div
                  className="health-icon"
                  style={{
                    background: item.iconBg,
                  }}
                >

                  <Icon
                    size={18}
                    color={item.iconColor}
                  />

                </div>

                <span className="health-name">
                  {item.name}
                </span>

              </div>

              {/* Right */}

              <div className="health-right">

                {item.value && (

                  <span className="health-value">
                    {item.value}
                  </span>

                )}

                <span
                  className="health-status"
                  style={{
                    color: item.statusColor,
                  }}
                >
                  {item.status}
                </span>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}

export default SystemHealth;