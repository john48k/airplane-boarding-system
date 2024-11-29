import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export const Gate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gateNumber: '',
    terminal: '',
    gateStatus: 'AVAILABLE'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/gates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormData({
          gateNumber: '',
          terminal: '',
          gateStatus: 'AVAILABLE'
        });
        navigate('/gate-details');
      }
    } catch (error) {
      console.error("Error adding gate:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="gate-full-body">
      {/* Header Section */}
      <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom">
          <div className="me-5 d-none d-lg-block" style={{ fontSize: "0.875rem" }}>
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
        <div className="gate-banner-heading-text">GATE OPERATIONS</div>
      </div>

      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100">
                <h2 className="fw-bold mb-4 text-center">Add New Gate</h2>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Gate Number"
                    name="gateNumber"
                    type="text"
                    value={formData.gateNumber}
                    onChange={handleChange}
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Terminal"
                    name="terminal"
                    type="text"
                    value={formData.terminal}
                    onChange={handleChange}
                    required
                  />
                  <select
                    className="form-select mb-4"
                    name="gateStatus"
                    value={formData.gateStatus}
                    onChange={handleChange}
                  >
                    <option value="AVAILABLE">Available</option>
                    <option value="OCCUPIED">Occupied</option>
                    <option value="MAINTENANCE">Maintenance</option>
                  </select>
                  <MDBBtn type="submit" className="w-100 mb-4" size="md">
                    Add Gate
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Footer Section */}
      <div className="gate-footer">
        <MDBFooter
          className="text-bottomcenter text-white"
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

export default Gate;
