import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import AdminContacts from "./components/AdminContacts";
import UserDashboard from "./components/UserDashboard";
import UserProfile from "./components/UserProfile";
import UserContact from "./UserContact";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin">
          <Route path="profile" element={<Profile />}></Route>
          <Route path="admin-contacts" element={<AdminContacts />}></Route>
        </Route>
        <Route path="/user" element={<UserDashboard />}>
        <Route index element={<UserProfile/>} ></Route>
        <Route path="user-contact" element={<UserContact/>}></Route>
        <Route path="user-details/:id" element={<UserDetails/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
