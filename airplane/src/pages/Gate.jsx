import { useState } from "react";
import { Navbar } from "../components/Navbar";

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
  MDBInput,
  MDBCardBody,
} from "mdb-react-ui-kit";

export const Gate = () => {
  const [gateNumber, setGateNumber] = useState("");
  const [terminal, setTerminal] = useState("");
  const [gateStatus, setGateStatus] = useState("open");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newGate = {
      gateNumber,
      terminal,
      gateStatus,
    };

    try {
      const response = await fetch("http://localhost:8080/api/gates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGate),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Gate created successfully!");
        console.log("New Gate:", result);
        setGateNumber("");
        setTerminal("");
        setGateStatus("open");
      } else {
        alert("Failed to create gate.");
      }
    } catch (error) {
      console.error("Error creating gate:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="gate-full-body">
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
      <Navbar activeTab="Gate" />
      <div className="gate-banner-page-heading">
        <div className="gate-banner-heading-text">GATE</div>
      </div>

      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">GATE DETAILS</h2>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Gate Number"
                    id="gateNumber"
                    type="number"
                    size="lg"
                    required
                    value={gateNumber}
                    onChange={(e) =>
                      setGateNumber(e.target.value.replace(/\D/g, ""))
                    }
                  />

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    label="Terminal"
                    id="terminal"
                    type="text"
                    size="lg"
                    required
                    value={terminal}
                    onChange={(e) => setTerminal(e.target.value)}
                  />

                  <select
                    id="gateStatus"
                    name="gate_status"
                    className="form-select gate-option-design"
                    value={gateStatus}
                    onChange={(e) => setGateStatus(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Gate Status
                    </option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                    <option value="under_maintenance">Under Maintenance</option>
                  </select>

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
