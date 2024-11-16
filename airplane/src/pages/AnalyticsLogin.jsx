import React, { useState } from "react";
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
import { NavbarLogin } from "../components/NavbarLogin";

export const AnalyticsLogin = () => {
  const [checkInTime, setCheckInTime] = useState("");
  const [boardingTime, setBoardingTime] = useState("");
  const [message, setMessage] = useState(""); // State for success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Append ":00" to match the expected HH:MM:SS format
    const formattedCheckInTime =
      checkInTime.length === 5 ? `${checkInTime}:00` : checkInTime;
    const formattedBoardingTime =
      boardingTime.length === 5 ? `${boardingTime}:00` : boardingTime;

    const passengerData = {
      checkinTime: formattedCheckInTime,
      boardingTime: formattedBoardingTime,
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

      // Set loggedIn status to true after successful login
      localStorage.setItem("loggedIn", "true");
    } catch (error) {
      console.error("Error saving passenger data:", error);
      setMessage(`Error saving passenger data: ${error.message}`); // Error message
    }
  };

  return (
    <>
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
        <NavbarLogin activeTab="Analytics" />
        <div className="anal-banner-page-heading">
          <div className="banner-heading-text">ANALYTICS</div>
        </div>
        {message && <p>{message}</p>} {/* Display the message */}
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw-bold mb-2 text-center">
                    Analytics (LOGIN)
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      label="Check In Time"
                      id="check-in-time"
                      type="time"
                      size="lg"
                      required
                      value={checkInTime}
                      onChange={(e) => setCheckInTime(e.target.value)}
                    />

                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      label="Boarding Time"
                      id="boarding-time"
                      type="time"
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
      </div>

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
    </>
  );
};
