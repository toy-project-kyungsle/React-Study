import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./main/index";
import Movie from "./pageB";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie' element={<Movie />} />
      </Routes>
    </Router>    
  );
}

export default App;
