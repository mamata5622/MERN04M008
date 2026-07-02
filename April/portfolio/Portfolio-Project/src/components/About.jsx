import React from "react";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#020617] text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px]" />

      <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-sky-600/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            About <span className="text-sky-500">Me</span>
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Get to know more about me and my journey.
          </p>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center">
          {/* Left Card */}

          <div
            className="
              bg-white/5
              backdrop-blur-lg
              border
              border-sky-700/40
              rounded-2xl
              p-10
              transition-all
              duration-500
              hover:border-sky-400
              hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]
            "
          >
            <h2 className="text-3xl font-bold">
              Hello, I'm
              <span className="text-sky-500"> Behera Mamata Harihar</span>
            </h2>

            <p className="text-gray-400 leading-9 mt-8 text-lg">
              I am a recent MCA graduate and aspiring Full Stack Developer with
              a strong foundation in the MERN Stack. I enjoy building modern,
              responsive, and scalable web applications using React.js, Node.js,
              Express.js, and MongoDB. Passionate about clean code and
              continuous learning, I am eager to apply my skills to real-world
              projects and grow as a software developer.
            </p>

            <p className="text-gray-400 leading-9 mt-6 text-lg">
              I enjoy building responsive, scalable and user-friendly web
              applications with modern technologies like React, Node.js,
              Express.js and MongoDB. I am always eager to learn new
              technologies and improve my development skills.
            </p>
          </div>

          {/* Right Grid */}

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] duration-300">
              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl">
                <FaUserGraduate />
              </div>

              <h3 className="text-2xl font-bold mt-6">Education</h3>

              <p className="text-gray-400 mt-4 leading-7">
                MCA Student passionate about software development and problem
                solving.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] duration-300">
              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl">
                <FaLaptopCode />
              </div>

              <h3 className="text-2xl font-bold mt-6">Development</h3>

              <p className="text-gray-400 mt-4 leading-7">
                Building full-stack applications using the MERN Stack and
                RESTful APIs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] duration-300">
              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl">
                <FaLightbulb />
              </div>

              <h3 className="text-2xl font-bold mt-6">Learning</h3>

              <p className="text-gray-400 mt-4 leading-7">
                Continuously learning modern frameworks, tools and best
                practices in web development.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-sky-700/40 rounded-2xl p-8 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] duration-300">
              <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-3xl">
                <FaRocket />
              </div>

              <h3 className="text-2xl font-bold mt-6">Career Goal</h3>

              <p className="text-gray-400 mt-4 leading-7">
                Seeking opportunities as a MERN Stack Developer to contribute to
                innovative software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
