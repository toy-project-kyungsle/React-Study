import React from "react";
import "../css/main/createEvent.css";

function CreateEvent() {
    return (
        <div className="main--eventInfo">
            <div className="main--eventWapper">
                <p className="main--inputTitle">찬바 제목</p>
                <input className="main--input"></input>
            </div>
            <div className="main--eventWapper">
                <p className="main--textareaTitle">찬바 설명</p>
                <textarea className="main--textarea"></textarea>
            </div>
            <div className="main--btnWapper">
                <button className="main--button">찬바 신청</button>
            </div>
        </div>
                    
    );
}

export default CreateEvent;