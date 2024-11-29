import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import "../css/Passengerlogs.css";
import { Bar } from "react-chartjs-2";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const PassengerLogs = () => {
  const [logs, setLogs] = useState([]);
  const [checkinsByHour, setCheckinsByHour] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch logs from the backend
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
        setLogs(data);
      } catch (err) {
        setError("Unable to load passenger logs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // Process logs for check-ins by hour
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

  // Split check-in data for heatmaps
  const morningData = checkinsByHour.slice(0, 8);
  const afternoonData = checkinsByHour.slice(8, 16);
  const eveningData = checkinsByHour.slice(16, 24);

  // Heatmap rendering helper function
  const renderHeatmap = (labels, data, title) => (
    <div style={{ marginBottom: "20px" }}>
      <h5>{title}</h5>
      <div style={{ display: "flex", gap: "5px" }}>
        {labels.map((label, index) => (
          <div
            key={label}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: `rgba(255, 0, 0, ${
                data[index] / Math.max(...(data || [1]))
              })`,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #ccc",
            }}
          >
            {data[index]}
          </div>
        ))}
      </div>
    </div>
  );

  // Bar chart configuration
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

  return (
    <div className="container-fluid">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
          <div
            className="me-5 d-none d-lg-block"
            style={{ fontSize: "0.875rem" }}
          >
            <p className="mb-0">
              <MDBIcon icon="envelope" className="me-2" />
              CitUniversity@gmail.com |
              <MDBIcon icon="map-marker-alt" className="me-2 ms-2" />
              7VVJ+QFR, Natalio B. Bacalso Ave, Cebu City, 6000 Cebu
            </p>
          </div>

          <div>
            <a href="https://www.facebook.com/" className="me-3 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/" className="me-3 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="https://www.google.com/" className="me-3 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="https://www.instagram.com/" className="me-3 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="https://www.linkedin.com/" className="me-3 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="https://www.github.com/" className="me-3 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
      </MDBFooter>
      <Navbar />
      <div className="passenger-banner-page-heading">
        <div className="banner-heading-text">PASSENGER LOGS</div>
      </div>
      <div className="container mt-5">
        <h2>Passenger Logs</h2>
        {loading && <p>Loading data...</p>}
        {error && <p>{error}</p>}

        {/* Logs Table */}
        <div
          style={{
            height: "300px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <table
            className="table table-bordered"
            style={{ margin: "0", width: "100%" }}
          >
            <thead>
              <tr>
                <th scope="col">Analytics ID</th>
                <th scope="col">Check-in Time</th>
                <th scope="col">Boarding Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.length > 0 ? (
                logs.map((log, index) => (
                  <tr key={index}>
                    <td>{log.analyticsId || "N/A"}</td>
                    <td>
                      {log.checkinTime ? log.checkinTime : "No Check-in Time"}
                    </td>
                    <td>
                      {log.boardingTime ? log.boardingTime : "No Boarding Time"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No logs available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Heatmap Section */}
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

        {/* Bar Chart Section */}
        <div
          className="mt-5"
          style={{
            border: "2px solid #007bff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <h4>Check-ins by Hour</h4>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#555C67" }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 FLIGHT MATCH. All Rights Reserved
        </div>
      </MDBFooter>
    </div>
  );
};
