import { useState } from "react";
import { Link } from "react-router";
import {
  FaCalendarCheck,
  FaUserCircle,
  FaUserShield,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = ({ isLoggedIn = false, role = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F4EC]/95 backdrop-blur-md shadow-md border-b border-[#E5D5C5]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-[#6F4E37] p-2.5 rounded-xl shadow">
              <FaCalendarCheck className="text-white text-2xl" />
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold">
                <span className="text-[#6F4E37]">Plan</span>
                <span className="text-[#A67C52]">Go</span>
              </h1>

              <p className="hidden sm:block text-[10px] tracking-[0.35em] uppercase text-[#8B7355]">
                Event Management
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-[#5C4033] font-medium">
            <li>
              <Link to="/" className="hover:text-[#A67C52] transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/events" className="hover:text-[#A67C52] transition">
                Events
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#A67C52] transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-[#A67C52] transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:block">
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-full bg-[#6F4E37] text-white hover:bg-[#5C4033] transition"
              >
                Login
              </Link>
            ) : role === "admin" ? (
              <Link
                to="/admin"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6F4E37] text-white"
              >
                <FaUserShield />
                Admin
              </Link>
            ) : (
              <Link
                to="/profile"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8DCCB] text-[#5C4033]"
              >
                <FaUserCircle />
                Profile
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#6F4E37] text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-5 animate-fade-in">

            <ul className="flex flex-col gap-4 text-[#5C4033] font-medium border-t pt-5">

              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/events" onClick={() => setMenuOpen(false)}>
                  Events
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>

              <div className="pt-3">

                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center bg-[#6F4E37] text-white py-3 rounded-xl"
                  >
                    Login
                  </Link>
                ) : role === "admin" ? (
                  <Link
                    to="/admin"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center items-center gap-2 bg-[#6F4E37] text-white py-3 rounded-xl"
                  >
                    <FaUserShield />
                    Admin
                  </Link>
                ) : (
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-center items-center gap-2 bg-[#E8DCCB] text-[#5C4033] py-3 rounded-xl"
                  >
                    <FaUserCircle />
                    Profile
                  </Link>
                )}

              </div>

            </ul>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;