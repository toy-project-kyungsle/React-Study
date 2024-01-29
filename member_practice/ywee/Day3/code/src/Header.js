import React from 'react';
import './router1.css';
import img from './header_image.png';
import Navi1 from './Navi1';

function Header() {
  return (
    <>
      <div class="header">
        <img src={img}></img>
        <p>Together 42</p>
      </div>
      <div class="nav">
        <div class="buttondiv">
          <p>A</p>
        </div>
        <div class="buttondiv">
          <Navi1></Navi1>
        </div>
      </div>
    </>
  );
}

export default Header;
