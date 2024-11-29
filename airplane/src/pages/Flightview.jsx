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
                    type="button"
                    color="secondary"
                    onClick={() => navigate("/flight")}
                    style={{
                      textTransform: "none",
                      backgroundColor: "#0d6efd",
                      width: "100px",
                      marginRight: "-30px",
                      padding: "6px 16px",
                    }}
                  >
                    ← Back
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
                    `}
                  </style>
                  <ul className="flight-list" style={{ listStyleType: "none", padding: 0 }}>
                    {flights.map((flight) => {
                      const departureTime = toZonedTime(new Date(flight.departure_time), 'UTC');
                      const arrivalTime = toZonedTime(new Date(flight.arrival_time), 'UTC');
                      return (
                        <li key={flight.flight_id} style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
                          <h2>Flight Number: {flight.flight_number}</h2>
                          <p>Flight ID: {flight.flight_id}</p>
                          <p>Departure: {format(departureTime, 'dd/MM/yyyy hh:mm a')}</p>
                          <p>Arrival: {format(arrivalTime, 'dd/MM/yyyy hh:mm a')}</p>
                          <p>Status: {flight.flight_status}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </MDBCardBody>
              <div className="delete-update-button-container text-center p-3" style={{ borderTop: "1px solid #ddd", marginBottom: "-25px", marginTop:"-48px" }}>
                <MDBBtn
                  type="button"
                  size="md"
                  onClick={() => navigate("/Flightupdate")}
                  style={{
                    backgroundColor: "#0d6efd",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "6px 16px",
                    cursor: "pointer",
                    fontSize: "16px",
                    margin: "5px"
                  }}
                >
                  Update Flight
                </MDBBtn>

                <MDBBtn
                  type="button"
                  size="md"
                  color="danger"
                  onClick={() => navigate("/Flightdelete")}
                  style={{
                    backgroundColor: "danger",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "6px 16px",
                    cursor: "pointer",
                    fontSize: "16px",
                    margin: "5px"
                  }}
                >
                  Delete a Flight
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
            © 2024 FLIGHT MATCH. All Rights Reserved
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Flightview;