import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./components/Login";
function App() {
  // const [islogin, setIsLogin] = useState(false);

  // if (islogin)
  //   return (
  //     <div>
  //       <h1>Hello</h1>
  //       <Logout />
  //     </div>
  //   );
  // else
  //   return (
  //     <div>
  //       <Login />
  //       <button onClick={() => setIsLogin(true)}>Logout</button>
  //     </div>
  //   );
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route
          path="/dash"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
