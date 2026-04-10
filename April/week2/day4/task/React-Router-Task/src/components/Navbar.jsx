import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="border p-3 flex justify-evenly">
      <Link to="/user-form">Userform</Link>
      <Link to="/user-details">UserDetails</Link>
    </div>
  );
}

export default Navbar;
