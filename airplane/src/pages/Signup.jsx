import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
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
        setMessage("Signup successful!");
        navigate("/login");
      } else {
        const errorMessage = await response.text();
        setMessage(errorMessage);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
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

      <Navbar activeTab="Boarding" />
      <div className="signup-banner-page-heading">
        <div className="banner-heading-text">SIGN UP</div>
      </div>
      {message && (
        <div
          className={`message ${
            message.includes("successful") ? "success" : "error"
          }`}
        >
          {message}
        </div>
      )}

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
            <form className="signup-form" onSubmit={handleSignup}>
              <MDBCard className="my-5 bg-glass">
                <MDBCardBody className="p-5">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone Number"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) =>
                      setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    pattern="\d{11}"
                    title="Phone number must be exactly 11 digits."
                    required
                  />

                  <div className="password-toggle-wrapper mb-4">
                    <MDBInput
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <MDBBtn
                      tag="a"
                      className="toggle-password-visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <MDBIcon
                        icon={showPassword ? "eye-slash" : "eye"}
                      />
                    </MDBBtn>
                  </div>

                  <div className="password-toggle-wrapper mb-4">
                    <MDBInput
                      label="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <MDBBtn
                      tag="a"
                      className="toggle-password-visibility"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      <MDBIcon
                        icon={showConfirmPassword ? "eye-slash" : "eye"}
                      />
                    </MDBBtn>
                  </div>

                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                    className="mb-4"
                  />

                  <MDBBtn className="w-100 mb-4" size="md" type="submit">
                    Sign Up
                  </MDBBtn>
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
          © 2024 FLIGHT MATCH. All Rights Reserved
        </div>
      </MDBFooter>
    </div>
  );
};
