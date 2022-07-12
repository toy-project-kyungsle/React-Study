import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Router1 from "./login/login";
import Router2 from "./event/main_event";
import Router3 from "./movie/main_event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Router2 />} />
        <Route path="/login" element={<Router1 />} />
        <Route path="/movie" element={<Router3 />} />
      </Routes>
    </Router>
  );
}

export default App;
