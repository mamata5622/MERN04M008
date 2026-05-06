import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [existdata, setExistdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setExistdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existingLocaldata = JSON.parse(localStorage.getItem("users"));
    console.log(existingLocaldata);

    const userBasedOnEmail = existingLocaldata.find(
      (user) => user.email === existdata.email,
    );
    if (userBasedOnEmail) {
      if (userBasedOnEmail.password === existdata.password) {
        localStorage.setItem("loginUser",JSON.stringify(userBasedOnEmail))
        localStorage.setItem("isLogin",true)
        navigate("/profile")
      } else {
        toast.success("login successful")
      }
    } else {
      toast.error("Invalid email")
    }
    setExistdata({
      email:"",
      password:""
    })
  };
  return (
    <div className="w-full absolute flex justify-center">
      <img
        src="https://getwallpapers.com/wallpaper/full/6/2/e/1267879-movie-poster-wallpaper-1920x1080-for-hd.jpg"
        alt=""
        className="absolute"
      />
      <div className="absolute mt-40 lg:mt-60 lg:text-[20px] bg-black/40 p-2 rounded-md text-white">
        <div>
          <h1 className="text-center font-bold text-3xl border-b-3 border-gray-700 text-shadow-2xs">
            Login Here!
          </h1>

          <label htmlFor="">Email : </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-10"
            name="email"
            value={existdata.email}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="">password : </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1"
            name="password"
            value={existdata.password}
            onChange={handleChange}
          />

          <br />
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className=" pt-1 pb-1 rounded bg-white/50 font-bold text-black mt-3 pl-20 pr-20 "
            >
              Login
            </button>
          </div>
          <p className="text-center font-medium text-yellow-600">
            Sign In Here
          </p>
          <p className="text-yellow-600 text-center font-mono mt-3 mb-3">
            Don't have an account ?{" "}
            <Link to="/register" className="text-black">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
  