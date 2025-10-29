import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from '../Pages/About';

function Display() {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/about' element={<About />} />
       
      </Routes>
    </Router>
    </div>
  )
}

export default Display