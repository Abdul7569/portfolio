import React from "react";

// ✅ CORRECT
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from "./components/Homepage";  // make sure the file is named Homepage.js
import Navbar from "./components/Navbar";      // assuming you have a Navbar component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
