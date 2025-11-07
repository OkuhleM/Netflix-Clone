import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";
import { Menu, X } from "lucide-react";

function Navbar() {

   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
        <h1 className="zayn">ZaynFlix 💖</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div> 

        
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            {/* <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li> */}
            <li>
              <Link to="/albums" onClick={closeMenu}>Albums</Link>
            </li>
            <li>
              <Link to="/singles" onClick={closeMenu}>Singles</Link>
            </li>
            <li>
              <Link to="/videos" onClick={closeMenu}> Music Videos</Link>
            </li>
            
          </ul>
        
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
