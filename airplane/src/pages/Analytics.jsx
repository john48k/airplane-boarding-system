import { Navbar } from "../components/Navbar";
import React, { useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

export const Analytics = () => {
  const [checkInTime, setCheckInTime] = useState(""); // State for check-in time
  const [boardingTime, setBoardingTime] = useState(""); // State for boarding time
  const [message, setMessage] = useState(""); // State for success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!checkInTime || !boardingTime) {
      setMessage(
        "Please enter valid Date and Time for both Check-In and Boarding."
      );
      return;
    }

    // Prepare passenger data with LocalDateTime format
    const passengerData = {
      checkinTime: `${checkInTime}:00`, // Add seconds to match LocalDateTime format
      boardingTime: `${boardingTime}:00`, // Add seconds to match LocalDateTime format
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/passengeranalytics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passengerData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Passenger data saved:", data);
      setMessage("Passenger data saved successfully!"); // Success message

      // Redirect to PassengerLogs page
      window.location.href = "/PassengerLogs"; // Update this path to match your actual route
    } catch (error) {
      console.error("Error saving passenger data:", error);
      setMessage(`Error saving passenger data: ${error.message}`); // Error message
    }
  };

  return (
    <div className="anal-body">
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
      <Navbar activeTab="Analytics" />
      <div className="anal-banner-page-heading">
        <div className="banner-heading-text">ANALYTICS (ORIGINAL)</div>
      </div>
      {message && <p>{message}</p>}

      <MDBContainer fluid className="flex-one">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">ANALYTICS DETAILS</h2>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Check-In Date and Time:"
                    id="check-in-time"
                    type="datetime-local"
                    size="lg"
                    required
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Boarding Date and Time:"
                    id="boarding-time"
                    type="datetime-local"
                    size="lg"
                    required
                    value={boardingTime}
                    onChange={(e) => setBoardingTime(e.target.value)}
                  />

                  <MDBBtn size="lg" type="submit">
                    Submit
                  </MDBBtn>
                </form>

                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
  );
};
