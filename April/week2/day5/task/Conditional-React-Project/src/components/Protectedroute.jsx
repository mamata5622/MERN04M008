import React from "react";
import { Navigate } from "react-router";

function Protectedroute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Protectedroute;
