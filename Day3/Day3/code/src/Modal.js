import React from 'react';
import './router1.css';

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? 'openmodal' : null}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
