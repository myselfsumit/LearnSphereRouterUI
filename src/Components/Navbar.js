import React, { lazy } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="logo" width={180} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>

      {/* Login/Logout/Signup/Signin */}

      <div className="flex ml-5 mr-3 gap-3">
        {
          !isLoggedIn &&  
          <Link to="/login">
            <button>Login</button>
          </Link>
        }
        {
            !isLoggedIn &&
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        }
        {
            isLoggedIn &&
          <Link to="/">
            <button>Logout</button>
          </Link>
        }
        {
            isLoggedIn &&
          <Link to="/dashboard">
            <button>DashBoard</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
