// import React, { useEffect, useState } from "react";
// import { Navbar } from "../components/Navbar";
// import "../css/Passengerlogs.css";
// import { Bar } from "react-chartjs-2";

// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const PassengerLogs = () => {
//   const [logs, setLogs] = useState([]);
//   const [checkinsByHour, setCheckinsByHour] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch logs from the backend
//   useEffect(() => {
//     const fetchLogs = async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const response = await fetch(
//           "http://localhost:8080/api/passengeranalytics"
//         );
//         if (!response.ok) throw new Error("Failed to fetch data.");
//         const data = await response.json();
//         setLogs(data);
//       } catch (err) {
//         setError("Unable to load passenger logs. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLogs();
//   }, []);

//   // Process logs for check-ins by hour
//   useEffect(() => {
//     if (logs.length > 0) {
//       const checkinHours = Array(24).fill(0);
//       logs.forEach((log) => {
//         const checkinHour = new Date(log.checkinTime).getHours();
//         checkinHours[checkinHour] += 1;
//       });
//       setCheckinsByHour(checkinHours);
//     }
//   }, [logs]);

//   // Split check-in data for heatmaps
//   const morningData = checkinsByHour.slice(0, 8);
//   const afternoonData = checkinsByHour.slice(8, 16);
//   const eveningData = checkinsByHour.slice(16, 24);

//   // Heatmap rendering helper function
//   const renderHeatmap = (labels, data, title) => (
//     <div style={{ marginBottom: "20px" }}>
//       <h5>{title}</h5>
//       <div style={{ display: "flex", gap: "5px" }}>
//         {labels.map((label, index) => (
//           <div
//             key={label}
//             style={{
//               width: "40px",
//               height: "40px",
//               backgroundColor: `rgba(255, 0, 0, ${
//                 data[index] / Math.max(...(data || [1]))
//               })`,
//               color: "#fff",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "1px solid #ccc",
//             }}
//           >
//             {data[index]}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   // Bar chart configuration
//   const chartData = {
//     labels: Array.from({ length: 24 }, (_, index) => `${index}:00`),
//     datasets: [
//       {
//         label: "Check-ins by Hour",
//         data: checkinsByHour,
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Hour of Day",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Number of Check-ins",
//         },
//       },
//     },
//   };

//   return (
//     <div className="container-fluid">
//       <MDBFooter
//         bgColor="light"
//         className="text-center text-lg-start text-muted"
//       >
//         <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
//           <div
//             className="me-5 d-none d-lg-block"
//             style={{ fontSize: "0.875rem" }}
//           >
//             <p className="mb-0">
//               <MDBIcon icon="envelope" className="me-2" />
//               CitUniversity@gmail.com |
//               <MDBIcon icon="map-marker-alt" className="me-2 ms-2" />
//               7VVJ+QFR, Natalio B. Bacalso Ave, Cebu City, 6000 Cebu
//             </p>
//           </div>

//           <div>
//             <a href="https://www.facebook.com/" className="me-3 text-reset">
//               <MDBIcon fab icon="facebook-f" />
//             </a>
//             <a href="https://twitter.com/" className="me-3 text-reset">
//               <MDBIcon fab icon="twitter" />
//             </a>
//             <a href="https://www.google.com/" className="me-3 text-reset">
//               <MDBIcon fab icon="google" />
//             </a>
//             <a href="https://www.instagram.com/" className="me-3 text-reset">
//               <MDBIcon fab icon="instagram" />
//             </a>
//             <a href="https://www.linkedin.com/" className="me-3 text-reset">
//               <MDBIcon fab icon="linkedin" />
//             </a>
//             <a href="https://www.github.com/" className="me-3 text-reset">
//               <MDBIcon fab icon="github" />
//             </a>
//           </div>
//         </section>
//       </MDBFooter>
//       <Navbar />
//       <div className="passenger-banner-page-heading">
//         <div className="banner-heading-text">PASSENGER LOGS</div>
//       </div>
//       <div className="container mt-5">
//         <h2>Passenger Logs</h2>
//         {loading && <p>Loading data...</p>}
//         {error && <p>{error}</p>}

//         {/* Logs Table */}
//         <div
//           style={{
//             height: "300px",
//             overflowY: "auto",
//             border: "1px solid #ccc",
//             borderRadius: "5px",
//             maxWidth: "800px",
//             margin: "0 auto",
//           }}
//         >
//           <table
//             className="table table-bordered"
//             style={{ margin: "0", width: "100%" }}
//           >
//             <thead>
//               <tr>
//                 <th scope="col">Analytics ID</th>
//                 <th scope="col">Check-in Time</th>
//                 <th scope="col">Boarding Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {logs.length > 0 ? (
//                 logs.map((log, index) => (
//                   <tr key={index}>
//                     <td>{log.analyticsId || "N/A"}</td>
//                     <td>
//                       {log.checkinTime ? log.checkinTime : "No Check-in Time"}
//                     </td>
//                     <td>
//                       {log.boardingTime ? log.boardingTime : "No Boarding Time"}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="3">No logs available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Heatmap Section */}
//         <div className="heatmap-container mt-5">
//           <h4>Check-ins Intensity by Time Ranges</h4>
//           {renderHeatmap(
//             Array.from({ length: 8 }, (_, i) => `${i}:00`),
//             morningData,
//             "Morning (0:00 - 7:59)"
//           )}
//           {renderHeatmap(
//             Array.from({ length: 8 }, (_, i) => `${i + 8}:00`),
//             afternoonData,
//             "Afternoon (8:00 - 15:59)"
//           )}
//           {renderHeatmap(
//             Array.from({ length: 8 }, (_, i) => `${i + 16}:00`),
//             eveningData,
//             "Evening (16:00 - 23:59)"
//           )}
//         </div>

