import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Boarding = () => {
  const [seatNumber, setSeatNumber] = useState("");
  const [boardingTime, setBoardingTime] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh

    try {
      const response = await fetch("http://localhost:8080/api/boarding-pass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seatNumber, boardingTime }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert(`Boarding pass created: ${JSON.stringify(data)}`);
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to create boarding pass.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar activeTab="Boarding" />

      <div className="form-container">
        <h1>Create Boarding Pass</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="seat-number">Seat Number:</label>
          <input
            type="text"
            id="seat-number"
            name="seat-number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            required
          />

          <label htmlFor="boarding-time">Boarding Time:</label>
          <input
            type="time"
            id="boarding-time"
            name="boarding-time"
            value={boardingTime}
            onChange={(e) => setBoardingTime(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
