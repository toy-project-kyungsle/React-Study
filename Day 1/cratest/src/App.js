import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Router1 from "./Router1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Router1 />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
- Router : 웹에서 최상단에 위치하는 Router

- Routes : 그 밑의 Router

- Route : 여기서는 보통 path를 써서 가야할 위치를 설정해주고, element에 컴포넌트를 넣어줍니다.
*/
