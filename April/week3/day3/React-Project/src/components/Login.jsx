import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaFilm,
  FaPlayCircle,
  FaStar,
  FaUsers,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [existdata, setExistdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExistdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((item) => item.email === existdata.email);

    if (!user) {
      toast.error("Email not found");
      return;
    }

    if (user.password !== existdata.password) {
      toast.error("Incorrect Password");
      return;
    }

    localStorage.setItem("loginUser", JSON.stringify(user));
    localStorage.setItem("isLogin", true);

    toast.success("Login Successful");

    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black ">
      <div className="container mx-auto flex min-h-screen items-center px-6 ">
        {/* ================= Left ================= */}

        <div className="hidden lg:flex w-1/2 flex-col mt-15">
          <div className="flex items-center gap-3">
            <FaFilm className="text-5xl text-orange-500" />

            <h1 className="text-5xl font-extrabold text-white">
              Movie<span className="text-orange-500">Verse</span>
            </h1>
          </div>

          <h2 className="mt-8 text-6xl font-bold leading-tight text-white">
            Unlimited
            <span className="text-yellow-400"> Movies</span>
            <br />
            Unlimited
            <span className="text-green-500"> Entertainment</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Discover thousands of blockbuster movies, trending TV shows and
            create your own watchlist.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <FaPlayCircle className="text-orange-500 text-2xl" />

              <span className="text-lg text-white">HD Movies</span>
            </div>

            <div className="flex items-center gap-4">
              <FaStar className="text-yellow-400 text-2xl" />

              <span className="text-lg text-white">Top Rated Collections</span>
            </div>

            <div className="flex items-center gap-4">
              <FaUsers className="text-green-500 text-2xl" />

              <span className="text-lg text-white">Millions of Users</span>
            </div>
          </div>

          <div className="mt-14 flex gap-10">
            <div>
              <h2 className="text-4xl font-bold text-orange-500">10K+</h2>

              <p className="text-gray-400">Movies</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-yellow-400">500+</h2>

              <p className="text-gray-400">Shows</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-500">1M+</h2>

              <p className="text-gray-400">Users</p>
            </div>
          </div>
        </div>

        {/* ================= Right ================= */}

        <div className="flex w-full justify-center lg:w-1/2 mt-20">
          {/* Login Card */}

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 p-5">
                <FaFilm className="text-3xl text-white" />
              </div>
            </div>

            <h2 className="text-center text-4xl font-bold text-white">
              Welcome Back
            </h2>

            <p className="mt-2 text-center text-gray-300">
              Login to continue your movie journey.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Email */}

              <div>
                <label className="mb-2 block text-white">Email</label>

                <div className="flex items-center rounded-xl border border-white/10 bg-white/10 px-4">
                  <FaEnvelope className="text-yellow-400" />

                  <input
                    type="email"
                    name="email"
                    value={existdata.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent p-3 text-white outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <label className="mb-2 block text-white">Password</label>

                <div className="flex items-center rounded-xl border border-white/10 bg-white/10 px-4">
                  <FaLock className="text-green-400" />

                  <input
                    type="password"
                    name="password"
                    value={existdata.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full bg-transparent p-3 text-white outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 py-3 text-lg font-semibold text-white transition duration-300 hover:scale-105"
              >
                <FaSignInAlt />
                Login Now
              </button>
            </form>

            {/* Divider */}

            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-600"></div>

              <span className="px-4 text-gray-400">OR</span>

              <div className="h-px flex-1 bg-gray-600"></div>
            </div>

            {/* Register */}

            <p className="text-center text-gray-300">Don't have an account?</p>

            <Link
              to="/register"
              className="mt-3 block text-center font-semibold text-yellow-400 transition hover:text-orange-500"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
