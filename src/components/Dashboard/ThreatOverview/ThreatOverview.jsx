import "./ThreatOverview.css";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { useThreatOverview } from "../../../context/ThreatOverviewContext.jsx";

function ThreatOverview() {

  const { overviewData } = useThreatOverview();

  return (
    <div className="threat-overview">

      {/* Header */}
      <div className="threat-overview-header">
        <h2>Alerts Over Time</h2>
        <p>This Week</p>
      </div>

      {/* Chart */}
      <div className="threat-overview-chart">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={overviewData}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >

            <CartesianGrid
              stroke="rgba(255,255,255,0.07)"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
              width={30}
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            <Legend
              verticalAlign="top"
              align="center"
              height={40}
              iconType="circle"
              wrapperStyle={{
                fontSize: "13px",
                paddingBottom: "5px"
              }}
            />

            {/* Fire */}
            <Line
              type="monotone"
              dataKey="fire"
              name="Fire"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#3B82F6",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
              }}
            />

            {/* Weapon */}
            <Line
              type="monotone"
              dataKey="weapon"
              name="Weapon"
              stroke="#EF4444"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#EF4444",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
              }}
            />

            {/* Missing Child */}
            <Line
              type="monotone"
              dataKey="missingChild"
              name="Missing Child"
              stroke="#F59E0B"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#F59E0B",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
              }}
            />

            {/* Snatching */}
            <Line
              type="monotone"
              dataKey="snatching"
              name="Snatching"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#8B5CF6",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ThreatOverview;