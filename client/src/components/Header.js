import React from "react";
import "./css/header.css";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>SHMOVIES</h1>
      </div>
      <div className="categories-list">
        <label for="categories">Categories: </label>
        <select name="categories" id="categories">
          <option value="action">Action & Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="children">Children</option>
          <option value="musical">Musical</option>
          <option value="scifi">SciFi</option>
          <option value="horror">Horror</option>
          <option value="sports">Sports</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
