import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";

function Home() {
  const aboutRef = useRef(null);
  return (
    <>
      <div className="">
        <img
          src="https://img.freepik.com/premium-vector/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5572.jpg"
          alt=""
          className="w-full fixed z-10 sm:h-full overflow-auto"
        />
        <div className="absolute z-15 mt-70 lg:mt-70  ">
          <div className="ml-50 mr-50">
            <h1 className="text-[20px] lg:text-[30px] font-medium text-white">
              Hello, My name is <br />
              <span className="text-[30px] font-bold lg:text-[50px]">
                Behera Mamata Harihar
              </span>
            </h1>
            <p className="text-[25px] font-semibold lg:text-[35px]">
              And I'm a{" "}
              <span className="text-pink-800 animate-typewriter">
                Front-end Developer.
              </span>
            </p>
            <div className="mt-10 text-white font-medium ">
              <button className="bg-pink-900/50 rounded-xl p-3 hover:scale-120 hover:cursor-pointer ml-5 transition duration-1000">
                Check Resume
              </button>
            </div>
          </div>
          <div className="bg-white">
            <div className=" text-center mt-18">
              <h1 className="text-[40px] font-medium">About me</h1>
            </div>
            <div className="lg:flex p-2 lg:mt-20 ml-50 mr-50">
              <div className="lg:w-1/2 flex mb-20">
                <img src="\src\assets\mamta.jpeg" alt="" className="w-70 " />
              </div>
              <div className="lg:w-1/2">
                <h1 className="text-[30px]">
                  I'm Behera Mamata Harihar and a Front-end Developer
                </h1>
                <p className="text-[20px] mt-5">
                  A mind with creativity and detail-oriented individual with a
                  passion for simplifying complex code into clean, modular
                  components. Skilled in breaking down problems into manageable
                  solutions, with a strong eagerness to learn and adapt to new
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-purple-900 text-white">
            <h1 className="text-center text-[40px] font-medium ">Tech Stack</h1>
            <p className="text-[20px] text-center mt-5">
              Here some skills are i learned till now.
            </p>
            {/* skills container */}
            <div className="m-20 lg:ml-40 lg:mr-40 p-5 grid grid-cols-4  gap-10 rounded-md font-medium ">
              {/* html block */}
              <div className=" items-center">
                <div className="flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png?_=20170517184425"
                    alt=""
                    className="w-30"
                  />
                </div>
              </div>
              {/* css block */}
              <div className="items-center">
                <div className="flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png"
                    alt=""
                    className="h-30"
                  />
                </div>
              </div>
              {/* js block */}
              <div className="items-center">
                <div className="flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt=""
                    className="w-30 "
                  />
                </div>
              </div>
              {/* mysql block */}
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png"
                    alt=""
                    className="w-30"
                  />
                </div>
              </div>
              {/* oracle block */}
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s"
                    alt=""
                    className="w-30"
                  />
                </div>
              </div>
              {/* tailwind block */}
              <div className="">
                <div className="flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png"
                    alt=""
                    className="w-30"
                  />
                </div>
              </div>
              {/* github block */}
              <div>
                <div className="flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png" alt="" className="w-30"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
