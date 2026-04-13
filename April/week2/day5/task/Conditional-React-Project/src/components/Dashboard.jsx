import React from "react";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  localStorage.getItem("users", JSON.stringify(FormData));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <div>
      <h1>Welcome,{FormData.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
