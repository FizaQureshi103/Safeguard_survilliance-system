import "./ThreatDistribution.css";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { useThreatDistribution } from "../../../context/ThreatDistributionContext.jsx";


function ThreatDistribution() {

  const { distributionData } = useThreatDistribution();

  const total = distributionData.reduce(
    (sum, item) => sum + item.value,
    0
  );


  return (
    <div className="threat-distribution">

      {/* Header */}
      <div className="threat-distribution-header">

        <h2>Alerts by Type</h2>

        <p>This Week</p>

      </div>


      {/* Chart Area */}
      <div className="distribution-main">

        {/* Doughnut */}
        <div className="distribution-chart">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={distributionData}
                dataKey="value"
                nameKey="title"
                cx="50%"
                cy="50%"
                innerRadius="58%"
                outerRadius="78%"
                paddingAngle={1}
                stroke="none"
              >

                {distributionData.map((item) => (
                  <Cell
                    key={item.id}
                    fill={item.color}
                  />
                ))}

              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />

            </PieChart>

          </ResponsiveContainer>


          {/* Center */}
          <div className="distribution-center">

            <strong>{total}</strong>

            <span>Total</span>

          </div>

        </div>


        {/* Legend */}
        <div className="distribution-legend">

          {distributionData.map((item) => {

            const percentage =
              total === 0
                ? 0
                : ((item.value / total) * 100).toFixed(1);


            return (
              <div
                className="distribution-item"
                key={item.id}
              >

                <div className="distribution-item-left">

                  <span
                    className="distribution-dot"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <span>
                    {item.title}
                  </span>

                </div>


                <span className="distribution-value">

                  {item.value} ({percentage}%)

                </span>

              </div>
            );

          })}

        </div>

      </div>

    </div>
  );
}

export default ThreatDistribution;