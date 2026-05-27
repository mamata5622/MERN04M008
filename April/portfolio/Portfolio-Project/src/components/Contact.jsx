import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

function Contact() {
  return (
    <div className="text-white text-center mt-20">
      <h2 className="text-[40px] font-bold text-sky-800">Contact Me</h2>
      <p
        className="text-gray-500 text-[18px]
      "
      >
        Get In Touch
      </p>
      <div className="lg:ml-50 lg:mr-50 mt-15 ml-12 mr-12">
        <div className="flex border items-center p-5 rounded-xl">
          <div className="text-[35px] ">
            <IoMdMail />
          </div>
          <div className="text-justify ml-5">
            <h1 className="text-[20px] font-bold">Email</h1>
            <p className="text-gray-500 cursor-pointer">mbehera5622@gmail.com</p>
          </div>
          <div></div>
        </div>
        <div className="flex border items-center p-5 rounded-xl mt-10 mb-10">
          <div className="text-[35px] ">
            <IoLogoLinkedin />
          </div>
          <div className="text-justify ml-5 ">
            <h1 className="text-[20px] font-bold">LinkedIn</h1>
            <p className="text-gray-500 cursor-pointer">in/beheramamata01</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
