import React, { useEffect, useState } from "react";

function Input() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = () => {
    // console.log("FullName:", fullname);
    // console.log("Email:", email);
    localStorage.setItem("user", JSON.stringify({ fullname, email }));
    setIsShow(true);
    if (!isShow) {
      setFullName("");
      setEmail("");
    }
  };
  useEffect(() => {
    console.log({ fullname, email });
  }, [fullname, email]);

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

      {isShow && (
        <div>
          Name : {fullname}
          Email :{email}
        </div>
      )}
    </>
  );
}

export default Input;
