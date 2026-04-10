import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Userdetails from "./components/Userdetails";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>

        {/* Nested Routes */}

        <Route path="/users" element={<Users />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="settings" element={<Settings />}></Route>
          <Route path="user-details/:id" element={<Userdetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
