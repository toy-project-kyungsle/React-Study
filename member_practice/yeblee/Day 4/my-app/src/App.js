import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./main/";
import B from "./bonus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/B' element={<B />} />
      </Routes>
    </Router>    
  );
}

export default App;
