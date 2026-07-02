import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
  FaRegCopyright,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#020617] overflow-hidden border-t border-sky-900/30">

      {/* Background Glow */}

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-700/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        {/* Top */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Behera
              <span className="text-sky-500"> Mamata Harihar</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8 max-w-lg">
              Passionate Full Stack Developer focused on building modern,
              responsive and scalable web applications with clean code and
              engaging user experiences.
            </p>

          </div>

          {/* Right */}

          <div className="flex flex-col items-start md:items-end">

            <h3 className="text-white text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-sky-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/beheramamata01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-sky-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:mbehera5622@gmail.com"
                className="w-12 h-12 rounded-full bg-white/5 border border-sky-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

            <a
              href="#home"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 transition-all duration-300 text-white font-medium"
            >
              <FaArrowUp />
              Back to Top
            </a>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-sky-900/30 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">

          <div className="flex items-center gap-2">

            <FaRegCopyright />

            <span>
              2026 Behera Mamata Harihar. All Rights Reserved.
            </span>

          </div>

          <p className="text-gray-500">
            Built with React.js & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;