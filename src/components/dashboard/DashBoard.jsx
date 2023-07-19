"use client";
import React, { useState } from "react";
import SideBar from "../sideBar/SideBar";
import "./dashboard.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Sector } from "recharts";

const areaData = [
  {
    name: "M",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "T",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "W",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "T",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "F",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "S",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const pieData = [
  { name: "Finished Training", value: 400 },
  { name: "Chapter A", value: 300 },
  { name: "Chapter B", value: 300 },
  { name: "Chapter C", value: 200 },
  { name: "Haven't Started Yet", value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const DashBoard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Hello, Puneet </h1>
          <p>Following is your Organization&apos;s Performance Summary</p>
        </div>
        <div className="dashboard-content">
          <div className="graphs">
            <div className="mgraphs">
              <div className="mgraph1">
                <div className="mgraph1-heading">In Training Workers</div>
                <div className="mgraph1-content">
                  <div className="mgraph1-numbers">
                    <div style={{ fontWeight: 800, fontSize: "x-large" }}>
                      3,354
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#d0f2df",
                          color: "#018E42",
                          height: "20px",
                          width: "48px",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5.00001 10.1667C4.87335 10.1667 4.74668 10.12 4.64668 10.02C4.45335 9.82667 4.45335 9.50667 4.64668 9.31334L6.78001 7.18001C6.88668 7.07334 7.02668 7.02001 7.18001 7.03334C7.32668 7.04667 7.46001 7.12667 7.54668 7.25334L8.27334 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3467 5.98001C11.54 6.17334 11.54 6.49334 11.3467 6.68667L8.54668 9.48667C8.44001 9.59334 8.30001 9.64667 8.14668 9.63334C8.00001 9.62001 7.86668 9.54001 7.78001 9.41334L7.05334 8.32001L5.35335 10.02C5.25335 10.12 5.12668 10.1667 5.00001 10.1667Z"
                            fill="#018E42"
                          />
                          <path
                            d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66666C9.39332 6.83333 9.16666 6.60666 9.16666 6.33333C9.16666 6.05999 9.39332 5.83333 9.66666 5.83333H11C11.2733 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2733 8.16666 11 8.16666Z"
                            fill="#018E42"
                          />
                          <path
                            d="M10 15.1667H6.00001C2.38001 15.1667 0.833344 13.62 0.833344 10V6.00001C0.833344 2.38001 2.38001 0.833344 6.00001 0.833344H10C13.62 0.833344 15.1667 2.38001 15.1667 6.00001V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6.00001 1.83334C2.92668 1.83334 1.83334 2.92668 1.83334 6.00001V10C1.83334 13.0733 2.92668 14.1667 6.00001 14.1667H10C13.0733 14.1667 14.1667 13.0733 14.1667 10V6.00001C14.1667 2.92668 13.0733 1.83334 10 1.83334H6.00001Z"
                            fill="#018E42"
                          />
                        </svg>
                        20%
                      </span>
                      <span>234</span>
                    </div>
                  </div>
                  <div className="mgraph1-graph" style={{ width: "56%" }}>
                    <ResponsiveContainer>
                      <AreaChart
                        width={300}
                        height={400}
                        data={areaData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke=""
                          fill="#018E42"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="mgraph2">
                <div className="mgraph2-heading">In Training Workers</div>
                <div className="mgraph2-content">
                  <div className="mgraph2-numbers">
                    <div style={{ fontWeight: 800, fontSize: "x-large" }}>
                      3,354
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#f5dcdd",
                          color: "#ED1C24",
                          height: "20px",
                          width: "48px",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5 10.1667C4.87333 10.1667 4.74666 10.12 4.64666 10.02C4.45333 9.82667 4.45333 9.50667 4.64666 9.31334L6.78 7.18001C6.88666 7.07334 7.02666 7.02001 7.18 7.03334C7.32666 7.04667 7.46 7.12667 7.54666 7.25334L8.27333 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3467 5.98001C11.54 6.17334 11.54 6.49334 11.3467 6.68667L8.54666 9.48667C8.44 9.59334 8.3 9.64667 8.14666 9.63334C8 9.62001 7.86666 9.54001 7.78 9.41334L7.05333 8.32001L5.35333 10.02C5.25333 10.12 5.12666 10.1667 5 10.1667Z"
                            fill="#ED1C24"
                          />
                          <path
                            d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66666C9.39333 6.83333 9.16666 6.60666 9.16666 6.33333C9.16666 6.05999 9.39333 5.83333 9.66666 5.83333H11C11.2733 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2733 8.16666 11 8.16666Z"
                            fill="#ED1C24"
                          />
                          <path
                            d="M10 15.1667H6C2.38 15.1667 0.833336 13.62 0.833336 10V6.00001C0.833336 2.38001 2.38 0.833344 6 0.833344H10C13.62 0.833344 15.1667 2.38001 15.1667 6.00001V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6 1.83334C2.92667 1.83334 1.83334 2.92668 1.83334 6.00001V10C1.83334 13.0733 2.92667 14.1667 6 14.1667H10C13.0733 14.1667 14.1667 13.0733 14.1667 10V6.00001C14.1667 2.92668 13.0733 1.83334 10 1.83334H6Z"
                            fill="#ED1C24"
                          />
                        </svg>
                        20%
                      </span>
                      <span>234</span>
                    </div>
                  </div>
                  <div className="mgraph2-graph" style={{ width: "56%" }}>
                    <ResponsiveContainer>
                      <AreaChart
                        width={300}
                        height={400}
                        data={areaData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke=""
                          fill="#ED1C24"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="mgraph3">
                <div className="mgraph3-heading">In Training Workers</div>
                <div className="mgraph3-content">
                  <div className="mgraph3-numbers">
                    <div style={{ fontWeight: 800, fontSize: "x-large" }}>
                      3,354
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#d0f2df",
                          color: "#018E42",
                          height: "20px",
                          width: "48px",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5.00001 10.1667C4.87335 10.1667 4.74668 10.12 4.64668 10.02C4.45335 9.82667 4.45335 9.50667 4.64668 9.31334L6.78001 7.18001C6.88668 7.07334 7.02668 7.02001 7.18001 7.03334C7.32668 7.04667 7.46001 7.12667 7.54668 7.25334L8.27334 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3467 5.98001C11.54 6.17334 11.54 6.49334 11.3467 6.68667L8.54668 9.48667C8.44001 9.59334 8.30001 9.64667 8.14668 9.63334C8.00001 9.62001 7.86668 9.54001 7.78001 9.41334L7.05334 8.32001L5.35335 10.02C5.25335 10.12 5.12668 10.1667 5.00001 10.1667Z"
                            fill="#018E42"
                          />
                          <path
                            d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66666C9.39332 6.83333 9.16666 6.60666 9.16666 6.33333C9.16666 6.05999 9.39332 5.83333 9.66666 5.83333H11C11.2733 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2733 8.16666 11 8.16666Z"
                            fill="#018E42"
                          />
                          <path
                            d="M10 15.1667H6.00001C2.38001 15.1667 0.833344 13.62 0.833344 10V6.00001C0.833344 2.38001 2.38001 0.833344 6.00001 0.833344H10C13.62 0.833344 15.1667 2.38001 15.1667 6.00001V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6.00001 1.83334C2.92668 1.83334 1.83334 2.92668 1.83334 6.00001V10C1.83334 13.0733 2.92668 14.1667 6.00001 14.1667H10C13.0733 14.1667 14.1667 13.0733 14.1667 10V6.00001C14.1667 2.92668 13.0733 1.83334 10 1.83334H6.00001Z"
                            fill="#018E42"
                          />
                        </svg>
                        20%
                      </span>
                      <span>234</span>
                    </div>
                  </div>
                  <div className="mgraph3-graph" style={{ width: "56%" }}>
                    <ResponsiveContainer>
                      <AreaChart
                        width={300}
                        height={400}
                        data={areaData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke=""
                          fill="#018E42"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="mgraph4">
                <div className="mgraph4-heading">In Training Workers</div>
                <div className="mgraph4-content">
                  <div className="mgraph4-numbers">
                    <div style={{ fontWeight: 800, fontSize: "x-large" }}>
                      3,354
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#d0f2df",
                          color: "#018E42",
                          height: "20px",
                          width: "48px",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M5.00001 10.1667C4.87335 10.1667 4.74668 10.12 4.64668 10.02C4.45335 9.82667 4.45335 9.50667 4.64668 9.31334L6.78001 7.18001C6.88668 7.07334 7.02668 7.02001 7.18001 7.03334C7.32668 7.04667 7.46001 7.12667 7.54668 7.25334L8.27334 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3467 5.98001C11.54 6.17334 11.54 6.49334 11.3467 6.68667L8.54668 9.48667C8.44001 9.59334 8.30001 9.64667 8.14668 9.63334C8.00001 9.62001 7.86668 9.54001 7.78001 9.41334L7.05334 8.32001L5.35335 10.02C5.25335 10.12 5.12668 10.1667 5.00001 10.1667Z"
                            fill="#018E42"
                          />
                          <path
                            d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66666C9.39332 6.83333 9.16666 6.60666 9.16666 6.33333C9.16666 6.05999 9.39332 5.83333 9.66666 5.83333H11C11.2733 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2733 8.16666 11 8.16666Z"
                            fill="#018E42"
                          />
                          <path
                            d="M10 15.1667H6.00001C2.38001 15.1667 0.833344 13.62 0.833344 10V6.00001C0.833344 2.38001 2.38001 0.833344 6.00001 0.833344H10C13.62 0.833344 15.1667 2.38001 15.1667 6.00001V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6.00001 1.83334C2.92668 1.83334 1.83334 2.92668 1.83334 6.00001V10C1.83334 13.0733 2.92668 14.1667 6.00001 14.1667H10C13.0733 14.1667 14.1667 13.0733 14.1667 10V6.00001C14.1667 2.92668 13.0733 1.83334 10 1.83334H6.00001Z"
                            fill="#018E42"
                          />
                        </svg>
                        20%
                      </span>
                      <span>234</span>
                    </div>
                  </div>
                  <div className="mgraph4-graph" style={{ width: "56%" }}>
                    <ResponsiveContainer>
                      <AreaChart
                        width={300}
                        height={400}
                        data={areaData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke=""
                          fill="#018E42"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar-chart">
              <div className="pieChart">
                <div className="pieheading" style={{ fontSize: "20px" }}>
                  Chapter-Wise Status
                </div>
                <div
                  className="chart"
                  style={{ height: "300px", width: "100%" }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="chapters">
                  <div className="section1">
                    <div>Finished Training</div>
                    <div>Chapter B</div>
                    <div>Haven&apos;t Started yet</div>
                  </div>
                  <div className="section2">
                    <div>Chapter A</div>
                    <div>Chapter B</div>
                  </div>
                </div>
              </div>
              <div className="barGraph">Bar graph</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
