import React from "react";
import logo from '../logo.png';
import "./movie_style.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_image">
          <img src={logo} alt= "Logo"/>
        </div>
      </div>
    </>
  );
}

export default Header;
