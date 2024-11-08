import { Navbar } from "../components/Navbar";
import React, { useEffect, useState } from "react";

export const PassengerLogs = () => {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch logs when the component mounts
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setLoading(true); // Start loading
        setError(""); // Reset error state

        const response = await fetch("http://localhost:8080/api/passengeranalytics", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }

        // Parse response data
        const data = await response.json();
        if (Array.isArray(data)) {
          setLogs(data);
        } else {
          throw new Error("Unexpected data format.");
        }
      } catch (err) {
        setError(`Failed to fetch logs: ${err.message}`);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <Navbar activeTab="Logs" />
      <div className="logs-container">
        <h2 className="logs-title">Passenger Logs</h2>

        {loading && <p>Loading...</p>} {/* Display loading message */}
        {error && <p className="error-message">{error}</p>} {/* Display error if any */}

        {logs.length > 0 ? (
          <table className="logs-table">
            <thead>
              <tr>
                <th>Analytics ID</th>
                <th>Check-In Time</th>
                <th>Boarding Time</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.analyticsId}>
                  <td>{log.analyticsId}</td>
                  <td>{log.checkinTime}</td>
                  <td>{log.boardingTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && <p>No logs found.</p> 
        )}
      </div>
    </div>
  );
};
