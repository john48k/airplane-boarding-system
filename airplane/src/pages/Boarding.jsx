import { useState } from "react";
import { Navbar } from "../components/Navbar";
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

export const Boarding = () => {
  const [seatNumber, setSeatNumber] = useState("");
  const [boardingTime, setBoardingTime] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh

    try {
      const response = await fetch("http://localhost:8080/api/boarding-pass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seatNumber, boardingTime }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert(`Boarding pass created: ${JSON.stringify(data)}`);
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to create boarding pass.");
      }
    } catch (error) {
      console.error("Error:", error);
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
        <Navbar activeTab="Boarding" />
        <div className="banner-page-heading">
          <div className="banner-heading-text">BOARDING</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="seatNumber">Seat Number:</label>
            <input
              type="text"
              id="seatNumber"
              value={seatNumber}
              onChange={(event) => setSeatNumber(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="boardingTime">Boarding Time:</label>
            <input
              type="text"
              id="boardingTime"
              value={boardingTime}
              onChange={(event) => setBoardingTime(event.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
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
