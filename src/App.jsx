import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Library from "./main-component/Library";
import AboutMe from "./main-component/AboutMe";
import Home from "./main-component/home";
import "./App.css"; // Ensure styles are imported

function App() {
  return (
    <Router> {/* Router should wrap everything */}
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
