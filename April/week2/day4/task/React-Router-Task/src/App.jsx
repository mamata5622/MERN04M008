import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/user-form" element={<UserForm/>}></Route>
        <Route path="/user/:id" element={<UserDetails/>}></Route>
      </Routes>
    </>
  );
}

export default App;
