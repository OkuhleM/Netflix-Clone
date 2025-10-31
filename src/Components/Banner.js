import React,{useState,useEffect} from "react";
import "../Styling/Banner.css";
import zaynBanner from "../Assets/ZaynBanner.jpg";

function Banner() {


    const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

const bannerImages = [
"../Assets/Zayn1.jpeg",
"../Assets/zayn2.jpeg",
"../Assets/zayn3.jpeg",
"../Assets/zayn4.jpeg",
"../Assets/zayn5.jpeg",
"../Assets/zayn6.jpeg",
"../Assets/zayn7.jpeg",
"../Assets/zayn8.jpeg",
"../Assets/zayn9.jpeg",
"../Assets/zayn10.jpeg"
];


  return (
    <div className="banner">
          {bannerImages.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      {/* <img src={zaynBanner} alt="Zayn Malik" className="banner-img" />
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
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Banner;