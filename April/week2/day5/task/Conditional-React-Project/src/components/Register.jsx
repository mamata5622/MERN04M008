import React, { useState } from "react";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formdata);

    localStorage.setItem("users", JSON.stringify(formdata));
    navigate("/login")
  }
  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <label htmlFor="">Name : </label>
        <input
        className="border rounded-md border-purple-500"
          type="text"
          placeholder="enter name"
          value={formdata.name}
          name="name"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="">Email : </label>
        <input
        className="border rounded-md border-purple-500 mt-3"
          type="email"
          placeholder="enter email"
          value={formdata.email}
          name="email"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="">Password : </label>
        <input
        className="border rounded-md border-purple-500 mt-3"
          type="password"
          placeholder="enter password"
          value={formdata.password}
          name="password"
          onChange={handleChange}
        />
        <br />

        <button onClick={handleSubmit} className="bg-purple-500 mt-3 text-white p-2 rounded-md">Submit</button>
      </div>
    </div>
  );
}

export default Register;