//         {/* Bar Chart Section */}
//         <div
//           className="mt-5"
//           style={{
//             border: "2px solid #007bff",
//             padding: "20px",
//             borderRadius: "10px",
//             marginTop: "30px",
//             marginBottom: "30px",
//           }}
//         >
//           <h4>Check-ins by Hour</h4>
//           <Bar data={chartData} options={chartOptions} />
//         </div>
//       </div>
//       <MDBFooter
//         className="text-center text-white"
//         style={{ backgroundColor: "#555C67" }}
//       >
//         <div
//           className="text-center p-3"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//         >
//           © 2024 FLIGHT MATCH. All Rights Reserved
//         </div>
//       </MDBFooter>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import "../css/Passengerlogs.css";
import { Bar } from "react-chartjs-2";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";
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
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [monthlyPassengerCount, setMonthlyPassengerCount] = useState(0);

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

  // Process logs for check-ins by hour and month
  useEffect(() => {
    if (logs.length > 0) {
      const checkinHours = Array(24).fill(0);
      let monthlyCount = 0;

      logs.forEach((log) => {
        const checkinTime = new Date(log.checkinTime);

        // Check if "All" is selected or the month matches
        if (selectedMonth === -1 || checkinTime.getMonth() === selectedMonth) {
          monthlyCount++;
          checkinHours[checkinTime.getHours()] += 1;
        }
      });

      setCheckinsByHour(checkinHours);
      setMonthlyPassengerCount(monthlyCount);
    }
  }, [logs, selectedMonth]);

  // Handle month change
  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value));
  };

  // Split check-in data for heatmaps
  const morningData = checkinsByHour.slice(0, 8);
  const afternoonData = checkinsByHour.slice(8, 16);
  const eveningData = checkinsByHour.slice(16, 24);

  // Heatmap rendering helper function
  const renderHeatmap = (labels, data, title) => (
    <div style={{ marginBottom: "20px", width: "100%", maxWidth: "600px" }}>
      {" "}
      {/* Set fixed width */}
      <h5 style={{ textAlign: "center" }}>{title}</h5>
      <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        {" "}
        {/* Center alignment */}
        {labels.map((label, index) => {
          const intensity = Math.max(data[index] / Math.max(...data, 1), 0.1); // Normalize
          return (
            <div
              key={label}
              style={{
                width: "50px", // Fixed width for uniform alignment
                height: "50px",
                backgroundColor: `rgba(255, 0, 0, ${intensity})`,
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #ccc",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            >
              <div style={{ fontSize: "0.7rem" }}>{label}</div> {/* Hour */}
              <div>{data[index]}</div> {/* Data value */}
            </div>
          );
        })}
      </div>
    </div>
  );
  const renderQuarterlyHeatmap = (data) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return (
      <div style={{}}>
        <h4
          style={{
            textAlign: "center",
            marginTop: "12px",
            paddingBottom: "28px",
            display: "block",
          }}
        >
          Monthly Check-ins Heatmap
        </h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "20px",

            paddingTop: "-20px",
          }}
        >
          {months.slice(0, 12).map((month, index) => {
            const intensity = Math.max(data[index] / Math.max(...data, 1), 0.1); // Normalize
            return (
              <div
                key={month}
                style={{
                  width: "20%",
                  height: "70px", // Adjusted height to fit the text and make it look more balanced
                  backgroundColor: `rgba(255, 0, 0, ${intensity})`,
                  color: "#000000",
                  display: "flex",
                  flexDirection: "column", // Stack the text vertically
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #ccc",
                  textAlign: "center",
                  fontSize: "0.75rem", // Adjust font size for better readability
                  fontWeight: "bold",
                }}
              >
                <div>{month}</div> {/* Display month name */}
                <div>{data[index]}</div> {/* Display the check-in count */}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Calculate monthly check-ins
  const monthlyCheckins = Array(12).fill(0);

  logs.forEach((log) => {
    const checkinMonth = new Date(log.checkinTime).getMonth();
    monthlyCheckins[checkinMonth]++;
  });
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
  const chartDataMonthly = {
    labels: Array.from({ length: 12 }, (_, i) =>
      new Date(0, i).toLocaleString("default", { month: "long" })
    ),
    datasets: [
      {
        label: "Check-ins by Month",
        data: Array(12)
          .fill(0)
          .map(
            (_, index) =>
              logs.filter(
                (log) => new Date(log.checkinTime).getMonth() === index
              ).length
          ),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptionsMonthly = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
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
        </section>
      </MDBFooter>
      <Navbar />
      <div className="passenger-banner-page-heading">
        <div className="banner-heading-text">PASSENGER LOGS</div>
      </div>
      <div className="container mt-5">
        <div
          className="card-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap", // Adjust for responsiveness
          }}
        ></div>
        <div
          className="passenger-logs-card"
          style={{
            background: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "20px",

            flex: "1",
            maxWidth: "400px",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "bold",
              color: "#FFA500", // Orange
              textAlign: "center",
            }}
          >
            Passenger <span style={{ color: "#0000FF" }}>Logs</span>
          </h2>
          <p style={{ textAlign: "center" }}>DashBoard</p>
          {loading && <p>Loading data...</p>}
          {error && <p>{error}</p>}
        </div>
        <div
          className="filter-widget-card"
          style={{
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            flex: 2,
            marginTop: "-120px", // Slight overlap with the banner
            marginBottom: "20px",
            marginLeft: "500px",
            maxWidth: "800px",
            minWidth: "300px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "#007bff",
              marginBottom: "20px",
            }}
          >
            Passenger Analytics
          </h3>
          <div
            className="filter-widget"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <label
              htmlFor="month-select"
              style={{ fontWeight: "bold", fontSize: "1.1rem" }}
            >
              Select Month:
            </label>
            <select
              id="month-select"
              value={selectedMonth}
              onChange={handleMonthChange}
              style={{
                padding: "8px",
                fontSize: "1rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                flex: "1",
                maxWidth: "200px",
              }}
            >
              <option value={-1}>All</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option value={i} key={i}>
                  {new Date(0, i).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
            <div
              className="passenger-count"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#007bff",
                textAlign: "center",
                flex: "1",
              }}
            >
              Total: {monthlyPassengerCount}
            </div>
          </div>
        </div>
        <div
          style={{
            height: "300px",
            overflowY: "auto",
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
                <th>Analytics ID</th>
                <th>Check-in Time</th>
                <th>Boarding Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.length > 0 ? (
                logs.map((log, index) => (
                  <tr key={index}>
                    <td>{log.analyticsId || "N/A"}</td>
                    <td>{log.checkinTime || "No Check-in Time"}</td>
                    <td>{log.boardingTime || "No Boarding Time"}</td>
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
        <div
          className="heatmap-section mt-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="time-range-heatmap"
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              border: "2px solid #ccc",
              height: "400px",
              marginTop: "49px",
            }}
          >
            ,
            <h4 style={{ textAlign: "center", paddingTop: "-10px" }}>
              Check-ins Intensity by Time Ranges
            </h4>
            {renderHeatmap(
              Array.from({ length: 8 }, (_, i) => `${i}:00`),
              morningData,
              "(0:00 - 7:59)"
            )}
            {renderHeatmap(
              Array.from({ length: 8 }, (_, i) => `${i + 8}:00`),
              afternoonData,
              "(8:00 - 15:59)"
            )}
            {renderHeatmap(
              Array.from({ length: 8 }, (_, i) => `${i + 16}:00`),
              eveningData,
              " (16:00 - 23:59)"
            )}
          </div>
          <div
            className="quarterly-heatmap-container mt-5"
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              flex: 1,
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "30px",
              height: "400px",
              border: "2px solid #ccc",
            }}
          >
            {renderQuarterlyHeatmap(monthlyCheckins)}
          </div>
        </div>
        {/* Bar Chart Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {/* First Chart */}
          <div
            style={{
              flex: "1 1 50%", // Flex-grow: 1, Flex-shrink: 1, and Flex-basis: 45% of container
              maxWidth: "49%", // Ensure both charts take up 45% of the container width
              minWidth: "300px", // Minimum width for responsive behavior
              border: "2px solid #007bff",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ textAlign: "center", marginBottom: "10px" }}>
              Check-ins by Hour
            </h4>
            <Bar
              data={chartData}
              options={{
                ...chartOptions,
                maintainAspectRatio: true, // Disable aspect ratio
              }}
              height={315}
              width={650} // Adjust chart height specifically
            />
          </div>

          <div
            style={{
              flex: "1 1 50%",
              maxWidth: "49%",
              minWidth: "300px",

              border: "2px solid #007bff",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ textAlign: "center", marginBottom: "10px" }}>
              Check-ins by Month
            </h4>
            <Bar
              data={chartDataMonthly}
              options={{
                ...chartOptionsMonthly,
                maintainAspectRatio: true,
              }}
              width={650}
              height={315} // Adjust chart height specifically
            />
          </div>
        </div>
      </div>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#555C67", marginTop: "20px" }}
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
