import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn , setisLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />

      <Routes>
        <Route path="/" elements={<Home/>} />
        <Route path="/login" elements={<Login/>} />
        <Route path="/signup" elements={<Signup/>} />
        <Route path="/dashboard" elements={<Dashboard/>} />
      </Routes>

    </div>
            
  );
}

export default App;
