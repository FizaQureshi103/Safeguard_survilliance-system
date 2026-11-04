import "./Analysis.css";
import DashboardLayout from "../../../components/Dashboard/Layout/DashboardLayout";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { FaDownload } from "react-icons/fa";


export const summaryData = [
  {
    id: 1,
    title: "Total Alerts",
    value: "23",
    change: "+17%",
    type: "total",
  },

  {
    id: 2,
    title: "Response Time",
    value: "2.4 min",
    change: "-12%",
    type: "response",
  },

  {
    id: 3,
    title: "Pending Alerts",
    value: "3",
    change: "+8%",
    type: "pending",
  },

  {
    id: 4,
    title: "Resolved Alerts",
    value: "18",
    change: "+22%",
    type: "resolved",
  },

  {
    id: 5,
    title: "Fire Alerts",
    value: "6",
    change: "+30%",
    type: "fire",
  },

  {
    id: 6,
    title: "Weapon Alerts",
    value: "5",
    change: "+25%",
    type: "weapon",
  },

  {
    id: 7,
    title: "Snatching Alerts",
    value: "7",
    change: "+40%",
    type: "snatching",
  },

  {
    id: 8,
    title: "Missing Child Alerts",
    value: "2",
    change: "+20%",
    type: "missing",
  },
];


export const weeklyData = [
  {
    day: "Mon",
    fire: 12,
    weapon: 10,
    snatching: 8,
    missing: 5,
  },

  {
    day: "Tue",
    fire: 8,
    weapon: 7,
    snatching: 6,
    missing: 4,
  },

  {
    day: "Wed",
    fire: 18,
    weapon: 15,
    snatching: 12,
    missing: 7,
  },

  {
    day: "Thu",
    fire: 5,
    weapon: 5,
    snatching: 4,
    missing: 3,
  },

  {
    day: "Fri",
    fire: 23,
    weapon: 18,
    snatching: 16,
    missing: 9,
  },

  {
    day: "Sat",
    fire: 14,
    weapon: 12,
    snatching: 10,
    missing: 6,
  },

  {
    day: "Sun",
    fire: 10,
    weapon: 10,
    snatching: 9,
    missing: 5,
  },
];


export const distributionData = [
  {
    name: "Fire",
    value: 32,
  },

  {
    name: "Weapon",
    value: 25,
  },

  {
    name: "Missing",
    value: 18,
  },

  {
    name: "Snatching",
    value: 25,
  },
];


const distributionColors = [
  "#EF4444",
  "#f59e0b",
  "#8b5cf6",
  "#3b82f6",
];


function CustomTooltip({ active, payload, label }) {

  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="analysis-tooltip">

      <div className="tooltip-time">
        {label}
      </div>

      {payload.map((item) => (
        <div
          className="tooltip-row"
          key={item.dataKey}
        >
          <span> {item.name} </span>
          <strong> {item.value} </strong>
        </div>

      ))}
    </div>
  );
}

// ANALYSIS COMPONENT
function Analysis() {
  const handleDownloadReport = () => {
    console.log("Download analysis report");
  };

  return (

    <DashboardLayout>
      <section className="analysis-page">
        <div className="analysis-header">

          <div>
            <h1> Analytics / Reports </h1>
            <p>Analyze threat activity and system performance </p>
          </div>

          <div className="analysis-filters">

            <div className="date-filter">
              <input 
                type="date"
                placeholder="Select Date"
              />
            </div>

            <select className="period-filter">
              <option>Today </option>
              <option>Week</option>
              <option>Month</option>
            </select>

          </div>

        </div>

          <div className="analysis-summary">
              {summaryData.map((item) => (
                  <div
                      className={`analysis-stat-card stat-card-${item.type}` 
                      
                    }
                      key={item.id}
                  >
                      <div className="stat-card-top">
                          <span className="stat-title">
                              {item.title}
                          </span>
                      </div>

                      <div className="stat-value">
                          {item.value}
                      </div>

                      <div className="stat-change">
                          {item.change}
                      </div>
                  </div>
              ))}
          </div>
        <div className="analysis-chart-grid">
          <div className="analysis-card">

            <div className="chart-header">

              <div>
                <h2> Weekly Alert Trend </h2>
                <p> Alert comparison during the week</p>
              </div>

            </div>

            <div className="chart-container">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <BarChart
                  data={weeklyData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -20,
                    bottom: 0,
                  }}
                  barGap={4}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(148,163,184,.08)"
                  />


                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#64748B",
                      fontSize: 13,
                    }}
                  />


                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fill: "#64748B",
                      fontSize: 13,
                    }}
                  />


                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      fill: "rgba(255,255,255,.03)",
                    }}
                  />


                  {/* FIRE */}

                  <Bar
                    dataKey="fire"
                    name="Fire"
                    fill="#EF4444"
                    radius={[4, 4, 0, 0]}
                    barSize={12}
                  />


                  {/* WEAPON */}

                  <Bar
                    dataKey="weapon"
                    name="Weapon"
                    fill="#f59e0b"
                    radius={[4, 4, 0, 0]}
                    barSize={12}
                  />


                  {/* SNATCHING */}

                  <Bar
                    dataKey="snatching"
                    name="Snatching"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                    barSize={12}
                  />


                  {/* MISSING CHILD */}

                  <Bar
                    dataKey="missing"
                    name="Missing Child"
                    fill="#8b5cf6"
                    radius={[4, 4, 0, 0]}
                    barSize={12}
                  />

                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* CHART LEGEND */}
            <div className="chart-legend">
              <span> 
                <i className="legend-dot fire-dot"></i>
                 Fire
              </span>

              <span>
                <i className="legend-dot weapon-dot"></i>
                Weapon
              </span>


              <span>
                <i className="legend-dot snatching-dot"></i>
                Snatching
              </span>


              <span>
                <i className="legend-dot missing-dot"></i>
                Missing Child
              </span>

            </div>

          </div>


          <div className="analysis-card">

            <div className="chart-header">
              <div>
                <h2> Alert Distribution </h2>
                <p> Threat types percentage</p>
              </div>
            </div>

            <div className="distribution-content">

              {/* PIE */}
              <div className="pie-container">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <PieChart>
                    <Pie
                      data={distributionData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={88}
                      paddingAngle={0}
                    >

                      {distributionData.map(
                        (_, index) => (

                          <Cell
                            key={`cell-${index}`}
                            fill={
                              distributionColors[index]
                            }
                          />

                        )
                      )}

                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* DISTRIBUTION LIST */}
              <div className="distribution-list">
                {distributionData.map(
                  (item, index) => (

                    <div
                      className="distribution-item"
                      key={item.name}
                    >

                      <div className="distribution-info">
                        <span className="distribution-name">
                          <i
                            style={{
                              background:
                                distributionColors[index],
                            }}
                          ></i>
                          {item.name}
                        </span>

                        <strong>
                          {item.value}%
                        </strong>

                      </div>


                      {/* <div className="distribution-progress">
                        <span
                          style={{
                            width: `${item.value}%`,
                            background:
                              distributionColors[index],
                          }}
                        ></span>
                      </div> */}

                    </div>
                  )
                )}

              </div>
            </div>
          </div>
        </div>


        {/* DOWNLOAD REPORT*/}

        <button
          className="download-report-btn"
          onClick={handleDownloadReport}
        >
          <FaDownload />
          Download Detailed Report
        </button>

      </section>
    </DashboardLayout>
  );
}

export default Analysis;