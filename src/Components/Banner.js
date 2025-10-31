import React, { useState, useEffect } from "react";
import "../Styling/Banner.css";
import zaynBanner from "../Assets/ZaynBanner.jpg";
import Zayn1 from "../Assets/Zayn1.jpeg";
import Zayn2 from "../Assets/zayn2.jpeg";
import Zayn3 from "../Assets/zayn3.jpeg";
import Zayn4 from "../Assets/zayn4.jpeg";
import Zayn5 from "../Assets/zayn5.jpeg";
import Zayn6 from "../Assets/zayn6.jpeg";
import Zayn7 from "../Assets/zayn7.jpeg";
import Zayn8 from "../Assets/zayn8.jpeg";
import Zayn9 from "../Assets/zayn9.jpeg";
import Zayn10 from "../Assets/zayn10.jpeg";
function Banner() {

  const bannerImages = [
    zaynBanner,
    Zayn1,
    Zayn2,
    Zayn3,
    Zayn4,
    Zayn5,
    Zayn6,
    Zayn7,
    Zayn8,
    Zayn9,
    Zayn10,
  ];
    const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="banner">
      {bannerImages.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay text */}
      <div className="banner-overlay">
        <h1 className="banner-title">ZAYNFLIX 💖</h1>
        <p className="banner-subtitle">
          Dive into the world of Zayn Malik — where every beat tells a story and every lyric burns slow.
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
    </div>
  );
}

export default Banner;
