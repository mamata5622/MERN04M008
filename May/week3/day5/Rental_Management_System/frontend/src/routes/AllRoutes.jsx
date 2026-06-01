import React from "react";
import { Route, Routes } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PublicRoutes from "./PublicRoutes";
import Vehicles from "../pages/Vehicles";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../components/layout/AdminLayout";
import Navbar from "../components/Navbar";
import PublicLayout from "../components/layout/PublicLayout";
import AdminVehiclePage from "../pages/admin/AdminVehiclePage";
import AdminUsersPage from "../pages/admin/AdminUsersPage";
import AdminContactPage from "../pages/admin/AdminContactPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/vehicles" element={<Vehicles />} />

          <Route
            path="/profile"
            element={
              <PublicRoutes>
                <Profile />
              </PublicRoutes>
            }
          />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vehicles" element={<AdminVehiclePage />} />
          <Route path="users" element={<h1><AdminUsersPage/></h1>} />
          <Route path="contact" element={<h1><AdminContactPage/></h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
