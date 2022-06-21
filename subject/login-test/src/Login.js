import React from "react";
import "./Login.css";

export default function Login() {
    function onClick () {
        alert ("클릭되었습니다.") 
    }
    return (
        <div className="wrapper-bg">
            <div className="wrapper">
                {/* 타이틀 */}
                <div className="A">
                    <div className="login_message">
                        어서오세요, 사서님, 친해질 시간입니다.
                    </div>
                </div>

                {/* 로그인 폼 */}
                <div className="B">
                    {/* 아이디 */}
                    <div className="B-id-bg">
                        <div className="B-id">
                            <div className="id_text">
                                아이디
                            </div>
                            <div className="id_input">
                                <input></input>
                            </div>
                        </div>
                    </div>
                    {/* 비번 */}
                    <div className="B-pw-bg">
                        <div className="B-pw">
                            <div className="pw_text">
                                비번
                            </div>
                            <div className="pw_input">
                                <input></input>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 제출 버튼 */}
                <div className="C">
                    <button className="login-button" onClick={(onClick)}>로그인</button>
                </div>
            </div>
        </div>
    );
}