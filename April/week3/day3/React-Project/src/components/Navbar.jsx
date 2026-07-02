import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaFilm,
  FaHome,
  FaVideo,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    localStorage.removeItem("isLogin");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <FaFilm className="text-4xl text-orange-500" />

          <h1 className="text-3xl font-bold text-white">
            Movie<span className="text-orange-500">Verse</span>
          </h1>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 lg:flex">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 font-medium text-white transition hover:text-orange-400"
            >
              <FaHome />
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/movies"
              className="flex items-center gap-2 font-medium text-white transition hover:text-yellow-400"
            >
              <FaVideo />
              Movies
            </Link>
          </li>

          {isLogin && (
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-2 font-medium text-white transition hover:text-green-400"
              >
                <FaUserCircle />
                Profile
              </Link>
            </li>
          )}
        </ul>

        {/* Desktop Buttons */}

        <div className="hidden items-center gap-3 lg:flex">
          {!isLogin ? (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-xl border border-orange-500 px-5 py-2 font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-white"
              >
                <FaSignInAlt />
                Login
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 px-5 py-2 font-semibold text-white transition hover:scale-105"
              >
                <FaUserPlus />
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2 font-semibold text-white transition hover:scale-105"
            >
              <FaSignOutAlt />
              Logout
            </button>
          )}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-black/95 lg:hidden">
          <div className="flex flex-col space-y-5 px-6 py-6">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-white hover:text-orange-400"
            >
              <FaHome />
              Home
            </Link>

            <Link
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-white hover:text-yellow-400"
            >
              <FaVideo />
              Movies
            </Link>

            {isLogin && (
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-white hover:text-green-400"
              >
                <FaUserCircle />
                Profile
              </Link>
            )}

            {!isLogin ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-orange-500 py-3 text-center font-semibold text-orange-400"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 py-3 text-center font-semibold text-white"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="rounded-xl bg-gradient-to-r from-red-500 to-orange-500 py-3 font-semibold text-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
