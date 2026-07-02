import React from "react";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />

      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <h1 className="text-5xl font-bold text-white">
            Contact <span className="text-sky-500">Me</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Feel free to connect with me for opportunities, collaborations,
            or just to say hello.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}

          <a
            href="mailto:mbehera5622@gmail.com"
            className="group bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)] transition-all duration-500"
          >

            <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl text-white mb-6">

              <FaEnvelope />

            </div>

            <h2 className="text-2xl font-bold text-white">
              Email
            </h2>

            <p className="text-gray-400 mt-4 break-all">
              mbehera5622
              <br />
              @gmail.com
            </p>

            <div className="flex items-center mt-8 text-sky-400 group-hover:text-white">

              Connect

              <FaArrowRight className="ml-3" />

            </div>

          </a>

          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/beheramamata01"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)] transition-all duration-500"
          >

            <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl text-white mb-6">

              <FaLinkedinIn />

            </div>

            <h2 className="text-2xl font-bold text-white">
              LinkedIn
            </h2>

            <p className="text-gray-400 mt-4">
              linkedin.com/in/
              <br />
              beheramamata01
            </p>

            <div className="flex items-center mt-8 text-sky-400 group-hover:text-white">

              Visit Profile

              <FaArrowRight className="ml-3" />

            </div>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)] transition-all duration-500"
          >

            <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl text-white mb-6">

              <FaGithub />

            </div>

            <h2 className="text-2xl font-bold text-white">
              GitHub
            </h2>

            <p className="text-gray-400 mt-4">
              github.com/
              <br />
              yourusername
            </p>

            <div className="flex items-center mt-8 text-sky-400 group-hover:text-white">

              View Projects

              <FaArrowRight className="ml-3" />

            </div>

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;