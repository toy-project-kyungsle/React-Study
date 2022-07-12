import React, { useState } from "react";
import "./event_style.css";

function Intro(props) {

  return (
    <>
      <div className="title">
        <div className="title_1">
          <h1>친바 신청하기</h1>
        </div>
        <div className="title_2">
          <button className="create_button" onClick={() =>props.setPage(props.page ? false : true)}>
            소모임 생성
          </button>
        </div>
      </div>
    </>
  );
}

export default Intro;
