import { Link } from "react-router-dom";

export const Navbar = ({ activeTab }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/" id={activeTab === "Home" ? "highlight" : undefined}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/gate" id={activeTab === "Gate" ? "highlight" : undefined}>
            Gate
          </Link>
        </li>
        <li>
          <Link
            to="/flight"
            id={activeTab === "Flight" ? "highlight" : undefined}
          >
            Flight
          </Link>
        </li>
        <li>
          <Link
            to="/boarding"
            id={activeTab === "Boarding" ? "highlight" : undefined}
          >
            Boarding Pass
          </Link>
        </li>
        <li>
          <Link
            to="/notification"
            id={activeTab === "Notification" ? "highlight" : undefined}
          >
            Notification
          </Link>
        </li>
        <li>
          <Link
            to="/passenger"
            id={activeTab === "Passenger" ? "highlight" : undefined}
          >
            Passenger
          </Link>
        </li>
      </ul>
    </nav>
  );
};
