import React, { useEffect, useState } from "react";
import Header from "./header";

function PageA() {
    const [clickEvent, setClickEvent] = useState(false);
    const [jip, setJip] = useState(0);
    const onClick = () => {
        setClickEvent((clickEvent) => !clickEvent);
    };
    const onCount = () => {
        setJip((jip) => jip + 1)
        
    }
    useEffect(()=>{
        if (jip == 2) {
            alert("jip = " + jip);
        }
    },[jip]);

    return (
        <div className="home">
            <Header />
            <div className="home--main">
               <p className="main--title">찬바 신청하기</p>
                <div className="main--wrapper">
                    <div className="main--create">
                            <span onClick={onClick}>이벤트 생성</span>
                    </div>
                    <div className="main--list">
                        <p>신청 가능 목록</p>
                        <p>가상 이벤트 1</p>
                        <p className="main--listEvent"onClick={onCount}>가상 이벤트 2</p>
                        <p>가상 이벤트 3</p>
                        {jip}
                    </div>
                    {clickEvent ? 
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
                        :
                        <div className="main--eventInfo">
                            <p>이벤트를 생성하고 신청할 수 있는 페이지 입니다.</p>
                            <p>이벤트를 클릭해 주세요!</p>
                            <p>이벤트 생성도 가능하답니다~</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default PageA;