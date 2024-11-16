import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";

export const Navbar = ({ activeTab }) => {
  return (
    <>
      <BootstrapNavbar bg="dark" data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand href="/">FLIGHTMATCH</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Analytics">Analytics</Nav.Link>
            <Nav.Link href="Boarding">Boarding</Nav.Link>
            <Nav.Link href="Flight">Book Flight</Nav.Link>
            <Nav.Link href="Gate">Gate</Nav.Link>
            <Nav.Link href="Passenger">Passenger</Nav.Link>
            <Nav.Link href="Signup">Signup</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
};
