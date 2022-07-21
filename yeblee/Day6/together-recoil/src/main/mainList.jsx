import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import Page from "../atom/globalMovieState";
import "../css/main/mainList.css";

function MainList() {
    const [globalState, setGlobalState] = useRecoilState(Page);
    const [jip, setJip] = useState(0);
    const onCount = () => {
        setJip((jip) => jip + 1)
    }
    
    const onList = () => {
        setGlobalState((globalState) => !globalState);
    }

    useEffect(()=>{
        if (jip === 2) {
            alert("jip = " + jip);
        }
    },[jip]);
   
    return (
        <div className="main--list">
            <p>신청 가능 목록</p>
            <p className="main--listEvent"onClick={onCount}>가상 이벤트 1</p>
            <p className="main--listEvent"onClick={onList}>가상 이벤트 2</p>
            <p>가상 이벤트 3</p>
            {jip}
        </div>
    );
}

export default MainList;