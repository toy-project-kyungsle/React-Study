import React from "react";
import "./event_style.css";

function Button() {
  const onClick = () => {
    alert("신청되었습니다.");
  };

  return (
    <>
      <div className="button">
        <div></div>
        <button onClick={onClick}  className="button_style">친바 생성</button>
      </div>
    </>
  );
}

export default Button;
