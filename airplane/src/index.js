import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "https://unpkg.com/swiper@7/swiper-bundle.min.css";
import './css/NavBar.css'
import './css/Boarding.css'
import './css/Flight.css'
import './css/Flight_delete.css'
import './css/Flight_update.css'
import './css/Gate.css'
import './css/Notify.css'
import './css/Analytics.css'
import './css/Passenger.css'
import './css/Passenger_delete.css'
import './css/Passenger_update.css'
import "./css/fontawesome.css";
import "./css/templatemo-villa-agency.css";
import "./css/owl.css";
import "./css/animate.css";

import { Home } from "./pages/Home";
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