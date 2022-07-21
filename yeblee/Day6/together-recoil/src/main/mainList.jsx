import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import State from "../atom/globalApplyState"
import "../css/main/mainList.css";

function MainList() {
    const setApplyState = useSetRecoilState(State);
    const [jip, setJip] = useState(0);
    const onCount = () => {
        setJip((jip) => jip + 1)
    }
    
    const onList = () => {
        setApplyState((applyState) => !applyState);
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