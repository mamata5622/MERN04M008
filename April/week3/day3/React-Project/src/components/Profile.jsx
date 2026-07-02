import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaFilm,
  FaStar,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loginUser"));
    setLoginUser(user || {});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}

            <div className="flex flex-col items-center justify-center border-b border-white/10 p-10 lg:border-b-0 lg:border-r">
              <FaUserCircle className="text-[140px] text-orange-500" />

              <h2 className="mt-6 text-3xl font-bold text-white">
                {loginUser?.fullname || "Movie Lover"}
              </h2>

              <p className="mt-2 text-gray-400">Welcome to MovieVerse</p>

              <div className="mt-8 flex gap-8">
                <div className="text-center">
                  <FaFilm className="mx-auto text-3xl text-orange-500" />

                  <h3 className="mt-2 text-2xl font-bold text-white">10K+</h3>

                  <p className="text-gray-400">Movies</p>
                </div>

                <div className="text-center">
                  <FaStar className="mx-auto text-3xl text-yellow-400" />

                  <h3 className="mt-2 text-2xl font-bold text-white">500+</h3>

                  <p className="text-gray-400">Shows</p>
                </div>

                <div className="text-center">
                  <FaHeart className="mx-auto text-3xl text-red-500" />

                  <h3 className="mt-2 text-2xl font-bold text-white">1M+</h3>

                  <p className="text-gray-400">Users</p>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="p-10">
              <h2 className="mb-8 text-4xl font-bold text-white">
                User Profile
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <FaUserCircle className="text-2xl text-orange-500" />

                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>

                    <h3 className="text-lg font-semibold text-white">
                      {loginUser?.fullname}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <FaEnvelope className="text-xl text-yellow-400" />

                  <div>
                    <p className="text-sm text-gray-400">Email</p>

                    <h3 className="text-lg font-semibold text-white">
                      {loginUser?.email}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <FaPhoneAlt className="text-xl text-green-500" />

                  <div>
                    <p className="text-sm text-gray-400">Mobile Number</p>

                    <h3 className="text-lg font-semibold text-white">
                      {loginUser?.phone}
                    </h3>
                  </div>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 py-3 font-semibold text-white transition duration-300 hover:scale-105"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
