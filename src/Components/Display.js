import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

function Display() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       
      </Routes>
    </Router>
    </div>
  )
}

export default Display