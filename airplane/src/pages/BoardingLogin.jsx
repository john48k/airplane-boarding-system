import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Button from "@mui/material/Button";

// import Carousel from "react-bootstrap/Carousel";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";

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
  MDBCheckbox,
} from "mdb-react-ui-kit";

export const BoardingLogin = () => {
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
            <a href="https://www.facebook.com/" className="me-3 text-reset  ">
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
      <div className="boarding-banner-page-heading">
        <div className="banner-heading-text">BOARDING</div>
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
                <h1>BOARDING PASS</h1>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Seat Number"
                    id="seatNumber"
                    type="text"
                    value={seatNumber}
                    required
                    onChange={(event) => setSeatNumber(event.target.value)}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Boarding Time"
                    id="boardingTime"
                    type="datetime-local"
                    value={boardingTime}
                    onChange={(event) => setBoardingTime(event.target.value)}
                  />

                  <MDBBtn type="submit" className="w-100 mb-4" size="md">
                    Submit
                  </MDBBtn>
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

      {/* <form onSubmit={handleSubmit}>
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
      </form> */}

      {/* <div className="board-pics-container">
        <MDBCarousel interval={1000} className="boarding-custom-carousel">
          <MDBCarouselItem itemId={1}>
            <img
              src="/images/board-4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2}>
            <img
              src="/images/board-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3}>
            <img
              src="/images/board-3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={4}>
            <img
              src="/images/board-6.jpg"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId={5}>
            <img
              src="/images/board-5.webp"
              className="d-block w-100"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
*/}
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
