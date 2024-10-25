import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Gate = () => {
  const [gateNumber, setGateNumber] = useState("");
  const [terminal, setTerminal] = useState("");
  const [gateStatus, setGateStatus] = useState("open"); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const newGate = {
      gateNumber,   
      terminal,     
      gateStatus,   
    };

    try {
      const response = await fetch("http://localhost:8080/api/gates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGate),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Gate created successfully!");
        console.log("New Gate:", result);
        setGateNumber("");
        setTerminal("");
        setGateStatus("open");
      } else {
        alert("Failed to create gate.");
      }
    } catch (error) {
      console.error("Error creating gate:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navbar activeTab="Gate" />

      <div className="container">
        <h1>Gate Management Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="gateNumber">Gate Number:</label>
          <input
            type="text"
            id="gateNumber"
            value={gateNumber}
            onChange={(e) => setGateNumber(e.target.value)}
            required
          />

          <label htmlFor="terminal">Terminal:</label>
          <input
            type="text"
            id="terminal"
            value={terminal}
            onChange={(e) => setTerminal(e.target.value)}
            required
          />

          <label htmlFor="gateStatus">Gate Status:</label>
          <select
            id="gateStatus"
            value={gateStatus}
            onChange={(e) => setGateStatus(e.target.value)}
            required
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="under_maintenance">Under Maintenance</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
