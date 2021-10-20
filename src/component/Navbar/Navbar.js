import React from "react";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <div className="nav">
        <div className="nav-logo">
          <img src="assets/Icon.png" alt="dewe tour" />
        </div>
        <div className={`nav-title `}>
          {isLoggedIn ? (
            <img src="assets/elips.png"></img>
          ) : (
            <ul>
              <li>
                <a onClick={loginHandler} className="btn-one" href="#">
                  Login
                </a>
              </li>
              <li>
                <a className="btn-two" href="#services">
                  Register
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
