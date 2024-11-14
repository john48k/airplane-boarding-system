import { Navbar } from "../components/Navbar";
import React, { useState } from "react";
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

export const Analytics = () => {
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
        <Navbar activeTab="Analytics" />

        <div className="anal-page-heading"></div>

        <div className="form-container">
          <h2 className="pass-title">Analytics</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="check-in-time">Check In Time:</label>
            <input
              type="time"
              id="check-in-time"
              name="check-in-time"
              required
              value={checkInTime}
              onChange={(e) => setCheckInTime(e.target.value)}
            />

            <label htmlFor="boarding-time">Boarding Time:</label>
            <input
              type="time"
              id="boarding-time"
              name="boarding-time"
              required
              value={boardingTime}
              onChange={(e) => setBoardingTime(e.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
          {message && <p>{message}</p>} {/* Display the message */}
        </div>
      </div>
      {/* <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#555C67" }}
      >
        <MDBContainer className="p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <MDBBtn type="button" outline color="light" rounded>
                Sign up!
              </MDBBtn>
            </p>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 FLIGHT MATCH. All Rights Reserved
        </div>
      </MDBFooter> */}
    </>
  );
};
