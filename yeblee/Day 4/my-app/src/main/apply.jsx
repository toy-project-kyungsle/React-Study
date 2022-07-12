import React, { useState } from "react";
import CreateEvent from "./createEvent";
import EventInfo from "./eventInfo";
import MainList from "./mainList";
import "../css/main/main.css";

function Apply({globalState, setGlobalState}) {
    const [clickEvent, setClickEvent] = useState(false);
    
    const onClick = () => {
        setClickEvent((clickEvent) => !clickEvent);
    };

    return (
        <div className="main">
            <p className="main--title">찬바 신청하기</p>
            <div className="main--wrapper">
                <div className="main--create">
                        <span onClick={onClick}>이벤트 생성</span>
                </div>
                <MainList globalState={globalState} setGlobalState={setGlobalState}/>
                {clickEvent ? <CreateEvent /> : <EventInfo />}
            </div>
        </div>
    );
}

export default Apply;