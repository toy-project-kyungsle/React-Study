import React from "react";
import "../css/main/event.css";

function CreateEvent() {
    return (
        <div className="event">
            <div className="event--wapper">
                <p className="event--inputTitle">찬바 제목</p>
                <input className="event--input"></input>
            </div>
            <div className="event--wapper">
                <p className="event--textareaTitle">찬바 설명</p>
                <textarea className="event--textarea"></textarea>
            </div>
            <div className="event--btnWapper">
                <button className="event--button">찬바 신청</button>
            </div>
        </div>
                    
    );
}

export default CreateEvent;