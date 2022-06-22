import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Router1 from "./Router1";
import Router2 from "./Router2";
import Router3 from "./Router3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Router1 />} />
        <Route path="/effect" element={<Router2 />} />
        <Route path="/navi" element={<Router3 />} />
      </Routes>
    </Router>
  );
}

export default App;
