import React from "react";
import { Navbar } from "../components/Navbar";
 
export const Passenger = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      passengerid: event.target.passengerid.value,
      passportnumber: event.target.passportnumber.value,
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      phonenumber: event.target.phonenumber.value,
    };
 
    try {
      const response = await fetch("http://localhost:8080/api/passenger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Passenger created successfully!");
      } else {
        alert("Failed to create passenger.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
 
  return (
    <>
      <div className="container">
        <Navbar activeTab="Passenger" />
        <h1>Passenger</h1>
        
        <div id="passenger-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="passengerid">Passenger ID:</label>
            <input type="text" id="passengerid" name="passengerid" required /><br /><br />
            
            <label htmlFor="passportnumber">Passport Number:</label>
            <input type="text" id="passportnumber" name="passportnumber" required/><br /><br />
            
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" required /><br /><br />
            
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" required /><br /><br />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br /><br />
            
            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="tel" id="phonenumber" name="phonenumber" required /><br /><br />
            
            <button type="submit">Submit</button>
          </form>
          
          <div className="action-buttons">
            <button type="button" className="update-button" onClick={() => (window.location.href = "passenger_update.html")}>Update Passenger</button>
            <button type="button" className="delete-button" onClick={() => (window.location.href = "passenger_delete.html")}>Delete Passenger</button>
          </div>
        </div>
      </div>
    </>
  );
};