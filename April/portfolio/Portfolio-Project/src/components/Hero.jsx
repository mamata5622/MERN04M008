import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020617] flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/10 rounded-full blur-[160px]" />

      {/* Content */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[6px] text-sky-400 font-semibold mt-20">
          Welcome To My Portfolio
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
          Behera
          <br />
          <span className="text-sky-500">
            Mamata Harihar
          </span>
        </h1>

        <h2 className="mt-8 text-2xl md:text-3xl text-gray-300 font-semibold">
          Full Stack Developer
        </h2>

        <p className="mt-8 text-gray-400 text-lg leading-9 max-w-3xl mx-auto">
          Passionate about building responsive, scalable and modern web
          applications. I enjoy transforming ideas into elegant digital
          experiences with clean code, intuitive user interfaces and
          continuously learning new technologies.
        </p>

        {/* Buttons */}

        

        {/* Social Icons */}

        <div className="flex justify-center gap-5 mt-12">

          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/5 border border-sky-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/5 border border-sky-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/5 border border-sky-700 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;