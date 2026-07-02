import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaFilm,
  FaUserPlus,
  FaPlay,
  FaStar,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formdata.fullname ||
      !formdata.email ||
      !formdata.phone ||
      !formdata.password
    ) {
      toast.error("Please fill all fields");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === formdata.email);

    if (userExists) {
      toast.error("Email already exists");
      return;
    }

    users.push(formdata);

    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registration Successful");

    setFormdata({
      fullname: "",
      email: "",
      phone: "",
      password: "",
    });

    navigate("/login");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Decorative Glow */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/20 blur-3xl"></div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* ================= LEFT SIDE ================= */}

        <div className="hidden w-[55%] flex-col justify-center px-12 lg:flex">
          <div className="flex items-center gap-4">
            <FaFilm className="text-5xl text-orange-500" />

            <h1 className="text-5xl font-extrabold text-white">
              Movie<span className="text-orange-500">Verse</span>
            </h1>
          </div>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Unlimited
            <span className="text-yellow-400"> Movies</span>
            <br />
            Endless
            <span className="text-green-500"> Entertainment</span>
          </h2>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-300">
            Join MovieVerse and explore blockbuster movies, trending TV shows,
            trailers and create your own personal watchlist.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span className="text-white">HD Movie Posters</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPlay className="text-orange-500 text-xl" />
              <span className="text-white">Latest Movie Trailers</span>
            </div>

            <div className="flex items-center gap-4">
              <FaHeart className="text-red-500 text-xl" />
              <span className="text-white">Create Your Watchlist</span>
            </div>

            <div className="flex items-center gap-4">
              <FaStar className="text-yellow-400 text-xl" />
              <span className="text-white">Top IMDb Rated Movies</span>
            </div>
          </div>

          {/* Statistics */}

          <div className="mt-10 grid grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-lg">
              <h2 className="text-4xl font-bold text-orange-500">10K+</h2>
              <p className="mt-2 text-gray-300">Movies</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-lg">
              <h2 className="text-4xl font-bold text-yellow-400">500+</h2>
              <p className="mt-2 text-gray-300">TV Shows</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur-lg">
              <h2 className="text-4xl font-bold text-green-500">1M+</h2>
              <p className="mt-2 text-gray-300">Users</p>
            </div>
          </div>

          <button className="mt-8 w-56 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 py-3 font-bold text-white shadow-lg transition hover:scale-105">
            🎬 Explore Movies
          </button>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex w-full items-center justify-center px-6 py-10 lg:w-[45%] mt-15">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            {/* Logo */}

            <div className="flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 p-5 shadow-lg">
                <FaUserPlus className="text-3xl text-white" />
              </div>
            </div>

            <h2 className="mt-6 text-center text-3xl font-bold text-white">
              Create Account
            </h2>

            <p className="mt-2 text-center text-gray-300">
              Start your movie journey today.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Full Name */}

              <div>
                <label className="mb-2 block font-medium text-white">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4 transition-all duration-300 focus-within:border-orange-500">
                  <FaUser className="text-orange-400" />

                  <input
                    type="text"
                    name="fullname"
                    value={formdata.fullname}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block font-medium text-white">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4 transition-all duration-300 focus-within:border-yellow-400">
                  <FaEnvelope className="text-yellow-400" />

                  <input
                    type="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block font-medium text-white">
                  Mobile Number
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4 transition-all duration-300 focus-within:border-green-500">
                  <FaPhone className="text-green-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={formdata.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <label className="mb-2 block font-medium text-white">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/10 px-4 transition-all duration-300 focus-within:border-orange-500">
                  <FaLock className="text-orange-400" />

                  <input
                    type="password"
                    name="password"
                    value={formdata.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Register Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 py-3 font-semibold text-white transition duration-300 hover:scale-105"
              >
                <FaUserPlus />
                Register Now
              </button>
            </form>

            {/* Divider */}

            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-gray-600"></div>

              <span className="px-4 text-gray-400">OR</span>

              <div className="h-px flex-1 bg-gray-600"></div>
            </div>

            <p className="text-center text-gray-300">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="mt-3 block text-center font-semibold text-yellow-400 transition hover:text-orange-500"
            >
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
