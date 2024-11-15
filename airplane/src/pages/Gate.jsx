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
      <Navbar activeTab="Gate" />
      <div className="gate-banner-page-heading">
        <div className="gate-banner-heading-text">GATE</div>
      </div>

      <div className="container">
        <h1>Gate Management Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="gateNumber">Gate Number:</label>
          <input
            type="text"
            id="gateNumber"
            value={gateNumber}
            onChange={(e) => setGateNumber(e.target.value)}
            required
          />

          <label htmlFor="terminal">Terminal:</label>
          <input
            type="text"
            id="terminal"
            value={terminal}
            onChange={(e) => setTerminal(e.target.value)}
            required
          />

          <label htmlFor="gateStatus">Gate Status:</label>
          <select
            id="gateStatus"
            value={gateStatus}
            onChange={(e) => setGateStatus(e.target.value)}
            required
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="under_maintenance">Under Maintenance</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
