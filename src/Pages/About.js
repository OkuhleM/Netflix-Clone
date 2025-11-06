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

          <div className="subscribe-section">
          <h2>💖 Love Zayn’s visuals?</h2>
          <p>Don’t miss a single drop — subscribe to his official YouTube channel!</p>
          <a
            href="https://www.youtube.com/@Zayn"
            target="_blank"
            rel="noreferrer"
            className="subscribe-btn"
          >
            🔔 Subscribe on YouTube
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default About