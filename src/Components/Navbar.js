import React from 'react'
import { Link } from 'react-router-dom';
import '../Styling/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
<h1 className='zayn'>ZaynFlix 💖</h1>
<div className="nav-links">
     <ul className="nav">
        <li><Link to="/">About</Link></li>
        <li><Link to="/albums">Albums</Link></li>
        <li><Link to="/singles">Singles</Link></li>
        <li><Link to="/music-videos">Music Videos</Link></li>
        <li><input type='search' /></li>
      </ul>
    </div>
        </nav>
    </div>
  )
}

export default Navbar