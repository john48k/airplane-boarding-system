import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

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
      const response = await fetch("http://localhost:8080/api/flight", {
        // Updated URL
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

          <div>
            <a href="https://www.facebook.com/" className="me-3 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/" className="me-3 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="https://www.google.com/" className="me-3 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="https://www.instagram.com/" className="me-3 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="https://www.linkedin.com/" className="me-3 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="https://www.github.com/" className="me-3 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
      </MDBFooter>
      <Navbar activeTab="Flight" />
      <div className="flight-banner-page-heading">
        <div className="banner-heading-text">FLIGHTS</div>
      </div>
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
