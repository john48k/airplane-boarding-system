import React from "react";
import { Navbar } from "../components/Navbar";
 
export const Passengerdelete = () => {
  const handleDelete = async () => {
    const passengerId = document.getElementById("delete-passengerid").value;
 
    try {
      const response = await fetch(`http://localhost:8080/api/passenger/${passengerId}`, {
        method: "DELETE",
      });
 
      if (response.ok) {
        alert("Passenger deleted successfully!");
      } else {
        alert("Failed to delete passenger.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
 
  return (
    <>
      <Navbar activeTab="Passengerdelete" />
      <div className="container">
      
          <h1>Delete Passenger</h1>

          <div id="passenger-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="delete-passengerid">Passenger ID:</label>
              <input type="text" id="delete-passengerid" name="passengerid" required /><br /><br />
            </form>
              
            <div className="action-buttons">
              <button type="button" className="return-button" onClick={() => (window.location.href = "passenger.html")}>Return</button>
              <button id="delete-passenger-btn" type="button" className="confirm-button" onClick={handleDelete}>Confirm</button>
            </div>
        </div>
      </div>
    </>
  );
};