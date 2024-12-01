import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz"; // Correct import
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Flightview = () => {
  const [flights, setFlights] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/flight/getAllFlights");
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };

    fetchFlights();
  }, []);

  // Dynamic display of flights
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
            <MDBCard className="my-5" style={{ height: "650px", overflowY: "auto" }}>
              <div style={{ borderBottom: "1px solid #ddd", marginBottom: "-48px" }}>
              <MDBRow className="align-items-center" style={{ width: "100%" }}>
                <MDBCol md="8" style={{ paddingLeft: "45px" }}>
                  <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>Flight List</h1>
                </MDBCol>
                <MDBCol md="4" className="d-flex justify-content-end" style={{ paddingRight: "45px" }}>
                  <MDBBtn
                    className="action-button success"
                    onClick={() => navigate("/flight")}
                  >
                    <MDBIcon fas icon="plus" className="me-2" />
                    Create a Flight
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              </div>
              <MDBCardBody className="p-5" style={{ overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div style={{ height: "100%", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", paddingTop: "20px" }}>
                  <style>
                    {`
                      .flight-list::-webkit-scrollbar {
                        display: none;
                      }
                      .flight-list {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                      }
                      .flight-card {
                        background: white;
                        border-radius: 12px;
                        padding: 20px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                        transition: transform 0.2s, box-shadow 0.2s;
                        border: 1px solid #eaeaea;
                      }
                      .flight-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                      }
                      .flight-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 15px;
                      }
                      .flight-number {
                        font-size: 1.25rem;
                        font-weight: bold;
                        color: #0d6efd;
                      }
                      .flight-id {
                        font-size: 0.85rem;
                        color: #666;
                        margin-top: 2px;
                      }
                      .flight-status {
                        padding: 6px 12px;
                        border-radius: 20px;
                        font-size: 0.875rem;
                        font-weight: 500;
                      }
                      .flight-status.on-time {
                        background-color: #e8f5e9;
                        color: #2e7d32;
                      }
                      .flight-status.delayed {
                        background-color: #fff3e0;
                        color: #e65100;
                      }
                      .flight-status.cancelled {
                        background-color: #ffebee;
                        color: #c62828;
                      }
                      .flight-details {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 15px;
                      }
                      .detail-group {
                        display: flex;
                        flex-direction: column;
                      }
                      .detail-label {
                        font-size: 0.875rem;
                        color: #666;
                        margin-bottom: 4px;
                      }
                      .detail-value {
                        font-size: 1rem;
                        color: #333;
                        font-weight: 500;
                      }
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
                        min-width: 120px;
                        border: none;
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
                      .action-button.secondary {
                        background-color: #6c757d;
                        color: white;
                      }
                      .action-button.secondary:hover {
                        background-color: #5c636a;
                      }
                      .action-button.danger {
                        background-color: #dc3545;
                        color: white;
                      }
                      .action-button.danger:hover {
                        background-color: #bb2d3b;
                      }
                      .action-button.success {
                        background-color: #28a745;
                        color: white;
                        margin-right: -20px;
                      }
                      .action-button.success:hover {
                        background-color: #218838;
                      }
                      .button-container {
                        display: flex;
                        gap: 12px;
                        justify-content: center;
                        padding: 20px;
                        border-top: 1px solid #eaeaea;
                        border-radius: 0 0 12px 12px;
                      }
                    `}
                  </style>
                  <ul className="flight-list" style={{ listStyleType: "none", padding: 0 }}>
                    {flights.map((flight) => {
                      const departureTime = toZonedTime(new Date(flight.departure_time), 'UTC');
                      const arrivalTime = toZonedTime(new Date(flight.arrival_time), 'UTC');
                      const getStatusClass = (status) => {
                        switch(status.toLowerCase()) {
                          case 'on time': return 'on-time';
                          case 'delayed': return 'delayed';
                          case 'cancelled': return 'cancelled';
                          default: return 'on-time';
                        }
                      };

                      const formatStatus = (status) => {
                        return status.replace(/_/g, ' ');
                      };
                      
                      return (
                        <li key={flight.flight_id} className="flight-card">
                          <div className="flight-header">
                            <div>
                              <span className="flight-number">
                                <MDBIcon far icon="paper-plane" className="me-2" />
                                Flight {flight.flight_number}
                              </span>
                              <div className="flight-id">
                                <MDBIcon fas icon="hashtag" className="me-1" style={{ fontSize: '0.75rem' }} />
                                ID: {flight.flight_id}
                              </div>
                            </div>
                            <span className={`flight-status ${getStatusClass(flight.flight_status)}`}>
                              {formatStatus(flight.flight_status)}
                            </span>
                          </div>
                          <div className="flight-details">
                            <div className="detail-group">
                              <span className="detail-label">
                                <MDBIcon far icon="clock" className="me-2" />
                                Departure
                              </span>
                              <span className="detail-value">
                                {format(departureTime, 'dd MMM yyyy')}
                              </span>
                              <span className="detail-value" style={{ color: '#0d6efd' }}>
                                {format(departureTime, 'hh:mm a')}
                              </span>
                            </div>
                            <div className="detail-group">
                              <span className="detail-label">
                                <MDBIcon far icon="clock" className="me-2" />
                                Arrival
                              </span>
                              <span className="detail-value">
                                {format(arrivalTime, 'dd MMM yyyy')}
                              </span>
                              <span className="detail-value" style={{ color: '#0d6efd' }}>
                                {format(arrivalTime, 'hh:mm a')}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </MDBCardBody>
              <div className="button-container">
                <MDBBtn
                  className="action-button primary"
                  onClick={() => navigate("/Flightupdate")}
                >
                  <MDBIcon fas icon="edit" className="me-2" />
                  Update Flight
                </MDBBtn>

                <MDBBtn
                  className="action-button danger"
                  onClick={() => navigate("/Flightdelete")}
                >
                  <MDBIcon fas icon="trash-alt" className="me-2" />
                  Delete Flight
                </MDBBtn>
              </div>
              <div className="text-center p-3">
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

export default Flightview;