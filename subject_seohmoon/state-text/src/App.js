import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import State from "./State";
import B from "./B";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<State/>} />
        <Route path="/B" element={<B />} />
      </Routes>
    </Router>
  );
}

export default App;
