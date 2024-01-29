import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./event_style.css";

const Nav = () => {
  const navigate = useNavigate();
  const [goMovie, setGoMovie] = useState(false);

  useEffect(() => {
      if (goMovie) {
        navigate("/movie");
      }
    }, [goMovie, navigate]
  )

  const clickGoMovie = () => {
    setGoMovie((prev) => !prev);
  }
  
  return (
    <>
        <div className="nav">
          <div className="nav_box">
            <span className="nav_button" onClick={clickGoMovie}>A</span>
          </div>
          <div className="nav_box">
            <span className="nav_button">B - goHome</span>
          </div>
        </div>
    </>
  );
}

export default Nav;
