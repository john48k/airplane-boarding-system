// import { Link } from "react-router-dom";
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
            <Nav.Link href="HomeLogin">Home</Nav.Link>
            <Nav.Link href="AnalyticsLogin">Analytics</Nav.Link>
            <Nav.Link href="BoardingLogin">Boarding</Nav.Link>
            <Nav.Link href="FlightLogin">Book Flight</Nav.Link>
            <Nav.Link href="GateLogin">Gate</Nav.Link>
            <Nav.Link href="PassengerLogin">Passenger</Nav.Link>
            <Nav.Link href="logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

// <nav className="navbar header-area">
//   <ul className="navbar-menu">
//     <li>
//       <Link to="/" id={activeTab === "Home" ? "highlight" : undefined}>
//         Home
//       </Link>
//     </li>
//     <li>
//       <Link to="/gate" id={activeTab === "Gate" ? "highlight" : undefined}>
//         Gate
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/flight"
//         id={activeTab === "Flight" ? "highlight" : undefined}
//       >
//         Flight
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/boarding"
//         id={activeTab === "Boarding" ? "highlight" : undefined}
//       >
//         Boarding Pass
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/notification"
//         id={activeTab === "Notification" ? "highlight" : undefined}
//       >
//         Notification
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/analytics"
//         id={activeTab === "Analytics" ? "highlight" : undefined}
//       >
//         Analytics
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/passenger"
//         id={activeTab === "Passenger" ? "highlight" : undefined}
//       >
//         Passenger
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/Login"
//         id={activeTab === "Login" ? "highlight" : undefined}
//       >
//         Login
//       </Link>
//     </li>
//   </ul>
// </nav>
