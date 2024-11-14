import { Navbar } from "../components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

export const Home = () => {
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

      <Navbar activeTab="Home" />

      <Carousel>
        <Carousel.Item className="carousel-item carousel-image-size">
          <img
            src="/images/banner-01.jpg"
            className="carousel-banner-size"
            alt="slide 1"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>SM SEASIDE, CEBU</h3>
            <p>
              Modern shopping and lifestyle destination located along Cebu's
              South Road Properties
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/banner-02.jpg"
            className="carousel-banner-size"
            alt=""
          />
          <Carousel.Caption className="carousel-caption">
            <h3>TOKYO, JAPAN</h3>
            <p>Explore The Fascinating Wonders of Japans Natural Beauty</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/banner-03.jpg"
            className="carousel-banner-size"
            alt=""
          />
          <Carousel.Caption className="carousel-caption">
            <h3>TAOIST, CEBU</h3>
            <p>
              The Taoist Temple in Cebu is a peaceful and picturesque place of
              worship, offering stunning views of the city and a glimpse into
              Taoist traditions and architecture.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/images/banner-04.jpg"
            className="carousel-banner-size"
            alt=""
          />
          <Carousel.Caption className="carousel-caption">
            <h3>YORK, ENGLAND</h3>
            <p>
              York, England is a historic city known for its medieval
              architecture, including the iconic York Minster.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Best Seats
          </AccordionSummary>
          <AccordionDetails>
            Get <strong>the best seats</strong> and elevate your travel
            experience! Enjoy extra legroom, stunning window views, and premium
            comfort throughout your journey. Reserve now and make your next
            flight unforgettable!"
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            How Does This Work?
          </AccordionSummary>
          <AccordionDetails>
            It's simple and easy, All you have to do is book a flight and we'll
            give you the best option for you!
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Why <strong>‎ FLIGHTMATCH ?</strong>
          </AccordionSummary>
          <AccordionDetails>
            It's <strong>simple and easy</strong>, All you have to do is book a
            flight and we'll give you the best option for you!
          </AccordionDetails>
          <AccordionActions>
            <Link to="/Flight" style={{ textDecoration: "none" }}>
              <Button variant="contained">Book Now</Button>
            </Link>
            {/* <Button>Agree</Button> */}
          </AccordionActions>
        </Accordion>
      </div>

      <MDBFooter
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
      </MDBFooter>
    </>
  );
};
