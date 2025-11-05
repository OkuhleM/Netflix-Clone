import React from "react";
import "../Styling/Banner.css";
import zaynBanner from "../Assets/zayn-copy.jpg";
import {albums} from "../Data/zaynData"

function Banner() {

    
  return (
    <div className="banner">
      <div className="featured-card">

      <img src={zaynBanner} alt="Zayn Malik" className="banner-img" />
      <div className="banner-overlay"></div>
      </div>
      <div className="featured-info">
        <h1 className="album-title"> Room Under The Stairs</h1>
        <p className="album-details"> 2024 • Includes  "Alienated" • "Stardust" </p>
        <button className="listen-btn">▶ LISTEN NOW</button>
      </div>

<div className="albums-section">
  <h2>Albums</h2>

  <div className="albums-grid">
    {albums.map((album)=>(
      <div key={album.id} className="album-card">
              <img
                src={album.image}
                alt={album.title}
                className="album-cover"
              />
              <div className="album-info">
                <h2>{album.title}</h2>
                <p>{album.description}</p>
                <span className="album-year">{album.year}</span>

                <a
                  href={album.link}
                  target="_blank"
                  rel="noreferrer"
                  className="album-btn"
                >
                Listen On Youtube
                </a>
              </div>
            </div>
    ))
    }
  </div>
</div>

    </div>
  );
}

export default Banner;