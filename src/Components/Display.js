import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "../Pages/About";
import Albums from "../Pages/Albums";
import Videos from "../Pages/Videos";
import Singles from "../Pages/Singles";
import AboutZayn from "../Pages/AboutZayn";
import AppWrapper from "./AppWrapper";

function Display() {
  return (
    <div>
      <Router>
        <AppWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutZayn />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/singles" element={<Singles />} />
        </Routes>
        </AppWrapper>
      </Router>
    </div>
  );
}

export default Display;
