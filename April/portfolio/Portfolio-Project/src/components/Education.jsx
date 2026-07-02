import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      title: "Master of Computer Application (MCA)",
      college: "College of IT & Management Education (CIME), Bhubaneswar",
      year: "2024 - Present",
      icon: <FaGraduationCap />,
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      college: "College of Advance Computing (CAC), Berhampur",
      year: "2021 - 2024",
      icon: <FaUniversity />,
    },
    {
      title: "Higher Secondary (12th / GSEB)",
      college: "R.K Shah English Medium Higher Secondary School, Surat",
      year: "2021",
      icon: <FaBookOpen />,
    },
    {
      title: "Secondary (10th / GSEB)",
      college: "R.K Shah English Medium Higher Secondary School, Surat",
      year: "2019",
      icon: <FaSchool />,
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />

      <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            My <span className="text-sky-500">Education</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            My academic journey and continuous learning.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative max-w-6xl mx-auto mt-20">

          {/* Timeline Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full rounded-full bg-gradient-to-b from-sky-400 via-sky-500 to-sky-700" />

          {education.map((item, index) => (

            <div
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0
                  ? "lg:justify-start"
                  : "lg:justify-end"
              } justify-center`}
            >

              {/* Timeline Dot */}

              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20">

                <div className="w-6 h-6 rounded-full bg-sky-500 border-4 border-[#020617] shadow-[0_0_20px_rgba(14,165,233,0.7)]"></div>

              </div>

              {/* Card */}

              <div
                className={`w-full lg:w-[45%] bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-[0_0_35px_rgba(14,165,233,0.35)] ${
                  index % 2 === 0
                    ? "lg:mr-auto"
                    : "lg:ml-auto"
                }`}
              >

                <div className="flex gap-5">

                  <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl flex-shrink-0">

                    {item.icon}

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold text-white">

                      {item.title}

                    </h2>

                    <p className="mt-3 text-gray-400 leading-7">

                      {item.college}

                    </p>

                    <div className="flex items-center mt-5 text-sky-400 font-semibold">

                      <FaCalendarAlt className="mr-2" />

                      {item.year}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;