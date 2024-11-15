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
} from "mdb-react-ui-kit"; // Make sure to specify the package here

import { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

      const result = await response.text(); // Expecting a text response

      if (response.ok) {
        alert(result); // "Login successful!" or error message
        console.log("Login result:", result);
        // Reset fields
        setUsername("");
        setPassword("");
      } else {
        alert(result); // Invalid credentials or error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
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
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </form>
                {/* <button type="submit">Login</button> */}

                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  type="submit"
                  required
                >
                  Login
                </MDBBtn>

                {/* <a className="small text-muted" href="#!">
                  Forgot password?
                </a> */}
                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <a href="#!" style={{ color: "#393f81" }}>
                    Register here
                  </a>
                </p>

                {/* <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div> */}
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
          © 2024 FLIGHT MATCH. All Rights Reserved
        </div>
      </MDBFooter>
    </>

    // <div>
    //   <Navbar activeTab="Login" />

    // <div className="container">
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="username">Username:</label>
    //     <input
    //       type="text"
    //       id="username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       required
    //     />

    // <label htmlFor="password">Password:</label>
    // <input
    //   type="password"
    //   id="password"
    //   value={password}
    //   onChange={(e) => setPassword(e.target.value)}
    //   required
    // />

    // <button type="submit">Login</button>
    //     </form>
    //   </div>
    // </div>
  );
};
