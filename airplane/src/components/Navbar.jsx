import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ activeTab }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUsername(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUsername('');
    navigate('/login');
  };

  return (
    <>
      <BootstrapNavbar bg="dark" data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand href="/">FLIGHTMATCH</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Analytics">Analytics</Nav.Link>
            <Nav.Link href="Boarding">Boarding</Nav.Link>
            <Nav.Link href="Flightview">Flights</Nav.Link>
            <Nav.Link href="Gate">Gate</Nav.Link>
            <Nav.Link href="Passenger">Passenger</Nav.Link>
            {!username && (
              <>
                <Nav.Link href="Signup">Signup</Nav.Link>
                <Nav.Link href="Login">Login</Nav.Link>
              </>
            )}
            {username && (
              <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Logout
              </Nav.Link>
            )}
          </Nav>
          {username && (
            <Nav>
              <span className="text-light navbar-text">
                {username}
              </span>
            </Nav>
          )}
        </Container>
      </BootstrapNavbar>
    </>
  );
};
