import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import A from "./pageA";
import B from "./pageB";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<A />} />
        <Route path='/B' element={<B />} />
      </Routes>
    </Router>    
  );
}

export default App;
