import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './css/NavBar.css'
import './css/Boarding.css'
import './css/Flight.css'
import './css/Gate.css'
import './css/Notify.css'
import { Home } from "./pages/Home";
import { Gate } from "./pages/Gate";
import { Boarding } from "./pages/Boarding";
import { Flight } from "./pages/Flight";
import { Notification } from "./pages/Notification";



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
    path: 'notification',
    element: <Notification/>
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
