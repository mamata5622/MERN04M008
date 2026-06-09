import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Project from "./Project";
import Achievements from "./Achievements";
import Contact from "./Contact";
import { FaRegCopyright } from "react-icons/fa";

function Home() {
  return (
    <>
      <div id="home" className="h-screen bg-black overflow-auto">
        <p className="text-white pt-50 text-center font-semibold text-[35px]">
          Hello, I'm
        </p>
        <h1 className="text-center text-[50px] font-extrabold text-sky-500">
          Behera Mamata Harihar
        </h1>
        <br />
        <p className="text-gray-500 text-center text-[18px]">
          A gurl with a creative mind, an eagerness to explore, build, and learn
          new things.
        </p>
        <div className="text-sky-500 mt-15 flex justify-center">
          <button className="border rounded-md hover:scale-105 duration-1000 hover:bg-sky-500/20 pl-10 pr-10 p-3 md:p-3">
            Get In Touch
          </button>
          <button></button>
        </div>
        <div></div>
        <div className="text-gray-500 mt-20">
          <p className="text-center">Scroll Down</p>

          <div className=" flex justify-center mt-5 text-[20px] animate-bounce">
            <FaAngleDoubleDown />
          </div>
        </div>
        <div id="about">
          <About />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="project">
          <Project />
        </div>

        <div id="achievement">
          <Achievements />
        </div>

        <div id="contact">
          <Contact />
        </div>

        <div className="h-10 border border-gray-800 flex items-center justify-center text-gray-500">
          <p className="">
            <FaRegCopyright />
          </p>
          <p className="ml-1">2026 Behera Mamata Harihar</p>
        </div>
      </div>
    </>
  );
}

export default Home;
