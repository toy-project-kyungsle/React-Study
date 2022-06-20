import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

/*
- React : 어플리케이션이 아주 인터랙티브하도록 만들어주는 library. 엔진과 같다.

- React-dom : library 또는 package. 모든 react element들을 HTML로 바꾸는 역할을 한다.

- ReactDOM.render() : render의 의미는 react element를 가지고 HTML로 만들어 화면에 띄운다는 것
즉, 사용자에게 보여준다는 의미 (렌더링을 한다!)

- ReactDOM.render(가야할 위치) : 보통 body에 id=“root” 만들어서 보냄
*/
