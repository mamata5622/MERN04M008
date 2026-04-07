import React, { useEffect, useState } from "react";

function Input() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit =()=> {
    console.log("FullName:",fullname);
    console.log("Email:",email)
    setFullName("")
    setEmail("")
    localStorage.setItem("user", JSON.stringify({ fullname, email }));
  }
  useEffect(()=>{
    console.log({fullname,email})
  },[fullname,email])

  return (
    <>
      <h1>User Data</h1>
      <div>
        <div>
          <label htmlFor="">FullName : </label>
          <input
            type="text"
            value={fullname}
            placeholder="Enter Fullname"
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />

          <label htmlFor="">Email : </label>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      
    </>
  );
}

export default Input;
