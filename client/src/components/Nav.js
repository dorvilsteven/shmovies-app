import React from "react";
import "./css/nav.css";

function Nav() {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li className="logo nav-item">SHMOVIES</li>
        <li className="nav-item">Login</li>
        <li className="nav-item">About</li>
      </ul>
    </div>
  );
}

export default Nav;
