import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Flightupdate = () => {
  const [formData, setFormData] = useState({
    id: "",
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
    console.log("Form data updated:", { ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFlightData = {
        ...formData,
        flight_status: formData.flight_status ? formData.flight_status : "BOARDING",
      };

      console.log("Submitting flight update:", updatedFlightData);

      const response = await fetch(
        `http://localhost:8080/api/flight/updateFlight/${formData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedFlightData),
        }
      );

      console.log("Response status:", response.status);

      if (response.ok) {
        alert("Flight updated successfully!");
        navigate("/flight");
      } else {
        const errorText = await response.text();
        alert(`Failed to update flight: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating the flight.");
    }
  };

  return (
    <div>
      <Navbar activeTab="Flight" />
      <div className="container">
        <h1>Update Flight</h1>
        <form id="flightForm" onSubmit={handleSubmit}>
          <label htmlFor="update-flight-id">Flight ID:</label>
          <input
            type="number"
            id="update-flight-id"
            name="id"
            placeholder="Flight ID"
            value={formData.id}
            onChange={handleChange}
            required
          />

          <label htmlFor="update-flight-number">Flight Number:</label>
          <input
            type="number"
            id="update-flight-number"
            name="flight_number"
            placeholder="Flight Number"
            value={formData.flight_number}
            onChange={handleChange}
            required
          />

          <label htmlFor="update-departure-time">Departure Time:</label>
          <input
            type="datetime-local"
            id="update-departure-time"
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
          />

          <label htmlFor="update-arrival-time">Arrival Time:</label>
          <input
            type="datetime-local"
            id="update-arrival-time"
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
          />

          <label htmlFor="update-flight-status">New Flight Status:</label>
          <select
            id="update-flight-status"
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

          <div className="action-buttons">
            <button
              type="button"
              className="return-button"
              onClick={() => navigate("/flight")}
            >
              Return
            </button>
            <button
              id="update-flight-btn"
              type="submit"
              className="confirm-button"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
