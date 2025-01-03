import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export const Flight = () => {
  const [formData, setFormData] = useState({
    flight_number: "",
    departure_time: "",
    arrival_time: "",
    flight_status: "",
  });

  const navigate = useNavigate();

  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({ show: true, message: 'Flight created successfully!', type: 'success' });
      } else {
        setNotification({ show: true, message: 'Failed to create flight.', type: 'error' });
      }

      // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setNotification({ show: true, message: 'An error occurred.', type: 'error' });
    }
  };

  return (
    <div>
      {notification.show && (
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          borderRadius: '4px',
          backgroundColor: notification.type === 'success' ? 'white' : 'white',
          color: '#0d6efd',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          fontWeight: "bold",
        }}
      >
        {notification.message}
      </div>
    )}
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
              Book Now, <br />
              <span className="text-primary travel-text">Travel Better!</span>
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
                  <select
                    id="flightStatus"
                    name="flight_status"
                    className="form-select"
                    value={formData.flight_status}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Choose here
                    </option>
                    <option value="0">BOARDING</option>
                    <option value="1">ON FLIGHT</option>
                    <option value="2">ARRIVED</option>
                  </select>

                  <style>
                    {`
                      .action-button {
                        padding: 8px 20px;
                        border-radius: 8px;
                        font-size: 0.9rem;
                        font-weight: 500;
                        transition: all 0.2s ease;
                        text-transform: none;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 140px;
                        border: none;
                        margin: 0 8px;
                      }
                      .action-button:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                      }
                      .action-button.primary {
                        background-color: #0d6efd;
                        color: white;
                      }
                      .action-button.primary:hover {
                        background-color: #0b5ed7;
                      }
                      .action-button.success {
                        background-color: #28a745;
                        color: white;
                      }
                      .action-button.success:hover {
                        background-color: #218838;
                      }
                      .button-container {
                        display: flex;
                        justify-content: center;
                        margin-top: 24px;
                        gap: 16px;
                      }
                    `}
                  </style>

                  <div className="button-container">
                    <MDBBtn
                      type="button"
                      className="action-button primary"
                      onClick={() => navigate("/flightview")}
                    >
                      <MDBIcon fas icon="list" className="me-2" />
                      Flight List
                    </MDBBtn>

                    <MDBBtn
                      type="submit"
                      className="action-button success"
                    >
                      <MDBIcon fas icon="plus" className="me-2" />
                      Create Flight
                    </MDBBtn>
                  </div>
                </form>

                <div style={{ marginTop: "24px" }} className="text-center">
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

      <div>
        <MDBFooter
          className="text-center text-white"
          style={{ backgroundColor: "#555C67" }}
        >
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            2024 FLIGHT MATCH. All Rights Reserved
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};
