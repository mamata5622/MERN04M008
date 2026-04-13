import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Protectedroute from "./components/Protectedroute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/dash"
          element={
            <Protectedroute>
              <Dashboard />
            </Protectedroute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
