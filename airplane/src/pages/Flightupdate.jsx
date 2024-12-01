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
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Form data updated:", { ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const confirmUpdate = async () => {
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
        setNotification({ show: true, message: 'Flight updated successfully!', type: 'success' });
        setShowConfirmModal(false);
        setTimeout(() => {
          navigate("/flightview");
        }, 1500);
      } else {
        const errorText = await response.text();
        setNotification({ 
          show: true, 
          message: `Failed to update flight: ${errorText}`, 
          type: 'error' 
        });
      }

      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setNotification({ 
        show: true, 
        message: 'An error occurred while updating the flight.', 
        type: 'error' 
      });
    }
  };

  return (
    <div>
      {notification.show && (
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          borderRadius: '4px',
          backgroundColor: notification.type === 'success' ? 'white' : 'white',
          color: '#0d6efd',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          fontWeight: "bold",
        }}
      >
        {notification.message}
      </div>
    )}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="confirmation-modal">
            <div className="modal-icon">
              <MDBIcon fas icon="info-circle" size="3x" style={{ color: '#0d6efd' }} />
            </div>
            <h3>Confirm Update</h3>
            <p>Are you sure you want to update Flight #{formData.id}?</p>
            <div className="flight-details">
              <p><strong>Flight Number:</strong> {formData.flight_number}</p>
              <p><strong>Departure:</strong> {new Date(formData.departure_time).toLocaleString()}</p>
              <p><strong>Arrival:</strong> {new Date(formData.arrival_time).toLocaleString()}</p>
              <p><strong>Status:</strong> {formData.flight_status === "0" ? "Boarding" : 
                                        formData.flight_status === "1" ? "On Flight" : 
                                        formData.flight_status === "2" ? "Arrived" : "Unknown"}</p>
            </div>
            <div className="modal-buttons">
              <MDBBtn
                className="action-button secondary"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  minWidth: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onClick={() => setShowConfirmModal(false)}
              >
                <MDBIcon fas icon="times" /> Cancel
              </MDBBtn>
              <MDBBtn
                className="action-button primary"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  minWidth: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onClick={confirmUpdate}
              >
                <MDBIcon fas icon="check" /> Update
              </MDBBtn>
            </div>
          </div>
        </div>
      )}
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
                      className="action-button secondary"
                      style={{
                        padding: '10px 20px',
                        borderRadius: '8px',
                        minWidth: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                      onClick={() => navigate("/flightview")}
                    >
                      <MDBIcon fas icon="arrow-left" /> Back
                    </MDBBtn>
                    <MDBBtn
                      type="submit"
                      className="action-button primary"
                      style={{
                        padding: '10px 20px',
                        borderRadius: '8px',
                        minWidth: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      }}
                    >
                      <MDBIcon fas icon="check" /> Confirm Update
                    </MDBBtn>
                  </div>

                  <style>
                    {`
                      .action-button {
                        border: none !important;
                        font-weight: 500 !important;
                      }
                      .action-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
                      }
                      .action-button.primary {
                        background-color: #0d6efd !important;
                        color: white !important;
                      }
                      .action-button.primary:hover {
                        background-color: #0b5ed7 !important;
                      }
                      .action-button.secondary {
                        background-color: #6c757d !important;
                        color: white !important;
                      }
                      .action-button.secondary:hover {
                        background-color: #5c636a !important;
                      }
                    `}
                  </style>
                </form>

                <div style={{ marginTop: "25px" }} className="text-center">
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

      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(4px);
          }

          .confirmation-modal {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            text-align: center;
            max-width: 500px;
            width: 90%;
            animation: modalSlideIn 0.3s ease-out;
          }

          @keyframes modalSlideIn {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .modal-icon {
            margin-bottom: 1rem;
          }

          .confirmation-modal h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .confirmation-modal p {
            color: #5a6c7d;
            margin-bottom: 0.5rem;
          }

          .flight-details {
            background-color: #f8f9fa;
            padding: 1rem;
            border-radius: 8px;
            margin: 1rem 0;
            text-align: left;
          }

          .flight-details p {
            margin-bottom: 0.5rem;
            color: #2c3e50;
            font-size: 0.9rem;
          }

          .flight-details strong {
            color: #0d6efd;
          }

          .modal-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
          }
        `}
      </style>

      <MDBFooter
        className="text-center text-white"
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
  );
};