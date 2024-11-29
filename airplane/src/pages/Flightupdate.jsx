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

export const Flightupdate = () => {
  const [formData, setFormData] = useState({
    id: "",
    flight_number: "",
    departure_time: "",
    arrival_time: "",
    flight_status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Form data updated:", { ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFlightData = {
        ...formData,
        flight_status: formData.flight_status ? formData.flight_status : "BOARDING",
      };

      console.log("Submitting flight update:", updatedFlightData);

      const response = await fetch(
        `http://localhost:8080/api/flight/updateFlight/${formData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedFlightData),
        }
      );

      console.log("Response status:", response.status);

      if (response.ok) {
        alert("Flight updated successfully!");
        navigate("/flight");
      } else {
        const errorText = await response.text();
        alert(`Failed to update flight: ${errorText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating the flight.");
    }
  };

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
        <div className="banner-heading-text">UPDATE FLIGHT</div>
      </div>
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Update Flight, <br />
              <span className="text-primary travel-text">Manage Better!</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Updating flight information is crucial for maintaining accurate and up-to-date records. 
              Whether it's a change in departure time, arrival time, or flight status, 
              our system allows for quick and efficient updates to ensure all passengers 
              and staff have the most current information. Your attention to detail helps 
              us provide the best possible service and maintain the smooth operation of our flights.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <h1>UPDATE FLIGHT DETAILS</h1>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Flight ID"
                    id="update-flight-id"
                    type="number"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Flight Number"
                    id="update-flight-number"
                    type="number"
                    name="flight_number"
                    value={formData.flight_number}
                    onChange={handleChange}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Departure Time"
                    id="update-departure-time"
                    type="datetime-local"
                    name="departure_time"
                    value={formData.departure_time}
                    onChange={handleChange}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Arrival Time"
                    id="update-arrival-time"
                    type="datetime-local"
                    name="arrival_time"
                    value={formData.arrival_time}
                    onChange={handleChange}
                  />

                  <select
                    id="update-flight-status"
                    name="flight_status"
                    className="form-select mb-4"
                    value={formData.flight_status}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Choose here
                    </option>
                    <option value="0">Boarding</option>
                    <option value="1">On Flight</option>
                    <option value="2">Arrived</option>
                  </select>

                  <div className="d-flex justify-content-between">
                    <MDBBtn
                      type="button"
                      className="mb-4"
                      color="secondary"
                      onClick={() => navigate("/flight")}
                    >
                      Return
                    </MDBBtn>
                    <MDBBtn
                      type="submit"
                      className="mb-4"
                      color="primary"
                    >
                      Confirm Update
                    </MDBBtn>
                  </div>
                </form>

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