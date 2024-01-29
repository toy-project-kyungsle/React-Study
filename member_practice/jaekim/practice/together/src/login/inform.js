import React from "react";
import Button from "./button";
import "./login_style.css";

function Inform() {
  const onSubmit = () => {
    alert("I'm submitted");
  };

  return (
    <>
      <form className="information" onSubmit={onSubmit}>
        <div className="input_id">
          <div>아이디</div>
          <input className="input_id_style"></input>
        </div>
        <div className="input_password">
          <div>비밀번호</div>
          <input className="input_pd_style"></input>
        </div>
        <Button />
      </form>
    </>
  );
}

export default Inform;
