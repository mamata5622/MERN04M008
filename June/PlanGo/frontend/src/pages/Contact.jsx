import { useState } from "react";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.VITE_BASED_URL}/create/contact`,
        formData,
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong.");
    }
  };
  return (
    <div className="bg-[#F8F4EF] text-[#4B352A]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}

          <div>
            <span className="bg-[#DCC5B2] text-[#6F4E37] px-5 py-2 rounded-full font-semibold">
              ☕ Contact Us
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
              Let's Build
              <span className="block text-[#6F4E37]">Amazing Events</span>
              Together
            </h1>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              We'd love to hear from you. Whether you are planning an event,
              organizing one or just have a question, our team is always ready
              to help.
            </p>
          </div>

          {/* Right */}

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#DCC5B2] to-[#6F4E37] shadow-2xl"></div>

              <div className="absolute inset-0 flex justify-center items-center text-8xl">
                ✉️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Card */}

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E5D6CA]">
            <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>

            <p className="text-gray-600 mb-8">
              Reach us through any of these channels.
            </p>

            <div className="space-y-6">
              <Info
                icon={<FaEnvelope />}
                title="Email"
                value="plango@gmail.com"
              />

              <Info
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+91 9876543210"
              />

              <Info
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Bhubaneswar, Odisha"
              />

              <Info
                icon={<FaClock />}
                title="Working Hours"
                value="Mon - Sat | 9 AM - 6 PM"
              />
            </div>
          </div>

          {/* Form */}

          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-[#E5D6CA]">
            <h2 className="text-3xl font-bold mb-8">Send Us A Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  icon={<FaUser />}
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Input
                  icon={<MdEmail />}
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-[#DCC5B2] rounded-xl px-5 py-4 outline-none focus:border-[#6F4E37]"
              />

              <textarea
                rows="7"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-[#DCC5B2] rounded-xl px-5 py-4 outline-none resize-none focus:border-[#6F4E37]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#6F4E37] hover:bg-[#4B352A] text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className="bg-[#EFE6DD] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-3 gap-8">
          <Feature
            emoji="🤝"
            title="Friendly Support"
            text="Our team is always here for you."
          />

          <Feature
            emoji="⚡"
            title="Fast Response"
            text="Average response within 24 hours."
          />

          <Feature
            emoji="❤️"
            title="Trusted Service"
            text="Thousands of successful events."
          />
        </div>
      </section>
    </div>
  );
};

const Info = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-14 h-14 rounded-full bg-[#6F4E37] text-white flex items-center justify-center text-xl">
      {icon}
    </div>

    <div>
      <h4 className="font-semibold">{title}</h4>

      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const Input = ({
  icon,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <div className="flex items-center border border-[#DCC5B2] rounded-xl px-4 py-4">
    <div className="text-[#6F4E37] text-lg mr-3">
      {icon}
    </div>

    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full outline-none bg-transparent"
    />
  </div>
);

const Feature = ({ emoji, title, text }) => (
  <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition duration-300">
    <div className="text-5xl mb-5">{emoji}</div>

    <h3 className="text-2xl font-bold mb-2">{title}</h3>

    <p className="text-gray-600">{text}</p>
  </div>
);

export default Contact;
