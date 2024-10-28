import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Flightdelete = () => {
  const [flightId, setFlightId] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFlightId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/flight/deleteFlight/${flightId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Flight deleted successfully!");
        navigate("/flight");
      } else {
        alert("Failed to delete flight.");
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
        <h1>Delete Flight</h1>
        <form id="flightForm" onSubmit={handleSubmit}>
          <label htmlFor="delete-flight-id">Flight ID:</label>
          <input
            type="number"
            id="delete-flight-id"
            name="id"
            placeholder="Flight ID"
            value={flightId}
            onChange={handleChange}
            required
          />

          <div className="action-buttons">
            <button
              type="button"
              className="return-button"
              onClick={() => navigate("/flight")}
            >
              Return
            </button>
            <button
              id="delete-flight-btn"
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
