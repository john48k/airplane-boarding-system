import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, redirectPath }) => {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }

  return element;
};

export default ProtectedRoute;
