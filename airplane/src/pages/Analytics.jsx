import { Navbar } from "../components/Navbar";
import React, { useState } from "react";

export const Analytics = () => {
  const [checkInTime, setCheckInTime] = useState("");
  const [boardingTime, setBoardingTime] = useState("");
  const [message, setMessage] = useState(""); // State for success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Append ":00" to match the expected HH:MM:SS format
    const formattedCheckInTime = checkInTime.length === 5 ? `${checkInTime}:00` : checkInTime;
    const formattedBoardingTime = boardingTime.length === 5 ? `${boardingTime}:00` : boardingTime;
  
    const passengerData = {
      checkinTime: formattedCheckInTime,
      boardingTime: formattedBoardingTime,
    };
  
    try {
      const response = await fetch("http://localhost:8080/api/passengeranalytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passengerData),
      });
  
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Passenger data saved:", data);
      setMessage("Passenger data saved successfully!"); // Success message
    } catch (error) {
      console.error("Error saving passenger data:", error);
      setMessage(`Error saving passenger data: ${error.message}`); // Error message
    }
  };
  
  return (
    <div>
      <Navbar activeTab="Analytics" />

      <div className="form-container">
        <h2 className="pass-title">Analytics</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="check-in-time">Check In Time:</label>
          <input
            type="time"
            id="check-in-time"
            name="check-in-time"
            required
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
          />

          <label htmlFor="boarding-time">Boarding Time:</label>
          <input
            type="time"
            id="boarding-time"
            name="boarding-time"
            required
            value={boardingTime}
            onChange={(e) => setBoardingTime(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>

        {message && <p>{message}</p>} {/* Display the message */}
      </div>
    </div>
  );
};
