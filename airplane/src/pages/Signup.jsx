import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBFooter,
  MDBIcon,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Navbar } from "../components/Navbar";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setNotification({ show: true, message: 'Passwords do not match.', type: 'error' });
      setTimeout(() => setNotification({ show: false, message: '', type: 'error' }), 3000);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          email,
          phoneNumber,
        }),
      });

      if (response.ok) {
        setNotification({ show: true, message: 'Signup successful!', type: 'success' });
        setTimeout(() => {
          setNotification({ show: false, message: '', type: 'success' });
          navigate("/login");
        }, 2000);
      } else {
        const errorMessage = await response.text();
        // Check if error is about duplicate entry
        if (errorMessage.includes('Duplicate entry')) {
          setNotification({ show: true, message: 'Email already exists', type: 'error' });
        } else {
          setNotification({ show: true, message: 'Failed to create account. Please try again.', type: 'error' });
        }
        setTimeout(() => setNotification({ show: false, message: '', type: 'error' }), 3000);
      }
    } catch (error) {
      setNotification({ show: true, message: 'An error occurred. Please try again.', type: 'error' });
      setTimeout(() => setNotification({ show: false, message: '', type: 'error' }), 3000);
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

      <Navbar activeTab="Boarding" />
      <div className="signup-banner-page-heading">
        <div className="banner-heading-text">SIGN UP</div>
      </div>

      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "hsl(214 70% 56%)" }}
            >
              Join the Journey <br />
              <span style={{ color: "hsl(208 100% 78%)" }}>
                Sign Up and Take Off!
              </span>
            </h1>

            <p className="px-3" style={{ color: "hsl(208 100% 88%)" }}>
              Book a flight now and start planning your next adventure today.
              Whether you're looking for a relaxing vacation or an exciting
              business trip, booking your flight early ensures the best prices
              and availability. With just a few clicks, you can secure your seat
              and get ready to explore new destinations. Don’t wait—book a
              flight now and make your travel dreams a reality!
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <form className="signup-form" onSubmit={handleSignup}>
              <MDBCard className="my-5 bg-glass">
                <MDBCardBody className="p-5">
                  <MDBRow></MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="form3"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone Number"
                    id="form3"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      setPhoneNumber(value);
                    }}
                    required
                  />

                  <div style={{ position: "relative" }} className="mb-4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <MDBIcon
                      icon={showPassword ? "eye-slash" : "eye"}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%", // Centered vertically
                        right: "10px", // Positioned at the right of the input
                        transform: "translateY(-50%)", // Adjust to vertical center
                      }}
                    />
                  </div>

                  <div style={{ position: "relative" }} className="mb-4">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Confirm Password"
                      id="form-confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <MDBIcon
                      icon={showConfirmPassword ? "eye-slash" : "eye"}
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%", // Centered vertically
                        right: "10px", // Positioned at the right of the input
                        transform: "translateY(-50%)", // Adjust to vertical center
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <MDBBtn className="w-100 mb-4" size="md" type="submit">
                    Sign Up
                  </MDBBtn>

                  <div className="text-center">
                    <p>or sign up with:</p>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#1266f1" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </form>
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
          2024 FLIGHT MATCH. All Rights Reserved
        </div>
      </MDBFooter>
    </div>
  );
};
