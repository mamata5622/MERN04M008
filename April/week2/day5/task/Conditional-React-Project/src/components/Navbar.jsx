import React from "react";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  return (
    <div className='border-b p-4 flex justify-end'>
      <button
      className='bg-purple-600 p-2 rounded text-white'
        onClick={() => {
          if (!isLoggedIn) navigate("/login");
          else{
            navigate('/login')
            localStorage.setItem('isLoggedIn',false)
          }
        }}
      >
        {isLoggedIn?"Logout":"Login"}
      </button>
    </div>
  );
}

export default Navbar;
