import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="zayn">ZaynFlix 💖</h1>
        <div className="nav-links">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/singles">Singles</Link>
            </li>
            <li>
              <Link to="/videos">Music Videos</Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
