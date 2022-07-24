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
