import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBFooter,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Manage password visibility
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.text();

      if (response.ok) {
        setNotification({ show: true, message: 'Login successful!', type: 'success' });
        console.log("Login result:", result);
        // Store username in localStorage
        localStorage.setItem('loggedInUser', username);
        setUsername("");
        setPassword("");
        setTimeout(() => {
          setNotification({ show: false, message: '', type: 'success' });
          navigate("/"); // Redirect to Home on success
        }, 2000);
      } else {
        setNotification({ show: true, message: 'Invalid username or password', type: 'error' });
        setTimeout(() => setNotification({ show: false, message: '', type: 'error' }), 3000);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setNotification({ show: true, message: 'An error occurred. Please try again.', type: 'error' });
      setTimeout(() => setNotification({ show: false, message: '', type: 'error' }), 3000);
    }
  };

  return (
    <>
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
      <Navbar activeTab="Login" />
      <div className="banner-page-heading">
        <div className="banner-heading-text">LOGIN</div>
      </div>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="images/login-pilot.jpg"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">FLIGHTMATCH</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                        top: "50%",
                        right: "10px", // Positioned on the right side of the input
                        transform: "translateY(-50%)", // Centers vertically
                      }}
                    />
                  </div>
                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    type="submit"
                  >
                    Login
                  </MDBBtn>
                </form>

                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="/signup" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
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
    </>
  );
};
