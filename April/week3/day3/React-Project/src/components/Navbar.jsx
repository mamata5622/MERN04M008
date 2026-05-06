import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="p-2 w-screen flex text-yellow-600 fixed top-0 z-20 shadow-black/20 shadow-2xl">
      <div className="w-1/4 flex justify-center items-center border-r-2">
        <p className="font-bold lg:text-[20px]">
          HD <span className="text-sky-300">Movies</span>
        </p>
      </div>
      <div className="w-3/4  flex justify-end p-4">
        <ul className="p-2 flex items-center gap-3 cursor-pointer">
          <li>
            <Link to='/'className="hover:text-yellow-300 lg:text-[20px]">Home</Link>
          </li>
          <li>
            <Link to='/movies' className="hover:text-yellow-300 lg:text-[20px]">Movies</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Link to="/login" className="pl-3 pr-3 pt-1 pb-1 rounded bg-yellow-600 text-white lg:text-[20px]">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
  