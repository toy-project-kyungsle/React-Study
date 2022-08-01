import React from 'react';
import './router1.css';
import img from './header_image.png';
import Navi1 from './Navi1';
import { useState, useEffect } from 'react';
import Modal from './Modal.js';

function Header() {
  const [ismodalOpen, SetModalOpen] = useState(false);

  const openModal = () => {
    SetModalOpen(true);
  };

  const closeModal = () => {
    SetModalOpen(false);
  };

  return (
    <>
      <div class="header">
        <img src={img}></img>
        <p>Together 42</p>
      </div>
      <div class="nav">
        <div class="buttondiv">
          <button onClick={openModal}>A</button>
        </div>
        <Modal open={ismodalOpen} close={closeModal}>
          i'm modal
        </Modal>
        <div class="buttondiv">
          <Navi1></Navi1>
        </div>
      </div>
    </>
  );
}

export default Header;
