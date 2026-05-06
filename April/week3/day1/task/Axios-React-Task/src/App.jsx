import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  async function getAll() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      alert("failed to fetch users. Please try again later.");
    }
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <h1 className="text-blue-800 font-bold">Hello</h1>

      <ul className="grid grid-cols-3 gap-1 m-10">
        {users?.map((user) => (
          <li
            key={user.id}
            className="p-3 bg-blue-300 shadow-xl text-red-900 rounded-md"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
