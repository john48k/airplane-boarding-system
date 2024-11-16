import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";

export const NavbarLogin = ({ activeTab }) => {
  return (
    <>
      <BootstrapNavbar bg="dark" data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand href="/">FLIGHTMATCH</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/HomeLogin">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/AnalyticsLogin">
              Analytics (LOGIN)
            </Nav.Link>
            <Nav.Link as={Link} to="/Boarding">
              Boarding
            </Nav.Link>
            <Nav.Link as={Link} to="/Flight">
              Book Flight
            </Nav.Link>
            <Nav.Link as={Link} to="/Gate">
              Gate
            </Nav.Link>
            <Nav.Link as={Link} to="/Passenger">
              Passenger
            </Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
};
