import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import State from "./State";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<State/>} />
      </Routes>
    </Router>
  );
}

export default App;
