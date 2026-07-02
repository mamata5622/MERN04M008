import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        formData,
      );

      if (res.data.success) {
        toast.success(res.data.message);

        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
        });

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div
          className="relative hidden lg:flex flex-col justify-between p-10 text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5C4033]/80 to-[#3A2D28]/90"></div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <FaMapMarkerAlt className="text-2xl" />
              </div>

              <h1 className="text-5xl font-extrabold">
                Plan<span className="text-[#EADBC8]">Go</span>
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Plan Events.
              <br />
              Create Memories.
            </h2>

            <p className="text-lg text-gray-200 max-w-md">
              Discover, organize and manage events effortlessly. Whether it's a
              conference, wedding, concert or meetup, PlanGo helps you bring
              people together.
            </p>
          </div>

          {/* Features */}
          <div className="relative z-10 space-y-4">
            {[
              {
                icon: <FaCalendarAlt />,
                text: "Discover Amazing Events",
              },
              {
                icon: <FaUsers />,
                text: "Organize with Ease",
              },
              {
                icon: <FaTicketAlt />,
                text: "Book & Manage Tickets",
              },
              {
                icon: <FaShieldAlt />,
                text: "Secure & Reliable",
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

          {/* Quote */}
          <div className="relative z-10 mt-10">
            <p className="italic text-lg">
              "Great events don't just happen, they are planned with passion."
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-6 md:p-10 lg:p-14">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#5C4033]">
              Create Your Account
            </h2>

            <p className="text-[#B0926A] mt-3">
              Join PlanGo and start your event journey today
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleRegister}>
            {" "}
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-[#B0926A]" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-12 py-4 border border-[#EADBC8] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B0926A]"
              />
            </div>
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-[#B0926A]" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-12 py-4 border border-[#EADBC8] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B0926A]"
              />
            </div>
            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-4 top-4 text-[#B0926A]" />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full pl-12 py-4 border border-[#EADBC8] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B0926A]"
              />
            </div>
            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-[#B0926A]" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-12 py-4 border border-[#EADBC8] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B0926A]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-[#B0926A]"
              >
                👁
              </button>
            </div>
            {/* Role */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full py-4 px-4 border border-[#EADBC8] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B0926A]"
            >
              <option value="user">User</option>
              <option value="organizer">Organizer</option>
              <option value="admin">Administrator</option>
            </select>
            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5C4033] hover:bg-[#3A2D28]
              text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02]disabled:opacity-60"
            >
              {loading ? "Registering..." : "Register"}
            </button>
            <p className="text-center text-[#5C4033]">
              Already have an account?
              <a href="/login" className="ml-2 font-semibold text-[#B0926A]">
                Login
              </a>
            </p>
          </form>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-center">
            <div>
              <FaShieldAlt className="mx-auto text-2xl text-[#B0926A]" />
              <p className="text-sm mt-2">Secure</p>
            </div>

            <div>
              <FaCalendarAlt className="mx-auto text-2xl text-[#B0926A]" />
              <p className="text-sm mt-2">Save Time</p>
            </div>

            <div>
              <FaUsers className="mx-auto text-2xl text-[#B0926A]" />
              <p className="text-sm mt-2">Trusted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
