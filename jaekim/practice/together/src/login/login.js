import React from "react";
import Intro from "./intro";
import Inform from "./inform";
import "./login_style.css";

export default function Login() {
  return (
    <>
      <div className="box">
        <div className="login">
          <Intro />
          <div className="input_box">
            <Inform />
          </div>
        </div>
      </div>
    </>
  );
}
