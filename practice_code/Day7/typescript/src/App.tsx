import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Router1 from "./Router1";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Router1 />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
