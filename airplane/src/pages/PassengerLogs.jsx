import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import "../css/Passengerlogs.css";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const PassengerLogs = () => {
  const [logs, setLogs] = useState([]);
  const [checkinsByHour, setCheckinsByHour] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch passenger logs
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          "http://localhost:8080/api/passengeranalytics"
        );
        if (!response.ok) throw new Error("Failed to fetch data.");
        const data = await response.json();
        console.log("API Response:", data);
        setLogs(data);
      } catch (err) {
        setError("Unable to load passenger logs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // Process check-in data for bar chart and heatmap
  useEffect(() => {
    if (logs.length > 0) {
      const checkinHours = Array(24).fill(0);
      logs.forEach((log) => {
        const checkinHour = new Date(log.checkinTime).getHours();
        checkinHours[checkinHour] += 1;
      });
      setCheckinsByHour(checkinHours);
    }
  }, [logs]);

  // Split the data into three ranges
  const morningData = checkinsByHour.slice(0, 8);
  const afternoonData = checkinsByHour.slice(8, 16);
  const eveningData = checkinsByHour.slice(16, 24);

  // Bar Chart Data
  const chartData = {
    labels: Array.from({ length: 24 }, (_, index) => `${index}:00`),
    datasets: [
      {
        label: "Check-ins by Hour",
        data: checkinsByHour,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Hour of Day",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Check-ins",
        },
      },
    },
  };

  // Render Heatmap with updated alignment and square cells
  const renderHeatmap = (xLabels, data, title) => (
    <div className="heatmap-section mt-3">
      <h5>{title}</h5>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {/* Label for y-axis */}
        <div
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            marginRight: "10px",
            textAlign: "center",
          }}
        >
          Check-ins
        </div>
        {/* Heatmap Cells */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${xLabels.length}, 1fr)`, gap: "5px" }}>
          {data.map((value, index) => {
            const opacity = Math.min(value / 10, 1);
            return (
              <div
                key={index}
                style={{
                  backgroundColor: `rgba(255, 0, 0, ${opacity})`,
                  borderRadius: "5px",
                  width: "50px",
                  height: "50px",
                  border: "1px solid #ccc",
                }}
              />
            );
          })}
        </div>
      </div>
      {/* X-Axis Labels */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        {xLabels.map((label, index) => (
          <span key={index} style={{ textAlign: "center", width: "50px" }}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container mt-5">
        <h2>Passenger Logs</h2>
        {loading && <p>Loading data...</p>}
        {error && <p>{error}</p>}

        {/* Logs Table */}
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">Check-in Time</th>
              <th scope="col">Boarding Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.length > 0 ? (
              logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.checkinTime ? log.checkinTime : "No Check-in Time"}</td>
                  <td>{log.boardingTime ? log.boardingTime : "No Boarding Time"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No logs available</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Heat Map Section */}
        <div className="heatmap-container mt-5">
          <h4>Check-ins Intensity by Time Ranges</h4>
          {renderHeatmap(
            Array.from({ length: 8 }, (_, i) => `${i}:00`),
            morningData,
            "Morning (0:00 - 7:59)"
          )}
          {renderHeatmap(
            Array.from({ length: 8 }, (_, i) => `${i + 8}:00`),
            afternoonData,
            "Afternoon (8:00 - 15:59)"
          )}
          {renderHeatmap(
            Array.from({ length: 8 }, (_, i) => `${i + 16}:00`),
            eveningData,
            "Evening (16:00 - 23:59)"
          )}
        </div>

        {/* Bar Chart Section with Border */}
        <div
          className="mt-5"
          style={{
            border: "2px solid #007bff",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        >
          <h4>Check-ins by Hour</h4>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};
