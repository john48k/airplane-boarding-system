import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Flight = () => {
  const [formData, setFormData] = useState({
    flight_number: "",
    departure_time: "",
    arrival_time: "",
    flight_status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/flight", { // Updated URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Flight created successfully!");
      } else {
        alert("Failed to create flight.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div>
      <Navbar activeTab="Flight" />
      <div className="container">
        <h1>Flight Management</h1>
        <form id="flightForm" onSubmit={handleSubmit}>
          <label htmlFor="flightNumber">Flight Number:</label>
          <input
            type="text"
            id="flightNumber"
            name="flight_number"
            value={formData.flight_number}
            onChange={handleChange}
            required
          />

          <label htmlFor="departureTime">Departure Time:</label>
          <input
            type="datetime-local"
            id="departureTime"
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
            required
          />

          <label htmlFor="arrivalTime">Arrival Time:</label>
          <input
            type="datetime-local"
            id="arrivalTime"
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
            required
          />

          <label htmlFor="flightStatus">Flight Status:</label>
          <select
            id="flightStatus"
            name="flight_status"
            value={formData.flight_status}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose here
            </option>
            <option value="0">Boarding</option>
            <option value="1">On Flight</option>
            <option value="2">Arrived</option>
          </select>

          <button type="submit">Create Flight</button>
        </form>

        <div className="action-buttons">
          <button
            id="update-btn"
            className="update-button"
            onClick={() => navigate("/Flightupdate")}
          >
            Update a Flight
          </button>
          <button
            id="delete-btn"
            className="delete-button"
            onClick={() => navigate("/Flightdelete")}
          >
            Delete a Flight
          </button>
        </div>
      </div>
    </div>
  );
};
