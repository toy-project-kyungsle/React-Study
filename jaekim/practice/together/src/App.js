import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Router1 from "./login/login";
import Router2 from "./event/main_event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Router1 />} />
        <Route path="/event" element={<Router2 />} />
      </Routes>
    </Router>
  );
}

export default App;
