import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");

  const Submit = () => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    localStorage.setItem("user",JSON.stringify({name,email}))
  };

  return (
    <>
      <div className="border m-20">
        <form action="" onSubmit={Submit}>
          <h1>Form</h1>


          <div className="">
            <label htmlFor="name">Name : </label>
            <input className="border rounded-md" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>


          <div>
            <label htmlFor="email">Email : </label>
            <input className="border rounded-md mt-3" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <button className="pl-2 pr-2 p-1 mt-10 mb-5 bg-green-500/20 text-white rounded-md" type="Submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
