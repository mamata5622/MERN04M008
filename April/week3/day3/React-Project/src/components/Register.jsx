import React, { useState } from "react";
import { Link } from "react-router";

function Register() {
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = function (e) {
    const { value, name } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingLocalStUser = JSON.parse(localStorage.getItem("users")) || [];

    existingLocalStUser.push(formdata);

    localStorage.setItem("users", JSON.stringify(existingLocalStUser));

    toast.success("successfully user created");

    formdata({
      fullname: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <>
      <div className="text-[px] justify-center w-full flex">
        <img
          src="https://getwallpapers.com/wallpaper/full/6/2/e/1267879-movie-poster-wallpaper-1920x1080-for-hd.jpg"
          alt=""
          className="absolute"
        />
        <div className="absolute text-white mt-50 p-3 rounded-md bg-black/40 lg:text-[20px]">
          <div className="">
            <h1 className="text-[25px] font-semibold text-center border-b-2 border-b-amber-300 text-yellow-600 text-shadow-2xs">
              Register Here!!
            </h1>
            <label htmlFor="">FullName : </label>
            <input
              type="text"
              placeholder="enter your name"
              className=" mt-10"
              name="fullname"
              value={formdata.fullname}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="">Email : </label>
            <input
              type="email"
              placeholder="enter your email"
              className=" mt-3"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="">MobileNo : </label>
            <input
              type="number"
              placeholder="enter mobile number"
              className=" mt-3"
              name="phone"
              value={formdata.phone}
              onChange={handleChange}
            />
            <br />

            <label htmlFor="">Password : </label>
            <input
              type="password"
              placeholder="enter password"
              className=" mt-3"
              name="password"
              value={formdata.password}
              onChange={handleChange}
            />
            <br />
            <div className="flex justify-center">
              <button
                className="bg-white/70 p-2 rounded-sm mt-8 font-medium pl-20 pr-20 text-black"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
