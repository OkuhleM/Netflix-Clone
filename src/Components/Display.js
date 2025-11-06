import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "../Pages/About";
import Albums from "../Pages/Albums";
import Videos from "../Pages/Videos";
import Singles from "../Pages/Singles";

function Display() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/singles" element={<Singles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Display;
