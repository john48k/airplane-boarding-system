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
                  <style>
                    {`
                      .gate-action-button {
                        padding: 12px 24px;
                        border-radius: 8px;
                        font-size: 0.95rem;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        text-transform: none;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                      }
                      .gate-action-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                      }
                      .gate-action-button.primary {
                        background: linear-gradient(45deg, #0d6efd, #0a58ca);
                        color: white;
                        border: none;
                      }
                      .gate-action-button.primary:hover {
                        background: linear-gradient(45deg, #0b5ed7, #084298);
                      }
                      .gate-action-button.secondary {
                        background: linear-gradient(45deg, #6c757d, #5c636a);
                        color: white;
                        border: none;
                      }
                      .gate-action-button.secondary:hover {
                        background: linear-gradient(45deg, #5c636a, #4d5154);
                      }
                      .button-container {
                        display: flex;
                        gap: 15px;
                        margin-bottom: 20px;
                      }
                    `}
                  </style>
                  <div className="button-container">
                    <MDBBtn 
                      type="submit" 
                      className="gate-action-button primary flex-grow-1"
                    >
                      <MDBIcon fas icon="plus-circle" className="me-2" />
                      ADD GATE
                    </MDBBtn>
                    <MDBBtn 
                      onClick={() => navigate('/gate-details')}
                      className="gate-action-button secondary flex-grow-1"
                    >
                      <MDBIcon fas icon="door-open" className="me-2" />
                      GATE DETAILS
                    </MDBBtn>
                  </div>
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
            2024 FLIGHT MATCH. All Rights Reserved
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default Gate;
