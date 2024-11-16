import React from "react";
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
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export const PassengerLogin = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      passengerid: event.target.passengerid.value,
      passportnumber: event.target.passportnumber.value,
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      phonenumber: event.target.phonenumber.value,
    };

    try {
      const response = await fetch("http://localhost:8080/api/passenger", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Passenger created successfully!");
      } else {
        alert("Failed to create passenger.");
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
      <Navbar activeTab="Passenger" />
      <div className="passenger-banner-page-heading">
        <div className="banner-heading-text">PASSENGER</div>
      </div>

      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Fly Easy, <br />
              <span className="text-primary">Travel Happy!</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Flying high above the clouds, each moment aboard the airplane
              offers a sense of freedom and adventure. The smooth, relaxing
              journey allows you to sit back, unwind, and enjoy the comfort of
              modern air travel. With breathtaking views and exceptional
              service, every flight transforms into a memorable experience that
              makes the journey just as enjoyable as the destination.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <form onSubmit={handleSubmit}>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First name"
                        id="firstname"
                        type="text"
                        name="firstname"
                        required
                      />
                    </MDBCol>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last name"
                        id="lastname"
                        type="text"
                        name="lastname"
                        required
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Passenger ID"
                    id="passengerid"
                    type="text"
                    name="passengerid"
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Passport Number"
                    id="passportnumber"
                    type="text"
                    name="passportnumber"
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone Number"
                    id="phonenumber"
                    type="tel"
                    name="phonenumber"
                    required
                  />

                  <MDBBtn className="w-100 mb-4" size="md" type="submit">
                    Submit
                  </MDBBtn>

                  <MDBBtn
                    className="w-100 mb-4 update-button"
                    size="md"
                    type="button"
                    onClick={() => (window.location.href = "Passengerupdate")}
                  >
                    Update Passenger
                  </MDBBtn>

                  <MDBBtn
                    className="w-100 mb-4 delete-button"
                    size="md"
                    type="button"
                    onClick={() =>
                      (window.location.href = "passenger_delete.html")
                    }
                  >
                    Delete Passenger
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* <div className="container">
        <h1>Passenger</h1>

        <div id="passenger-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="passengerid">Passenger ID:</label>
            <input type="text" id="passengerid" name="passengerid" required />
            <br />
            <br />

            <label htmlFor="passportnumber">Passport Number:</label>
            <input
              type="text"
              id="passportnumber"
              name="passportnumber"
              required
            />
            <br />
            <br />

            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" required />
            <br />
            <br />

            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" required />
            <br />
            <br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <br />

            <label htmlFor="phonenumber">Phone Number:</label>
            <input type="tel" id="phonenumber" name="phonenumber" required />
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>

          <div className="action-buttons">
            <button
              type="button"
              className="update-button"
              onClick={() => (window.location.href = "passenger_update.html")}
            >
              Update Passenger
            </button>
            <button
              type="button"
              className="delete-button"
              onClick={() => (window.location.href = "passenger_delete.html")}
            >
              Delete Passenger
            </button>
          </div>
        </div>
      </div> */}
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
    </>
  );
};
