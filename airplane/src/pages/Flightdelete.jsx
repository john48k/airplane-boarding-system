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

export const Flightdelete = () => {
  const [flightId, setFlightId] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/flight/${flightId}`,
        { method: "DELETE" }
      );

      const responseText = await response.text();
      if (response.ok) {
        alert(responseText); // Success message from backend
      } else {
        alert(`Failed to delete flight: ${responseText}`); // Error message from backend
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the flight.");
    }
  };

  return (
    <div className="flight-delete-container">
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
        <div className="banner-heading-text">DELETE FLIGHT</div>
      </div>
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Delete Flight, <br />
              <span className="text-primary travel-text">
                Manage Efficiently!
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Deleting a flight from our system is a critical operation that
              should be performed with caution. This action is typically used
              when a flight has been cancelled or when correcting data entry
              errors. Please ensure you have the correct Flight ID before
              proceeding with the deletion. Once a flight is deleted, all
              associated data will be permanently removed from our database.
            </p>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <h1>DELETE FLIGHT</h1>

                <form onSubmit={handleDelete}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Flight ID"
                    id="delete-flight-id"
                    type="number"
                    value={flightId}
                    onChange={(e) => setFlightId(e.target.value)}
                    required
                  />

                  <div className="d-flex justify-content-between">
                    <MDBBtn
                      type="button"
                      className="mb-4"
                      color="secondary"
                      onClick={() => navigate("/flightview")}
                    >
                      Return
                    </MDBBtn>
                    <MDBBtn type="submit" className="mb-4" color="danger">
                      Confirm Delete
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

      <div className="gate-footer">
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
