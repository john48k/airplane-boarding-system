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
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { MDBSelect } from "mdb-react-ui-kit";

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
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Fasten Your Seatbelts <br />
              <span className="text-primary">Your Journey Begins Here!</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Boarding isn’t just a step onto the plane; it’s the first chapter
              of your journey. With every step, you’re moving closer to a world
              of possibilities, whether it’s a new destination, a family
              reunion, or an important business meeting. We strive to make
              boarding a seamless experience, designed to ease you from the
              terminal to take-off with comfort and efficiency. Each moment
              counts, and we’re here to ensure that your transition is smooth,
              your seat is ready, and your adventure awaits.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <h1>FLIGHTS DETAILS</h1>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Flight Number"
                    id="flightNumber"
                    type="number"
                    name="flight_number"
                    value={formData.flight_number}
                    onChange={handleChange}
                    required
                    // min="1"
                    // step="1"
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Departure Time"
                    id="departureTime"
                    type="datetime-local"
                    name="departure_time"
                    value={formData.departure_time}
                    onChange={handleChange}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Arrival Time"
                    id="arrivalTime"
                    type="datetime-local"
                    name="arrival_time"
                    value={formData.arrival_time}
                    onChange={handleChange}
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Flight Status"
                    id="flightStatus"
                    type="select"
                    name="flight_status"
                    value={formData.flight_status}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Choose here
                    </option>
                    <option value="0">BOARDING</option>
                    <option value="1">ON_FLIGHT</option>
                    <option value="2">ARRIVED</option>
                  </MDBInput>

                  <div className="delete-update-button-container ">
                    <MDBBtn
                      type="button"
                      className="update-button flight-update-color"
                      size="md"
                      onClick={() => navigate("/Flightupdate")}
                    >
                      Update Flight
                    </MDBBtn>

                    <MDBBtn
                      type="button"
                      className="delete-button flight-delete-color"
                      size="md"
                      onClick={() => navigate("/Flightdelete")}
                    >
                      Delete a Flight
                    </MDBBtn>
                  </div>

                  <MDBBtn
                    type="submit"
                    className="w-100 mb-4 flight-create-color"
                    size="md"
                  >
                    Create Flight
                  </MDBBtn>
                  {/* 
                  <MDBBtn type="submit" className="w-100 mb-4" size="md">
                    Submit
                  </MDBBtn> */}
                </form>

                {/* <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div> */}

                {/* <MDBBtn className="w-100 mb-4" size="md">
                    sign up
                  </MDBBtn> */}

                <div className="text-center">
                  <p>Check Out Our Other Pages:</p>

                  <MDBBtn
                    tag="a"
                    href="https://facebook.com"
                    target="_blank"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    href="https://twitter.com"
                    target="_blank"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    href="https://google.com"
                    target="_blank"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    href="https://github.com/john48k/airplane-boarding-system"
                    target="_blank"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/*       
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
      </div> */}
      <div>
        <MDBFooter
          className="text-center text-white"
          style={{ backgroundColor: "#555C67" }}
        >
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 FLIGHT MATCH. All Rights Reserved
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};
