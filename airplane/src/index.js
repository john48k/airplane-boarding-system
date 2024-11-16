import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './css/NavBar.css';
import './css/Analytics.css';
import './css/Banner.css';
import './css/Signup.css';
import './css/Boarding.css';
import './css/Flight.css';
import './css/Gate.css';
import './css/Passenger.css';
import './css/Home.css';
import './css/Carousel.css';
import './css/Accordion.css';
import './css/Login.css';
import './css/HomeLogin.css';
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Gate } from "./pages/Gate";
import { Boarding } from "./pages/Boarding";
import { Flight } from "./pages/Flight";
import { Flightupdate } from "./pages/Flightupdate";
import { Flightdelete } from "./pages/Flightdelete";
import { Notification } from "./pages/Notification";
import { Analytics } from "./pages/Analytics";
import { Passenger } from "./pages/Passenger";
import { Passengerdelete } from "./pages/Passenger_delete";
import { Passengerupdate } from "./pages/Passenger_update";
import { Login } from "./pages/Login";
import { HomeLogin } from "./pages/HomeLogin";
import { GateLogin } from "./pages/GateLogin";
import { AnalyticsLogin } from "./pages/AnalyticsLogin";
import { BoardingLogin } from "./pages/BoardingLogin";
import { FlightLogin } from "./pages/FlightLogin";
import { PassengerLogin } from "./pages/PassengerLogin";
import 'bootstrap/dist/css/bootstrap.min.css';

const isLoggedIn = () => {
  return !!localStorage.getItem("userToken"); // Replace with your actual login check logic
};

const ProtectedRoute = ({ elementForLoggedIn, elementForLoggedOut }) => {
  return isLoggedIn() ? elementForLoggedIn : elementForLoggedOut;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute
        elementForLoggedIn={<HomeLogin />}
        elementForLoggedOut={<Home />}
      />
    ),
  },
  
  {
    path: "login", // This is the parent route
    element: <Login />, // Base login page
    children: [
      {
        path: "HomeLogin", // This will match '/Login/HomeLogin'
        element: <HomeLogin />,
      },
      {
        path: "GateLogin",
        element: <GateLogin />,
      },
      {
        path: "BoardingLogin",
        element: <BoardingLogin />,
      },
      {
        path: "FlightLogin",
        element: <FlightLogin />,
      },
      {
        path: "AnalyticsLogin",
        element: <AnalyticsLogin />,
      },
      {
        path: "PassengerLogin",
        element: <PassengerLogin />,
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "gate",
    element: (
      <ProtectedRoute
        elementForLoggedIn={<GateLogin />}
        elementForLoggedOut={<Gate />}
      />
    ),
  },
  {
    path: "boarding",
    element: (
      <ProtectedRoute
        elementForLoggedIn={<BoardingLogin />}
        elementForLoggedOut={<Boarding />}
      />
    ),
  },
  {
    path: "flight",
    element: (
      <ProtectedRoute
        elementForLoggedIn={<FlightLogin />}
        elementForLoggedOut={<Flight />}
      />
    ),
  },
  {
    path: "flightupdate",
    element: <Flightupdate />,
  },
  {
    path: "flightdelete",
    element: <Flightdelete />,
  },
  {
    path: "notification",
    element: <Notification />,
  },
  {
    path: "analytics",
    element: (
      <ProtectedRoute
        elementForLoggedIn={<AnalyticsLogin />}
        elementForLoggedOut={<Analytics />}
      />
    ),
  },
  {
    path: "passenger",
    element: <Passenger />,
  },
  {
    path: "passengerdelete",
    element: <Passengerdelete />,
  },
  {
    path: "passengerupdate",
    element: <Passengerupdate />,
  },
  {
    path: "*", // Catch-all route for undefined paths
    element: <div>Page Not Found. Please check your URL.</div>, // Custom 404 message
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
