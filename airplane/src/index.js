import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './css/NavBar.css'
import './css/Analytics.css'
import './css/Banner.css'
import './css/Signup.css'
import './css/Boarding.css'
import './css/Flight.css'
// import './css/Flight_delete.css'
// import './css/Flight_update.css'
import './css/Gate.css'
// import './css/Notify.css'
import './css/Passenger.css'
// import './css/Passenger_delete.css'
// import './css/Passenger_update.css'
import './css/Home.css'
import './css/Carousel.css'
import './css/Accordion.css'
import './css/Login.css'
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
import { PassengerLogs } from "./pages/PassengerLogs";
import {Login} from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Carousel from 'react-bootstrap/Carousel';
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
 
 
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: 'boarding',
    element:  <Boarding />
  },
  {
    path: 'gate',
    element: <Gate />
  },
  {
    path: 'flight',
    element: <Flight/>
  },
  {
    path: 'flightupdate',
    element: <Flightupdate/>
  },
  {
    path: 'flightdelete',
    element: <Flightdelete/>
  },
  {
    path: 'notification',
    element: <Notification/>
  },
  {
    path: 'analytics',
    element: <Analytics/>
  },
  {
    path: 'passenger',
    element: <Passenger/>
  },
  {
    path: 'passengerdelete',
    element: <Passengerdelete/>
  },
  {
    path: 'passengerupdate',
    element: <Passengerupdate/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'signup',
    element: <Signup/>
  },
  {
    path: 'Passengerlogs',
    element: <PassengerLogs/>
  }
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();