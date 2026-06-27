import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTicketAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="hidden lg:flex relative flex-col justify-between p-10 text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#5C4033]/80 to-[#3A2D28]/95"></div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <FaMapMarkerAlt className="text-2xl" />
              </div>

              <h1 className="text-5xl font-extrabold">
                Plan<span className="text-[#EADBC8]">Go</span>
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold leading-tight">
              Welcome Back!
              <br />
              Let's Plan Something Amazing.
            </h2>

            <p className="mt-6 text-lg text-gray-200 max-w-md">
              Manage events, track bookings, and connect with
              attendees effortlessly through PlanGo.
            </p>
          </div>

          {/* Features */}
          <div className="relative z-10 space-y-4">
            {[
              {
                icon: <FaCalendarAlt />,
                text: "Discover Events",
              },
              {
                icon: <FaTicketAlt />,
                text: "Manage Bookings",
              },
              {
                icon: <FaShieldAlt />,
                text: "Secure Access",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4"
              >
                <div className="text-2xl">{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <p className="relative z-10 italic text-lg">
            "Every successful event starts with a great plan."
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">


          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#5C4033]">
              Sign In
            </h2>

            <p className="mt-2 text-[#B0926A]">
              Access your PlanGo account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-5 text-[#B0926A]" />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-[#EADBC8] rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#B0926A] outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-5 text-[#B0926A]" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-[#EADBC8] rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-[#B0926A] outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-5 text-[#B0926A]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-[#5C4033]">
                <input type="checkbox" />
                Remember Me
              </label>

              <a
                href="/forgot-password"
                className="text-[#B0926A] hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              className="w-full py-4 rounded-2xl bg-[#5C4033]
              text-white font-semibold hover:bg-[#3A2D28]
              transition-all duration-300"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-[1px] bg-[#EADBC8]"></div>
              <span className="text-gray-500 text-sm">
                OR
              </span>
              <div className="flex-1 h-[1px] bg-[#EADBC8]"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border border-[#EADBC8]
              py-4 rounded-2xl flex items-center justify-center
              gap-3 hover:bg-[#FAF7F0]"
            >
              <FcGoogle size={22} />
              Continue with Google
            </button>

            {/* Register Link */}
            <p className="text-center text-[#5C4033]">
              Don't have an account?
              <a
                href="/register"
                className="ml-2 text-[#B0926A] font-semibold"
              >
                Register
              </a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}