import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./event_style.css";

const Nav = () => {
  const navigate = useNavigate();
  const [goHome, setGoHome] = useState(false);

  useEffect(() => {
      if (goHome) {
        alert("/B 로 이동합니다!")
        navigate("/B");
        navigate("/event");
      }
    }, [goHome, navigate]
  )

  const clickGoHome = () => {
    setGoHome((prev) => !prev);
  }
  
  return (
    <>
        <div className="nav">
          <div className="nav_box">
            <span className="nav_button">A</span>
          </div>
          <div className="nav_box" onClick={clickGoHome}>
            <span className="nav_button">B - goHome</span>
          </div>
        </div>
    </>
  );
}

export default Nav;
