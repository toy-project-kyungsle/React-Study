import React from "react";
import Button from "./button";
import "./event_style.css";

function Create() {
  return (
    <>
        <div className="create">
          <div className="create_title">
            <div>친바 제목</div>
            <textarea placeholder="친바 제목 입력" className="text"></textarea>
          </div>
          <div className="create_intro">
            <div>친바 설명</div>
            <textarea placeholder="친바 설명 입력"></textarea>
          </div>
          <Button />
        </div>
    </>
  );
}

export default Create;
