import React from "react";

function Skills() {
  return (
    <>
      <div className=" mt-30">
        <h1 className="text-center text-[40px] font-bold text-sky-800">
          Skills & Technologies
        </h1>
        <p className="text-[18px] text-center text-gray-500">
          Here some skills are i learned till now.
        </p>
        {/* skilles container */}
        <div className="text-white ml-12 mr-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:ml-50 lg:mr-50">
          <div className="mt-10">
            <p className="text-[20px] font-medium">Languages</p>
            <ul className="flex flex-wrap mt-5 gap-2 text-[15px]">
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black ">
                C
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                SQL
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                JavaScript
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <p className="text-[20px] font-medium">Frameworks</p>
            <ul className="flex flex-wrap mt-5 gap-2 text-[15px]">
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                Express.js
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                Node.js
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <p className="text-[20px] font-medium">Tools</p>
            <ul className="flex flex-wrap mt-5 gap-2 text-[15px]">
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                Git
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                GitHub
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                Tailwind CSS
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                React.js
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                Postman
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                MongoDB Compass
              </li>
              <li className="border rounded-full text-center p-2 cursor-pointer hover:scale-105 duration-700 hover:bg-sky-500 hover:text-black">
                MongoDB Shell
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
