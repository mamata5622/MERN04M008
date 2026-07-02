import React from "react";
import { Routes, Route } from "react-router";

import PublicLayout from "../components/layouts/PublicLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OrganizerLayout from "../components/layouts/OrganizerLayout";

function AllRoutes() {
  return (
    <Routes>

      {/* Public Layout */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Authentication */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Organizer Layout */}

      <Route path="/organizer" element={<OrganizerLayout/>}></Route>

    </Routes>
  );
}

export default AllRoutes;