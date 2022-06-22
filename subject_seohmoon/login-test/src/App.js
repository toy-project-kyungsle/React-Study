import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
