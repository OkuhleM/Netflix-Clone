import React from 'react'
import zaynBanner from '../Assets/ZaynBanner.jpg';
import '../Styling/About.css'
import Navbar from '../Components/Navbar';

function About() {
  return (
    <div className="about-container">
        {/* <Navbar /> */}
        <div className="about-banner">
        <img src={zaynBanner} alt="Zayn Malik" />
        <div className="banner-overlay"></div>
        <h1 className="banner-title">ZaynFlix 💖</h1>
      </div>

      <div className="about-content">
        <h2>About ZaynFlix</h2>
        <p>
          ZaynFlix is a fan-made streaming experience dedicated to Zayn Malik’s artistry — 
          where albums, singles, and music videos come together in one cinematic space.  
          Every pixel glows with his sound, his mood, his story.
        </p>
        <p>
          Built with passion by fans, for fans. Because Zayn doesn’t just make music —
          he builds worlds, and this is ours. 🌙
        </p>
      </div>
    </div>
  )
}

export default About