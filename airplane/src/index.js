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
import { Home } from "./pages/Home";
import { HomeLogin } from "./pages/HomeLogin";
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
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import { AnalyticsLogin } from "./pages/AnalyticsLogin"; // Import the AnalyticsLogin component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/HomeLogin",
    element: <HomeLogin />,
  },
  {
    path: "/AnalyticsLogin",
    element: <AnalyticsLogin />,  // Route for the login page
  },
  {
    path: "/Analytics",
    element: (
      <ProtectedRoute
        element={<Analytics />}
        redirectPath="/Analytics"  // Redirect to login if not logged in
      />
    ), // Protect Analytics route based on login status
  },
  {
    path: "/boarding",
    element: <Boarding />,
  },
  {
    path: "/gate",
    element: <Gate />,
  },
  {
    path: "/flight",
    element: <Flight />,
  },
  {
    path: "/flightupdate",
    element: <Flightupdate />,
  },
  {
    path: "/flightdelete",
    element: <Flightdelete />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/passenger",
    element: <Passenger />,
  },
  {
    path: "/passengerdelete",
    element: <Passengerdelete />,
  },
  {
    path: "/passengerupdate",
    element: <Passengerupdate />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
