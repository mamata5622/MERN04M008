import React, { useState } from "react";

function UserForm() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
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

    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(formdata);
    users.push(formdata);

    localStorage.setItem("users", JSON.stringify(users));

    alert("success data saved");

    setFormData({
      name: "",
      email: "",
      age: 0,
    });
  }
  return (
    <div>
      <h1>User Form</h1>
      <label htmlFor="">User Name : </label>
      <input
        type="text"
        placeholder="Enter Username"
        value={formdata.name}
        name="name"
        onChange={handleChange}
      />
      <br />

      <label htmlFor="">Email : </label>
      <input
        type="email"
        placeholder="Enter Email"
        value={formdata.email}
        name="email"
        onChange={handleChange}
      />
      <br />

      <label htmlFor="">Age : </label>
      <input
        type="number"
        placeholder="Enter Age"
        value={formdata.age}
        name="age"
        onChange={handleChange}
      />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserForm;
