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
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/flight/${flightId}`,
        { method: "DELETE" }
      );

      const responseText = await response.text();
      if (response.ok) {
        setNotification({ show: true, message: responseText, type: 'success' });
        setShowConfirmModal(false);
      } else {
        setNotification({ 
          show: true, 
          message: `Failed to delete flight: ${responseText}`, 
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
        message: 'An error occurred while deleting the flight.', 
        type: 'error' 
      });
    }
  };

  return (
    <div className="flight-delete-container">
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
              <MDBIcon fas icon="exclamation-triangle" size="3x" style={{ color: '#dc3545' }} />
            </div>
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete Flight #{flightId}?</p>
            <p className="warning-text">This action cannot be undone.</p>
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
                className="action-button danger"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  minWidth: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onClick={confirmDelete}
              >
                <MDBIcon fas icon="trash-alt" /> Delete
              </MDBBtn>
            </div>
          </div>
        </div>
      )}

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
            max-width: 400px;
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

          .warning-text {
            color: #dc3545 !important;
            font-size: 0.9rem;
            font-weight: 500;
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
                      className="action-button danger"
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
                      <MDBIcon fas icon="trash-alt" /> Confirm Delete
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
                      .action-button.danger {
                        background-color: #dc3545 !important;
                        color: white !important;
                      }
                      .action-button.danger:hover {
                        background-color: #bb2d3b !important;
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

      <div className="gate-footer">
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
    </div>
  );
};
