import React from 'react'
import { Link } from 'react-router-dom';
import '../Styling/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
<h1>ZaynFlix 💖</h1>
<div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/videos">Videos</Link>
      <Link to="/about">About</Link>
    </div>
        </nav>
    </div>
  )
}

export default Navbar