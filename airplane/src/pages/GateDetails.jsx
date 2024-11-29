import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export const GateDetails = () => {
  const navigate = useNavigate();
  const [gates, setGates] = useState([]);

  useEffect(() => {
    fetchGates();
  }, []);

  const fetchGates = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/gates");
      if (response.ok) {
        const data = await response.json();
        const formattedData = data.map((gate) => ({
          ...gate,
          gateStatus: gate.gateStatus.toLowerCase(),
        }));
        setGates(formattedData);
      }
    } catch (error) {
      console.error("Error fetching gates:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gate?")) {
      try {
        const response = await fetch(`http://localhost:8080/api/gates/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchGates();
        }
      } catch (error) {
        console.error("Error deleting gate:", error);
      }
    }
  };

  return (
    <div className="gate-details-container">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted header-footer"
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
      <div className="gate-content">
        <Navbar activeTab="Gate" />

        <div className="gate-banner-page-heading">
          <div className="gate-banner-heading-text">GATE DETAILS</div>
        </div>

        <MDBContainer fluid className="table-container">
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className="departure-board mx-auto"
                style={{
                  maxWidth: "1000px",
                  background: "#1a1a2e",
                  width: "100%",
                }}
              >
                <MDBCardBody className="p-4">
                  <div className="board-wrapper">
                    <table className="departure-table">
                      <thead>
                        <tr>
                          <th>Gate Number</th>
                          <th>Terminal</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gates.map((gate) => (
                          <tr key={gate.gateID} className="board-row">
                            <td className="gate-column">{gate.gateNumber}</td>
                            <td className="terminal-column">{gate.terminal}</td>
                            <td
                              className={`status-${gate.gateStatus.toLowerCase()}`}
                            >
                              {gate.gateStatus.toLowerCase() === "available"
                                ? "available"
                                : gate.gateStatus.toLowerCase()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div className="back-button-section">
          <button className="back-button" onClick={() => navigate("/gate")}>
            ← BACK TO GATE FORM
          </button>
        </div>
      </div>

      <div className="gate-footer2">
        <MDBFooter
          className="text-center text-white bottom-footer"
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

export default GateDetails;
