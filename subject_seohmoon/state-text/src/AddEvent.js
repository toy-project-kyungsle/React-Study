import React, {useState} from "react";
import "./AddEvent.css";

function AddEvent() {
    const [name, setName] = useState(true);

    const onClick = () => {
        setName(false);
    };

    return (
        <div className="wrapper">
            <div className="A">
                <button className="A_button" onClick={onClick}>이벤트생성</button>
            </div>
            <div className="B">
                <div className="B_left">
                    <h3>신청 가능 목록</h3>
                    <h5>- 친바 모바일 테스트 기간입니다</h5>
                    <h5>- 리액트 공부해보실 분~</h5>
                    <h5>- 6/21 화요일 같이 타임스크립트 공부하실 분</h5>
                </div>
                {name ? <div className="B_right_True">
                    <h5>이벤트를 생성하고 신청할 수 있는 페이지입니다.</h5>
                    <h5>!!이벤트를 클릭해주세요!!</h5>
                    <h5>이벤트 생성도 가능하답니다~</h5>
                </div> : <div className="B_right_False">
                    <h4>친바 제목</h4>
                    <input className="text_input" placeholder="친바제목입력"></input>
                    <h4>친바 설명</h4>
                    <textarea className="content_input" placeholder="친바설명입력"></textarea>
                    <div className="B_button_bg">
                        <button className="B_button">친바생성</button>
                    </div>
                </div>}
                
            </div>
        </div>
    );
}

export default AddEvent;