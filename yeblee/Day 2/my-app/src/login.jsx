import React from "react";
import "./login.css";

function Login() {
    function loginSubmit(e) {
        // e.preventDefault();
        alert("제출되었습니다.");
    }
    function clickBtn() {
        alert("버튼을 클릭했습니다.");
    }
    return (
        <div className="login">
            <form id="login" className="login--form" onSubmit={loginSubmit}>
                <p>어서오세요 사서님, 친해질 시간입니다!</p>
                <div className="login--input">
                    <span>아이디 </span>
                    <input id="id" type="id" name="id" />
                </div>
                <div className="login--input">
                    <span>비밀번호 </span>
                    <input id="password" type="password" name="password" />
                </div>
                <div className="login--button">
                <button id="loginbtn" type="submit" onClick={clickBtn}>로그인</button>
                </div>
            </form>
        </div>
    );
}

export default Login;