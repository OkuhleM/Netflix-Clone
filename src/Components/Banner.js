import React from "react";
import "../Styling/Banner.css";
import zaynBanner from "../Assets/ZaynBanner.jpg";

function Banner() {

    
  return (
    <div className="banner">
      <img src={zaynBanner} alt="Zayn Malik" className="banner-img" />
      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1>ZAYNFLIX 💖</h1>
        <p>
          Dive into the world of Zayn Malik — where every beat tells a story, 
          and every lyric burns slow.
        </p>
        <div className="banner-buttons">
          <a
            href="https://www.youtube.com/@Zayn"
            target="_blank"
            rel="noreferrer"
            className="banner-btn"
          >
            Watch on YouTube
          </a>
          <a
            href="https://open.spotify.com/artist/5ZsFI1h6hIdQRw2ti0hz81"
            target="_blank"
            rel="noreferrer"
            className="banner-btn secondary"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;