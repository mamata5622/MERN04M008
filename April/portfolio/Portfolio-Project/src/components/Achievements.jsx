import React from "react";
import {
  FaCertificate,
  FaBriefcase,
  FaAward,
  FaCalendarAlt,
} from "react-icons/fa";

function Achievements() {
  return (
    <section
      id="achievement"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />

      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-white">
            Achievements & <span className="text-sky-500">Experience</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Certifications, internships and milestones throughout my learning
            journey.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Internship */}

          <div className="bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)] transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl text-white">
                <FaBriefcase />
              </div>

              <h2 className="text-3xl font-bold text-white">Internship</h2>
            </div>

            <div className="border-l-4 border-sky-500 pl-5">
              <h3 className="text-2xl font-semibold text-white">
                C-DAC, Noida
              </h3>

              <p className="text-sky-400 mt-2">
                Under Ministry of Electronics & IT, Government of India
              </p>

              <div className="flex items-center text-gray-400 mt-5">
                <FaCalendarAlt className="mr-3 text-sky-500" />
                Ethical Hacking & Penetration Testing
              </div>

              <div className="flex items-center text-gray-400 mt-3">
                <FaAward className="mr-3 text-sky-500" />
                Cyber Gyan Project
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
